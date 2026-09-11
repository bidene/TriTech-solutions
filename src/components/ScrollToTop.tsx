import { useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop({ show }: { show: boolean }) {
  useEffect(() => {
    // no-op, visibility controlled by parent
  }, [show]);

  if (!show) return null;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Optional: navigate to current path to refresh if needed
    // navigate(window.location.pathname);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-600/30 flex items-center justify-center hover:bg-primary-700 hover:scale-110 transition-all duration-300 animate-scale-in"
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
