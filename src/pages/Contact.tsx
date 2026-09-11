import { useState } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  X,
  Navigation,
  User,
  Building2,
  Loader2,
  Sparkles,
  Shield,
  AlertCircle,
} from 'lucide-react';
import { companyInfo } from '@/data/site';
import { contactService, localContactService } from '@/services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [mapOpen, setMapOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Vérifier si Supabase est configuré
      const isSupabaseConfigured = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      let response;
      if (isSupabaseConfigured) {
        response = await contactService.submitContact(formData);
      } else {
        // Fallback en mode développement
        response = await localContactService.submitContact(formData);
      }

      if (response.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(response.error || 'Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
      console.error('Erreur formulaire:', error);
    }
  };

  const contactCards = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: companyInfo.phone,
      href: `tel:${companyInfo.phone.replace(/\s/g, '')}`,
      color: 'from-primary-500 to-primary-700',
      bg: 'bg-primary-50',
      text: 'text-primary-700',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: companyInfo.whatsapp,
      href: `https://wa.me/${companyInfo.whatsapp.replace(/[\s+]/g, '')}`,
      color: 'from-accent-500 to-accent-700',
      bg: 'bg-accent-50',
      text: 'text-accent-700',
    },
    {
      icon: Mail,
      label: 'Email',
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
      color: 'from-warning-500 to-warning-700',
      bg: 'bg-warning-50',
      text: 'text-warning-700',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7495656/pexels-photo-7495656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>
        <div className="absolute top-1/3 right-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" />

        <div className="relative z-10 container-page text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center shadow-lg shadow-accent-500/30">
              <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in-down">
            <Mail className="w-4 h-4 text-accent-300" />
            <span className="text-sm font-semibold text-white">Contactez-nous</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto mb-6 animate-fade-in-up">
            Parlons de votre{' '}
            <span className="text-gradient-light">projet</span>
          </h1>
          <p className="text-lg text-neutral-200 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Notre équipe est à votre écoute. Décrivez votre besoin et nous vous
            répondons sous 24 heures avec un devis gratuit et personnalisé.
          </p>
        </div>
      </section>

      {/* ===== CONTACT CARDS ===== */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.label === 'WhatsApp' || card.label === 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="card card-hover p-7 group animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`w-14 h-14 rounded-2xl ${card.label === 'WhatsApp' ? 'bg-green-50' : card.label === 'Téléphone' ? 'bg-blue-50' : 'bg-orange-50'} flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`w-7 h-7 ${card.label === 'WhatsApp' ? 'text-green-500' : card.label === 'Téléphone' ? 'text-blue-600' : 'text-orange-500'}`} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    {card.label}
                  </h3>
                  <p className={`text-sm font-semibold ${card.text} mb-1`}>
                    {card.value}
                  </p>
                  <p className="text-xs text-neutral-400">
                    Cliquez pour contacter
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FORM + MAP ===== */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-page">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-8 lg:p-10">
                <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">
                  Demandez votre devis gratuit
                </h2>
                <p className="text-sm text-neutral-500 mb-8">
                  Remplissez le formulaire ci-dessous. Nous vous répondons sous 24 heures.
                </p>

                <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">100% gratuit</div>
                    <div className="text-xs text-neutral-500">Sans engagement</div>
                  </div>
                </div>

                {status === 'sent' && (
                  <div className="mb-6 p-4 rounded-xl bg-accent-50 border border-accent-200 flex items-center gap-3 animate-fade-in-down">
                    <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0" />
                    <p className="text-sm font-medium text-accent-800">
                      Merci ! Votre message a bien été envoyé. Nous vous répondrons très bientôt.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="vous@entreprise.com"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Entreprise
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nom de l'entreprise"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Téléphone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+229 ..."
                          className="input-field pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Sélectionnez un service...</option>
                      <option value="web">Développement Web</option>
                      <option value="mobile">Développement Mobile</option>
                      <option value="cloud">Cloud & DevOps</option>
                      <option value="security">Cybersécurité</option>
                      <option value="design">UI / UX Design</option>
                      <option value="data">Data & Analytics</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet en quelques mots..."
                      className="input-field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Status messages */}
                  {status === 'sent' && (
                    <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-800">Message envoyé avec succès !</p>
                        <p className="text-sm text-green-700">Nous vous répondrons dans les plus brefs délais.</p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-800">Erreur lors de l'envoi</p>
                        <p className="text-sm text-red-700">{errorMessage || 'Une erreur est survenue. Veuillez réessayer.'}</p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info card */}
              <div className="card p-7">
                <h3 className="font-display text-lg font-bold text-neutral-900 mb-5">
                  Informations de contact
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wide">Téléphone</div>
                      <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-sm font-semibold text-neutral-800 hover:text-primary-700 transition-colors">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/20">
                      <MessageCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wide">WhatsApp</div>
                      <a href={`https://wa.me/${companyInfo.whatsapp.replace(/[\s+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-neutral-800 hover:text-green-600 transition-colors">
                        {companyInfo.whatsapp}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                      <Mail className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wide">Email</div>
                      <a href={`mailto:${companyInfo.email}`} className="text-sm font-semibold text-neutral-800 hover:text-warning-700 transition-colors">
                        {companyInfo.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                      <MapPin className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wide">Adresse</div>
                      <p className="text-sm font-semibold text-neutral-800">{companyInfo.fullAddress}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wide">Horaires</div>
                      <p className="text-sm font-semibold text-neutral-800">{companyInfo.hours}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">Sam : 9h – 13h · Dim : Fermé</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map card with popup trigger */}
              <div className="card overflow-hidden">
                <div
                  className="relative h-48 cursor-pointer group"
                  onClick={() => setMapOpen(true)}
                >
                  <iframe
                    title={`Localisation de ${companyInfo.name}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.fullAddress)}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-display text-sm font-bold text-neutral-900 mb-1">
                    {companyInfo.address}
                  </h3>
                  <p className="text-xs text-neutral-500 mb-3">{companyInfo.fullAddress}</p>
                  <button
                    onClick={() => setMapOpen(true)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Ouvrir la carte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP POPUP MODAL ===== */}
      {mapOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setMapOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-neutral-900">
                    {companyInfo.name}
                  </h3>
                  <p className="text-xs text-neutral-500">{companyInfo.fullAddress}</p>
                </div>
              </div>
              <button
                onClick={() => setMapOpen(false)}
                className="w-10 h-10 rounded-xl bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Map iframe */}
            <div className="relative h-[400px] bg-neutral-100">
              <iframe
                title="Carte TriTech-Solution"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.fullAddress)}&output=embed`}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Footer */}
            <div className="p-5 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-neutral-700 hover:text-primary-700 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-primary-600" />
                  {companyInfo.phone}
                </a>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[\s+]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-700 hover:text-accent-700 transition-colors font-medium"
                >
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  WhatsApp
                </a>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                Itinéraire
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
