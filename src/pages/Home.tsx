import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  Quote,
  Sparkles,
  Rocket,
  Users,
  Award,
  Target,
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Palette,
  BarChart3,
  Network,
  Phone,
  MessageCircle,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Search,
  Pencil,
  Beaker,
} from 'lucide-react';
import {
  companyInfo,
  services,
  stats,
  processSteps,
  testimonials,
  technologies,
  heroImage,
  ctaImage,
} from '@/data/site';

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Palette,
  BarChart3,
  Network,
};

const iconColors: Record<string, string> = {
  Code2: 'from-blue-600 to-cyan-600',
  Smartphone: 'from-purple-600 to-pink-600',
  Cloud: 'from-sky-600 to-blue-600',
  ShieldCheck: 'from-green-600 to-emerald-600',
  Palette: 'from-orange-600 to-red-600',
  BarChart3: 'from-indigo-600 to-purple-600',
  Network: 'from-teal-600 to-cyan-600',
};

const iconBgColors: Record<string, string> = {
  Code2: 'bg-blue-50',
  Smartphone: 'bg-purple-50',
  Cloud: 'bg-sky-50',
  ShieldCheck: 'bg-green-50',
  Palette: 'bg-orange-50',
  BarChart3: 'bg-indigo-50',
  Network: 'bg-teal-50',
};

const processIconColors: Record<string, string> = {
  Search: 'text-blue-600',
  Pencil: 'text-purple-600',
  Beaker: 'text-green-600',
  Rocket: 'text-orange-600',
};

const processIcons: Record<string, typeof Search> = {
  Search,
  Pencil,
  Beaker,
  Rocket,
};

const statsIcons: Record<string, typeof TrendingUp> = {
  'Projets livrés': TrendingUp,
  'Clients satisfaits': Users,
  "Années d'expérience": Clock,
  'Experts passionnés': Award,
};

const statsColors: Record<string, string> = {
  'Projets livrés': 'from-blue-500 to-cyan-500',
  'Clients satisfaits': 'from-purple-500 to-pink-500',
  "Années d'expérience": 'from-orange-500 to-red-500',
  'Experts passionnés': 'from-green-500 to-emerald-500',
};

