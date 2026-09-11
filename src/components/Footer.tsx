import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MessageCircle, MapPin, Clock, ArrowRight, Linkedin, Twitter, Facebook } from 'lucide-react';
import { companyInfo, navLinks, services } from '@/data/site';
import logo from '@/assets/logo.jpeg';

const socialNetworks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    color: 'text-blue-600',
    hoverColor: 'hover:bg-blue-600',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    color: 'text-sky-500',
    hoverColor: 'hover:bg-sky-500',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    color: 'text-blue-700',
    hoverColor: 'hover:bg-blue-700',
  },
];

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="relative bg-neutral-950 text-neutral-400 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/40 via-neutral-950 to-accent-950/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl" />

      <div className="relative container-page pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => navigate('/')} className="flex items-center gap-2.5 mb-5">
              <img
                src={logo}
                alt="TriTech Solution Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-xl object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-lg text-white">TriTech</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-primary-400 uppercase">Solution</span>
              </div>
            </button>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              {companyInfo.tagline}. Nous transformons vos idées en solutions numériques innovantes.
            </p>
            <div className="flex gap-3 mt-6">
              {socialNetworks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href="#"
                    className={`w-9 h-9 rounded-lg bg-neutral-800 ${social.hoverColor} flex items-center justify-center transition-all duration-300`}
                    aria-label={social.name}
                  >
                    <Icon className={`w-5 h-5 ${social.color}`} strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-5">
              Nos services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <button
                    onClick={() => navigate('/services')}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary-500" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[\s+]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-neutral-400 hover:text-accent-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-accent-500" />
                  WhatsApp : {companyInfo.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary-500" />
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-500" />
                {companyInfo.fullAddress}
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary-500" />
                {companyInfo.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} {companyInfo.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-neutral-500">
            <button onClick={() => navigate('/legal')} className="hover:text-primary-400 transition-colors">Mentions légales</button>
            <button onClick={() => navigate('/privacy')} className="hover:text-primary-400 transition-colors">Politique de confidentialité</button>
            <button onClick={() => navigate('/terms')} className="hover:text-primary-400 transition-colors">Conditions d'utilisation</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
