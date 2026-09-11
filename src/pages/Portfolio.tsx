import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Layers, ArrowRight, Filter, X } from 'lucide-react';
import { projects, portfolioCategories, Project } from '@/data/portfolio';
import OptimizedImage from '@/components/OptimizedImage';

export default function Portfolio() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-page">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Layers className="w-4 h-4 text-accent-300" />
              <span className="text-sm font-semibold text-white">Portfolio</span>
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4">
              Nos projets
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Découvrez les projets que nous avons réalisés pour nos clients. Chaque projet témoigne de notre expertise et de notre engagement.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && selectedCategory === 'Tous' && (
        <section className="py-16 bg-white">
          <div className="container-page">
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">
                Projets en vedette
              </h2>
              <p className="text-neutral-600">
                Nos réalisations les plus remarquables
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <article
                  key={project.id}
                  className="card card-hover overflow-hidden"
                >
                  <div className="relative h-64">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      width={940}
                      height={650}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
                        En vedette
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                      {project.client && (
                        <span>• {project.client}</span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded-md bg-neutral-100 text-neutral-600 text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Voir le projet
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 text-neutral-700 text-sm font-semibold hover:bg-neutral-200 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container-page">
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">
              {selectedCategory === 'Tous' ? 'Tous les projets' : `Projets ${selectedCategory}`}
            </h2>
            <p className="text-neutral-600">
              {filteredProjects.length} projet{filteredProjects.length !== 1 ? 's' : ''} trouvé{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 mx-auto mb-4 text-neutral-300" />
              <p className="text-lg text-neutral-600">Aucun projet trouvé</p>
              <p className="text-sm text-neutral-500 mt-2">Essayez avec une autre catégorie</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <article
                  key={project.id}
                  className="card card-hover overflow-hidden"
                >
                  <div className="relative h-48">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      width={940}
                      height={650}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </div>
                      {project.client && (
                        <span>• {project.client}</span>
                      )}
                    </div>
                    <h3 className="font-display text-lg font-bold text-neutral-900 mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded-md bg-neutral-100 text-neutral-600 text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 rounded-md bg-neutral-100 text-neutral-600 text-xs">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1 text-sm text-primary-600 font-semibold hover:text-primary-700"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Voir
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-neutral-600 font-semibold hover:text-neutral-700"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-neutral-950/70 p-4"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Fermer les détails du projet"
              className="absolute right-4 top-4 rounded-lg p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600">
              {selectedProject.category}
            </p>
            <h2 id="project-dialog-title" className="mb-4 pr-10 font-display text-2xl font-bold text-neutral-900">
              {selectedProject.title}
            </h2>
            <p className="mb-6 leading-relaxed text-neutral-600">
              {selectedProject.longDescription}
            </p>

            <div className="mb-6 flex flex-wrap gap-4 text-sm text-neutral-500">
              <span>{selectedProject.year}</span>
              {selectedProject.client && <span>Client : {selectedProject.client}</span>}
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((technology) => (
                <span key={technology} className="rounded-md bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Vous avez un projet en tête ?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Transformons vos idées en réalité. Notre équipe est prête à relever vos défis technologiques.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-600 font-bold hover:bg-primary-50 transition-colors"
          >
            Discutons de votre projet
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}