import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Configuration Supabase
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY') || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const requestCounts = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

// Validation des données
function validateContactData(data: Record<string, unknown>) {
  const errors: string[] = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Le nom doit contenir au moins 2 caractères');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Adresse email invalide');
  }
  
  if (!data.subject || data.subject.trim().length < 3) {
    errors.push('Le sujet doit contenir au moins 3 caractères');
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères');
  }
  
  // Validation optionnelle du téléphone
  if (data.phone && data.phone.trim()) {
    const phoneRegex = /^[+]?[(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}$/;
    if (!phoneRegex.test(data.phone)) {
      errors.push('Numéro de téléphone invalide');
    }
  }
  
  return errors;
}

// Fonction pour envoyer un email via un service (à configurer)
async function sendEmail(contactData: Record<string, unknown>) {
  // Pour l'instant, on simule l'envoi d'email
  // Dans un environnement de production, vous pouvez utiliser:
  // - SendGrid API
  // - Mailgun API
  // - Supabase Email Hooks
  // - Resend
  
  console.log('Envoi d\'email simulé pour:', contactData.email);
  
  // Exemple avec SendGrid (à configurer avec vos clés API)
  /*
  const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Deno.env.get('SENDGRID_API_KEY')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{ email: contactData.email }],
        from: { email: companyInfo.email, name: companyInfo.name },
        subject: `Merci pour votre demande - ${companyInfo.name}`,
        content: [{
          type: 'text/plain',
          value: `Bonjour ${contactData.name},\n\nNous avons bien reçu votre demande concernant "${contactData.subject}".\n\nNous vous répondrons dans les plus brefs délais.\n\nCordialement,\nL'équipe ${companyInfo.name}`,
        }],
      }],
    }),
  });
  */
  
  return { success: true, message: 'Email envoyé avec succès' };
}

serve(async (req) => {
  // Gestion des CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const now = Date.now();
  const current = requestCounts.get(clientIp);
  if (!current || current.resetAt <= now) {
    requestCounts.set(clientIp, { count: 1, resetAt: now + RATE_WINDOW_MS });
  } else if (current.count >= RATE_LIMIT) {
    return new Response(JSON.stringify({ success: false, error: 'Trop de demandes. Veuillez réessayer plus tard.' }), {
      status: 429,
      headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Retry-After': '900' },
    });
  } else {
    current.count += 1;
  }

  try {
    if (req.method === 'POST') {
      const body = await req.json();
      
      // Validation des données
      const validationErrors = validateContactData(body);
      if (validationErrors.length > 0) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            errors: validationErrors 
          }),
          { 
            status: 400, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      // Insertion dans la base de données
      const { data, error } = await supabase
        .from('contacts')
        .insert({
          name: body.name.trim(),
          email: body.email.trim().toLowerCase(),
          company: body.company?.trim() || null,
          phone: body.phone?.trim() || null,
          subject: body.subject.trim(),
          message: body.message.trim(),
          status: 'pending',
          metadata: {
            ip: req.headers.get('x-forwarded-for') || 'unknown',
            user_agent: req.headers.get('user-agent') || 'unknown',
          },
        })
        .select();
      
      if (error) {
        console.error('Erreur insertion base de données:', error);
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'Erreur lors de l\'enregistrement de votre demande' 
          }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      // Envoi de l'email de confirmation
      await sendEmail(body);
      
      // Mise à jour du statut
      await supabase
        .from('contacts')
        .update({ status: 'processing' })
        .eq('id', data[0].id);
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Votre demande a été enregistrée avec succès. Nous vous répondrons dans les plus brefs délais.',
          contactId: data[0].id 
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }
    
    // GET endpoint pour récupérer les contacts (protégé en production)
    if (req.method === 'GET') {
      const adminKey = Deno.env.get('CONTACT_ADMIN_KEY');
      if (!adminKey || req.headers.get('x-admin-key') !== adminKey) {
        return new Response(JSON.stringify({ success: false, error: 'Non autorisé' }), {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);
      
      if (error) {
        return new Response(
          JSON.stringify({ success: false, error: 'Erreur lors de la récupération des contacts' }),
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      return new Response(
        JSON.stringify({ success: true, contacts: data }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }
    
    return new Response('Method Not Allowed', { 
      status: 405, 
      headers: corsHeaders 
    });
    
  } catch (error) {
    console.error('Erreur serveur:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Erreur interne du serveur' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});