import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Target,
  Heart,
  Zap,
  Globe,
  Award,
  Users,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Star,
  Briefcase,
  GraduationCap,
  Trophy,
  TrendingUp,
  Clock,
  Shield,
  Sparkles,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { companyInfo, values, stats, aboutHeroImage, aboutImage2, team } from '@/data/site';

const iconMap: Record<string, typeof Target> = {
  Target,
  Heart,
  Zap,
  Globe,
};

const iconColors: Record<string, string> = {
  Target: 'from-primary-500 to-accent-500',
  Heart: 'from-red-500 to-pink-500',
  Zap: 'from-yellow-500 to-orange-500',
  Globe: 'from-blue-500 to-cyan-500',
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

export default function About() {
  const navigate = useNavigate();
  const [visibleSection, setVisibleSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisibleSection(entry.target.id);
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const leader = team[0];

  return (
    <div className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img src={aboutHeroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>
        <div className="absolute top-1/3 right-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" />

        <div className="relative z-10 container-page text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in-down">
            <Users className="w-4 h-4 text-accent-300" />
            <span className="text-sm font-semibold text-white">À propos de nous</span>
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto mb-6 animate-fade-in-up">
            Une équipe passionnée, une{' '}
            <span className="text-gradient-light">vision technologique</span>
          </h1>
          <p className="text-lg text-neutral-200 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Depuis {companyInfo.foundedYear}, nous accompagnons les entreprises
            dans leur transformation digitale avec passion, expertise et
            engagement.
          </p>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section id="story" data-animate className="py-24 lg:py-32 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={visibleSection === 'story' ? 'animate-fade-in-left' : 'opacity-0'}>
              <span className="badge bg-primary-100 text-primary-700 mb-4">
                <Briefcase className="w-3.5 h-3.5" />
                Notre histoire
              </span>
              <h2 className="section-title mb-6">
                Née d'une passion pour{' '}
                <span className="text-gradient">l'innovation</span>
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Fondée en {companyInfo.foundedYear} par des ingénieurs
                  passionnés, {companyInfo.name} est née d'un constat simple :
                  les entreprises africaines méritent des solutions
                  technologiques de classe mondiale, adaptées à leurs réalités.
                </p>
                <p>
                  Ce qui a commencé comme un petit studio de développement est
                  devenu une agence digitale reconnue, comptant aujourd'hui
                  plus de 25 experts et 80 clients satisfaits à travers
                  l'Afrique de l'Ouest.
                </p>
                <p>
                  Notre mission reste inchangée : démocratiser l'accès aux
                  technologies de pointe et accompagner chaque client vers le
                  succès numérique, quelle que soit la taille de son projet.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.slice(0, 4).map((stat) => {
                  const Icon = statsIcons[stat.label] || TrendingUp;
                  const colorClass = statsColors[stat.label] || 'from-primary-500 to-accent-500';
                  return (
                    <div key={stat.label} className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 group hover:shadow-lg transition-shadow">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <div className="font-display text-3xl font-extrabold text-gradient mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-neutral-500 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`relative ${visibleSection === 'story' ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-neutral-900/15">
                <img
                  src={aboutImage2}
                  alt="TriTech team at work"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-neutral-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-extrabold text-neutral-900">7+</div>
                    <div className="text-xs text-neutral-500">années d'innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-24 bg-neutral-50">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-8 lg:p-10 border-l-4 border-l-primary-500 group hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-primary-500/30">
                <Target className="w-7 h-7 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">Notre Mission</h3>
              <p className="text-neutral-600 leading-relaxed">
                Démocratiser l'accès aux technologies numériques de pointe pour
                les entreprises africaines. Nous nous engageons à livrer des
                solutions sur mesure, fiables et durables, qui créent une
                valeur réelle pour nos clients et leur écosystème.
              </p>
            </div>
            <div className="card p-8 lg:p-10 border-l-4 border-l-accent-500 group hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-blue-500/30">
                <Globe className="w-7 h-7 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">Notre Vision</h3>
              <p className="text-neutral-600 leading-relaxed">
                Devenir le partenaire technologique de référence en Afrique de
                l'Ouest, en bâtissant un écosystème numérique florissant où
                chaque entreprise, de la startup à la multinationale, peut
                s'appuyer sur des technologies de classe mondiale pour
                transformer son activité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section id="values" data-animate className="py-24 lg:py-32 bg-white">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="badge bg-accent-100 text-accent-700 mb-4">
              <Heart className="w-3.5 h-3.5" />
              Nos valeurs
            </span>
            <h2 className="section-title mb-4">
              Les principes qui nous{' '}
              <span className="text-gradient">guident</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Nos valeurs ne sont pas des mots sur un mur — elles guident
              chaque décision, chaque ligne de code, chaque interaction avec
              nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = iconMap[value.icon.name] || value.icon;
              const colorClass = iconColors[value.icon.name] || 'from-primary-500 to-accent-500';
              return (
                <div
                  key={value.title}
                  className={`card card-hover p-7 text-center group ${visibleSection === 'values' ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative mx-auto w-16 h-16 mb-5">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center text-white shadow-lg shadow-primary-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className="w-8 h-8" strokeWidth={1.8} />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section id="leadership" data-animate className="py-24 lg:py-32 bg-neutral-50">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="badge bg-primary-100 text-primary-700 mb-4">
              <Award className="w-3.5 h-3.5" />
              Leadership
            </span>
            <h2 className="section-title mb-4">
              Notre <span className="text-gradient">fondateur</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Une vision portée par un leader passionné et engagé dans la
              transformation digitale du continent.
            </p>
          </div>

          {/* Leader card */}
          <div className="max-w-5xl mx-auto">
            <div className="card overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Photo / avatar */}
                <div className="md:col-span-2 relative bg-gradient-to-br from-primary-600 to-accent-600 p-8 flex flex-col items-center justify-center text-white min-h-[320px]">
                  <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-5xl font-display font-extrabold mb-4 border-4 border-white/30">
                    {leader.initials}
                  </div>
                  <h3 className="font-display text-2xl font-bold">{leader.name}</h3>
                  <p className="text-primary-100 text-sm mt-1">{leader.role}</p>
                  <div className="flex gap-2 mt-4">
                    {leader.certifications.map((cert) => (
                      <span key={cert} className="badge bg-white/15 text-white text-[10px]">
                        <GraduationCap className="w-3 h-3" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8 lg:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`badge ${leader.badgeColor}`}>
                      <Trophy className="w-3.5 h-3.5" />
                      {leader.badge}
                    </span>
                  </div>

                  <blockquote className="text-lg font-display font-semibold text-neutral-900 italic mb-5 leading-relaxed">
                    "{leader.quote}"
                  </blockquote>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {leader.philosophy}
                  </p>

                  {/* Achievements */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {leader.achievements.map((ach) => {
                      const Icon = ach.icon;
                      const colors: Record<string, string> = {
                        'text-primary-600': 'from-primary-500 to-accent-500',
                        'text-accent-600': 'from-purple-500 to-pink-500',
                        'text-warning-600': 'from-orange-500 to-red-500',
                      };
                      const gradientColor = colors[ach.color] || 'from-primary-500 to-accent-500';
                      return (
                        <div key={ach.label} className="text-center p-3 rounded-xl bg-neutral-50 border border-neutral-100 group hover:shadow-md transition-shadow">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradientColor} flex items-center justify-center mx-auto mb-1.5 transition-transform duration-300 group-hover:scale-110`}>
                            <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                          </div>
                          <div className="text-[11px] font-medium text-neutral-600">{ach.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Expertise */}
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((exp) => (
                      <span key={exp} className="px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-xs font-semibold">
                        {exp}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  {leader.social && (
                    <div className="flex gap-3 mt-6 pt-6 border-t border-neutral-100">
                      <a
                        href={leader.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-blue-50 hover:bg-blue-100 flex items-center justify-center transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-blue-600" strokeWidth={2} />
                      </a>
                      <a
                        href={leader.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-sky-50 hover:bg-sky-100 flex items-center justify-center transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5 text-sky-500" strokeWidth={2} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-10">
              <h4 className="font-display text-lg font-bold text-neutral-900 mb-6 text-center">
                Parcours & jalots clés
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {leader.timeline.map((item, i) => (
                  <div
                    key={item.year}
                    className={`card p-5 text-center ${visibleSection === 'leadership' ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="font-display text-2xl font-extrabold text-gradient mb-2">
                      {item.year}
                    </div>
                    <div className="text-xs text-neutral-500 font-medium leading-relaxed">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900 to-accent-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 container-page text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center shadow-lg shadow-accent-500/30">
              <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-6 max-w-2xl mx-auto">
            Rejoignez l'aventure TriTech
          </h2>
          <p className="text-lg text-primary-100 max-w-xl mx-auto mb-10">
            Découvrez comment nous pouvons transformer votre entreprise avec des
            solutions numériques sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-bold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Voir nos services
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-bold text-sm border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
