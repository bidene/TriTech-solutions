import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Palette,
  BarChart3,
  Network,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Layers,
  Target,
  Rocket,
  Headphones,
  Search,
  Pencil,
  Beaker,
} from 'lucide-react';
import { companyInfo, services, processSteps, faqs } from '@/data/site';

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

const processIcons: Record<string, typeof Target> = {
  Search,
  Pencil,
  Beaker,
  Rocket,
};

const processIconColors: Record<string, string> = {
  Search: 'text-blue-600',
  Pencil: 'text-purple-600',
  Beaker: 'text-green-600',
  Rocket: 'text-orange-600',
};

export default function Services() {
  const navigate = useNavigate();
  const [visibleSection, setVisibleSection] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = ['all', 'web', 'mobile', 'cloud', 'security', 'design', 'data', 'network'];

  const filteredServices = selectedFilter === 'all' 
    ? services 
    : services.filter(service => service.category === selectedFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisibleSection(entry.target.id);
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img src={services[0].image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>
        <div className="absolute top-1/3 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />

        <div className="relative z-10 container-page text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in-down">
            <Layers className="w-4 h-4 text-accent-300" />
            <span className="text-sm font-semibold text-white">Nos services</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto mb-6 animate-fade-in-up">
            Des solutions <span className="text-gradient-light">sur mesure</span>{' '}
            pour chaque besoin
          </h1>
          <p className="text-lg text-neutral-200 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Nous offrons une gamme complète de services technologiques pour
            vous accompagner de la stratégie au déploiement. Chaque solution
            est pensée pour votre activité.
          </p>
        </div>
      </section>

      {/* ===== SERVICES DETAIL ===== */}
      <section id="services-detail" data-animate className="py-24 lg:py-32 bg-white">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="badge bg-primary-100 text-primary-700 mb-4">
              <Rocket className="w-3.5 h-3.5" />
              Expertises
            </span>
            <h2 className="section-title mb-4">
              Tout ce dont vous avez{' '}
              <span className="text-gradient">besoin</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Sept domaines d'expertise complémentaires pour couvrir l'ensemble
              de vos besoins numériques.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedFilter === 'all'
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Tous
            </button>
            {categories.slice(1).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all capitalize ${
                  selectedFilter === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredServices.map((service, i) => {
              const Icon = iconMap[service.icon.name] || service.icon;
              const colorClass = iconColors[service.icon.name] || 'from-primary-500 to-accent-500';
              const bgClass = iconBgColors[service.icon.name] || 'bg-primary-50';
              const isReversed = i % 2 === 1;
              return (
                <div
                  key={service.title}
                  id={`service-${i}`}
                  className={`grid lg:grid-cols-2 gap-8 items-center card overflow-hidden ${
                    visibleSection === 'services-detail' ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Image */}
                  <div className={`relative h-64 lg:h-80 overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${bgClass} flex items-center justify-center shadow-lg`}>
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-10 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl font-display font-extrabold text-neutral-100 leading-none">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-neutral-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-neutral-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate('/contact')}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group"
                    >
                      Discuter de ce service
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" data-animate className="py-24 lg:py-32 bg-neutral-50">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="badge bg-accent-100 text-accent-700 mb-4">
              <Target className="w-3.5 h-3.5" />
              Méthodologie
            </span>
            <h2 className="section-title mb-4">
              Comment nous{' '}
              <span className="text-gradient">travaillons</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Un processus structuré et transparent pour garantir la réussite
              de votre projet à chaque étape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = processIcons[step.icon.name] || step.icon;
              const iconColorClass = processIconColors[step.icon.name] || 'text-primary-500';
              return (
                <div
                  key={step.number}
                  className={`card card-hover p-7 group ${visibleSection === 'process' ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 border-2 border-neutral-200`}>
                      <Icon className={`w-7 h-7 ${iconColorClass}`} strokeWidth={1.8} />
                    </div>
                    <span className="font-display text-4xl font-extrabold text-neutral-100">
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

      {/* ===== SUPPORT BANNER ===== */}
      <section className="py-16 bg-white border-y border-neutral-100">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/30 flex items-center justify-center shrink-0">
                <Headphones className="w-8 h-8 text-white" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-neutral-900 mb-1">
                  Support & maintenance inclus
                </h3>
                <p className="text-sm text-neutral-600 max-w-md">
                  Chaque projet inclut 3 mois de support gratuit. Nous restons à
                  vos côtés bien après la livraison.
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary shrink-0"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" data-animate className="py-24 lg:py-32 bg-neutral-50">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="badge bg-warning-100 text-warning-700 mb-4">
              <Headphones className="w-3.5 h-3.5" />
              FAQ
            </span>
            <h2 className="section-title mb-4">
              Questions{' '}
              <span className="text-gradient">fréquentes</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Tout ce que vous devez savoir avant de démarrer votre projet avec
              nous.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`card overflow-hidden ${visibleSection === 'faq' ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left group"
                >
                  <span className="font-display font-bold text-neutral-900 text-base lg:text-lg pr-4 group-hover:text-primary-700 transition-colors">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openFaq === i ? 'bg-primary-600 text-white rotate-180' : 'bg-neutral-100 text-neutral-500'
                  }`}>
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-sm text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900 to-accent-900" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 container-page text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-6 max-w-2xl mx-auto">
            Quel service correspond à votre besoin ?
          </h2>
          <p className="text-lg text-primary-100 max-w-xl mx-auto mb-10">
            Parlons de votre projet. Notre équipe vous orientera vers la meilleure
            solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-bold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/[\s+]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent-500 text-white font-bold text-sm shadow-xl hover:bg-accent-600 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
