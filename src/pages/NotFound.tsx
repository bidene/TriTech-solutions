import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, FileQuestion } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="container-page text-center">
        {/* Icon */}
        <div className="relative mx-auto w-32 h-32 mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 animate-pulse" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-200 to-accent-200" />
          <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center shadow-lg">
            <FileQuestion className="w-12 h-12 text-primary-600" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-8xl font-extrabold text-gradient mb-4">
          404
        </h1>
        
        <h2 className="font-display text-2xl font-bold text-neutral-900 mb-4">
          Page non trouvée
        </h2>
        
        <p className="text-neutral-600 max-w-md mx-auto mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-600 text-white font-bold text-sm shadow-xl hover:bg-primary-700 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </button>
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-bold text-sm border border-primary-200 hover:bg-primary-50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Search className="w-4 h-4" />
            Nos services
          </button>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-neutral-100">
          <p className="text-sm text-neutral-500 mb-4">Vous cherchiez peut-être :</p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => navigate('/about')}
              className="px-4 py-2 rounded-lg bg-neutral-50 text-neutral-700 text-sm font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => navigate('/services')}
              className="px-4 py-2 rounded-lg bg-neutral-50 text-neutral-700 text-sm font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-4 py-2 rounded-lg bg-neutral-50 text-neutral-700 text-sm font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => navigate('/legal')}
              className="px-4 py-2 rounded-lg bg-neutral-50 text-neutral-700 text-sm font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors"
            >
              Mentions légales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}