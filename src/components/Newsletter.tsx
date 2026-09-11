import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulation d'inscription newsletter
    setTimeout(() => {
      if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setStatus('success');
        setMessage('Vous êtes maintenant inscrit à notre newsletter !');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Veuillez entrer une adresse email valide');
      }
    }, 1000);
  };

  return (
    <div className="bg-primary-600 py-16">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-4 text-white" />
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Restez informé
          </h2>
          <p className="text-primary-100 mb-8">
            Recevez nos derniers articles, conseils et actualités technologiques directement dans votre boîte mail.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-primary-300"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 rounded-xl bg-white text-primary-600 font-semibold hover:bg-primary-50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Inscription...' : 'S\'inscrire'}
            </button>
          </form>

          {status === 'success' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-white">
              <CheckCircle className="w-5 h-5" />
              <span>{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 flex items-center justify-center gap-2 text-red-200">
              <AlertCircle className="w-5 h-5" />
              <span>{message}</span>
            </div>
          )}

          <p className="text-xs text-primary-200 mt-4">
            En vous inscrivant, vous acceptez notre politique de confidentialité.
          </p>
        </div>
      </div>
    </div>
  );
}