import { createClient } from '@supabase/supabase-js';

// Configuration Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Service API pour les contacts
export const contactService = {
  // Envoyer un formulaire de contact
  async submitContact(formData: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    subject: string;
    message: string;
  }) {
    try {
      // Utilisation de l'Edge Function Supabase pour la validation côté serveur
      const response = await fetch(`${supabaseUrl}/functions/v1/contact-api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de l\'envoi du formulaire');
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur service contact:', error);
      throw error;
    }
  },

  // Récupérer les contacts (pour l'admin)
  async getContacts() {
    try {
      if (!supabase) throw new Error('Supabase n’est pas configuré');
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erreur récupération contacts:', error);
      throw error;
    }
  },

  // Mettre à jour le statut d'un contact
  async updateContactStatus(contactId: string, status: 'pending' | 'processing' | 'completed' | 'failed') {
    try {
      if (!supabase) throw new Error('Supabase n’est pas configuré');
      const { data, error } = await supabase
        .from('contacts')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', contactId)
        .select();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erreur mise à jour statut:', error);
      throw error;
    }
  },
};

// Fallback local pour le développement (si Supabase n'est pas configuré)
export const localContactService = {
  async submitContact(formData: Record<string, string>) {
    // Simulation pour le développement
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Contact enregistré (simulation locale):', formData);
        resolve({
          success: true,
          message: 'Votre demande a été enregistrée avec succès (mode simulation)',
          contactId: 'local-' + Date.now(),
        });
      }, 1500);
    });
  },
};