export default function Home() {
  const navigate = useNavigate();
  const [visibleSection, setVisibleSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="TriTech Solution team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 container-page">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in-down">
              <Sparkles className="w-4 h-4 text-accent-300" />
              <span className="text-sm font-semibold text-white">
                Votre partenaire de transformation digitale
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-in-up">
              Nous construisons les{' '}
              <span className="text-gradient-light">solutions numériques</span>{' '}
              de demain
            </h1>

            <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              {companyInfo.name} conçoit des applications web, mobiles et cloud
              sur mesure pour les entreprises ambitieuses. De l'idée au
              déploiement, nous transformons votre vision en réalité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => navigate('/services')} className="btn-primary group">
                Découvrir nos services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold text-sm tracking-wide border border-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
              >
                Demander un devis gratuit
              </button>
            </div>

            {/* Quick contact bar */}
            <div className="flex flex-wrap items-center gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm text-neutral-200 hover:text-white transition-colors"
              >
                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </span>
                {companyInfo.phone}
              </a>
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/[\s+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-200 hover:text-white transition-colors"
              >
                <span className="w-9 h-9 rounded-lg bg-accent-500/30 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="relative bg-neutral-900 py-12 border-b border-neutral-800">
        <div className="container-page">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = statsIcons[stat.label] || TrendingUp;
              const colorClass = statsColors[stat.label] || 'from-primary-500 to-accent-500';
              return (
                <div
                  key={stat.label}
                  className="text-center group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClass} mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.8} />
                  </div>
                  <div className="font-display text-4xl lg:text-5xl font-extrabold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section id="services-preview" data-animate className="py-24 lg:py-32 bg-neutral-50">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="badge bg-primary-100 text-primary-700 mb-4">
              <Rocket className="w-3.5 h-3.5" />
              Nos expertises
            </span>
            <h2 className="section-title mb-4">
              Des services <span className="text-gradient">complets</span> pour
              votre digitalisation
            </h2>
            <p className="section-subtitle mx-auto">
              De la stratégie au déploiement, nous couvrons l'ensemble du cycle
              de vie de vos projets numériques avec une équipe d'experts
              passionnés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon.name] || service.icon;
              const colorClass = iconColors[service.icon.name] || 'from-primary-500 to-primary-700';
              const bgClass = iconBgColors[service.icon.name] || 'bg-primary-50';
              return (
                <div
                  key={service.title}
                  className={`card card-hover p-7 group cursor-pointer ${
                    visibleSection === 'services-preview' ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  onClick={() => navigate('/services')}
                >
                  <div className={`w-16 h-16 rounded-2xl ${bgClass} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                    {service.short}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary-600 group-hover:gap-3 transition-all">
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => navigate('/services')} className="btn-secondary">
              Voir tous les services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" data-animate className="py-24 lg:py-32 bg-white">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="badge bg-accent-100 text-accent-700 mb-4">
              <Target className="w-3.5 h-3.5" />
              Notre méthode
            </span>
            <h2 className="section-title mb-4">
              Un processus <span className="text-gradient">éprouvé</span> en 4
              étapes
            </h2>
            <p className="section-subtitle mx-auto">
              Nous suivons une méthodologie rigoureuse pour garantir la réussite
              de chaque projet, de la première idée à la mise en production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200" />

            {processSteps.map((step, i) => {
              const Icon = processIcons[step.icon.name] || step.icon;
              const iconColorClass = processIconColors[step.icon.name] || 'text-primary-500';
              return (
                <div
                  key={step.number}
                  className={`relative card card-hover p-7 text-center group ${
                    visibleSection === 'process' ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="relative mx-auto w-16 h-16 mb-5">
                    <div className="absolute inset-0 rounded-2xl bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 border-2 border-neutral-200">
                      <Icon className={`w-7 h-7 ${iconColorClass}`} strokeWidth={1.8} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHY US (split) ===== */}
      <section id="why-us" data-animate className="py-24 lg:py-32 bg-neutral-50">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={visibleSection === 'why-us' ? 'animate-fade-in-left' : 'opacity-0'}>
              <span className="badge bg-primary-100 text-primary-700 mb-4">
                <Award className="w-3.5 h-3.5" />
                Pourquoi nous choisir
              </span>
              <h2 className="section-title mb-6">
                Une équipe d'experts au service de{' '}
                <span className="text-gradient">votre succès</span>
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Depuis {companyInfo.foundedYear}, {companyInfo.name} accompagne
                les entreprises dans leur transformation digitale. Nous
                combinons expertise technique, créativité et proximité pour
                livrer des solutions qui font la différence.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { text: 'Équipe certifiée et expérimentée', icon: Award, color: 'from-purple-500 to-pink-500' },
                  { text: 'Technologies de pointe et open-source', icon: Zap, color: 'from-blue-500 to-cyan-500' },
                  { text: 'Approche agile et transparente', icon: Target, color: 'from-green-500 to-emerald-500' },
                  { text: 'Support technique continu post-livraison', icon: Shield, color: 'from-orange-500 to-red-500' },
                  { text: 'Solutions sur mesure adaptées à votre métier', icon: Code2, color: 'from-indigo-500 to-purple-500' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 mt-0.5`}>
                      <item.icon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-sm text-neutral-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => navigate('/about')} className="btn-primary">
                En savoir plus sur nous
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className={`relative ${visibleSection === 'why-us' ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-neutral-900/20">
                <img
                  src={ctaImage}
                  alt="TriTech team collaboration"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-[240px] border border-neutral-100 animate-float">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-extrabold text-neutral-900">25+</div>
                    <div className="text-xs text-neutral-500">Experts dédiés</div>
                  </div>
                </div>
                <p className="text-xs text-neutral-400 mt-2">
                  Une équipe pluridisciplinaire à votre service
                </p>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-primary-600 text-white rounded-2xl shadow-xl px-5 py-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current text-warning-400" />
                  <div>
                    <div className="font-display font-bold text-lg leading-none">4.9/5</div>
                    <div className="text-[10px] text-primary-200">satisfaction client</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="py-16 bg-white border-y border-neutral-100">
        <div className="container-page">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <p className="text-center text-sm font-semibold text-neutral-400 uppercase tracking-wider">
              Technologies que nous maîtrisons
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {technologies.map((tech, i) => {
              const colors = [
                'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:shadow-blue-500/20',
                'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 hover:shadow-purple-500/20',
                'bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:shadow-green-500/20',
                'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 hover:shadow-orange-500/20',
                'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100 hover:shadow-indigo-500/20',
                'bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100 hover:shadow-teal-500/20',
              ];
              const colorClass = colors[i % colors.length];
              return (
                <span
                  key={tech}
                  className={`px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-default hover:scale-105 hover:shadow-lg ${colorClass}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" data-animate className="py-24 lg:py-32 bg-neutral-50">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="badge bg-warning-100 text-warning-700 mb-4">
              <Star className="w-3.5 h-3.5" />
              Témoignages
            </span>
            <h2 className="section-title mb-4">
              Ce que nos clients <span className="text-gradient">disent</span>
            </h2>
            <p className="section-subtitle mx-auto">
              La satisfaction de nos clients est notre meilleure publicité.
              Découvrez ce qu'ils pensent de notre travail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const quoteColors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-emerald-500',
              ];
              const quoteColor = quoteColors[i % quoteColors.length];
              return (
                <div
                  key={t.name}
                  className={`card card-hover p-7 ${visibleSection === 'testimonials' ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${quoteColor} flex items-center justify-center mb-4`}>
                    <Quote className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-warning-400 text-warning-400" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6 italic">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-neutral-900">{t.name}</div>
                      <div className="text-xs text-neutral-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={ctaImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900 to-accent-900 opacity-95" />
        </div>

        <div className="relative z-10 container-page text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center shadow-lg shadow-accent-500/30">
              <Rocket className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Prêt à lancer votre prochain projet digital ?
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-10">
            Discutons de votre idée. Le premier devis est offert et sans
            engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-bold text-sm tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Démarrer mon projet
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-bold text-sm tracking-wide border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
