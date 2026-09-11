import { useState, useEffect } from 'react';
import { Search as SearchIcon, X, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { services, navLinks } from '@/data/site';

interface SearchResult {
  type: 'page' | 'service';
  title: string;
  description: string;
  path: string;
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filteredResults: SearchResult[] = [];

    // Recherche dans les pages
    navLinks.forEach(link => {
      if (link.label.toLowerCase().includes(searchQuery)) {
        filteredResults.push({
          type: 'page',
          title: link.label,
          description: `Page ${link.label}`,
          path: link.path,
        });
      }
    });

    // Recherche dans les services
    services.forEach(service => {
      if (
        service.title.toLowerCase().includes(searchQuery) ||
        service.short.toLowerCase().includes(searchQuery) ||
        service.description.toLowerCase().includes(searchQuery)
      ) {
        filteredResults.push({
          type: 'service',
          title: service.title,
          description: service.short,
          path: '/services',
        });
      }
    });

    setResults(filteredResults.slice(0, 8));
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    setIsOpen(false);
    setQuery('');
    navigate(result.path);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
        aria-label="Rechercher"
      >
        <SearchIcon className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Search Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-down">
        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-neutral-200">
          <SearchIcon className="w-5 h-5 text-neutral-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher... (Ctrl+K)"
            className="flex-1 bg-transparent text-neutral-900 placeholder:text-neutral-400 outline-none text-lg"
            autoFocus
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5 text-neutral-400" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-neutral-500">
              <SearchIcon className="w-12 h-12 mx-auto mb-4 text-neutral-300" />
              <p className="text-lg font-medium">Commencez à taper pour rechercher</p>
              <p className="text-sm mt-2">Appuyez sur Ctrl+K pour ouvrir</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-neutral-500">
              <p className="text-lg font-medium">Aucun résultat trouvé</p>
              <p className="text-sm mt-2">Essayez avec d'autres termes</p>
            </div>
          ) : (
            <div className="p-2">
              {results.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleResultClick(result)}
                  className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors text-left"
                >
                  <div className={`p-2 rounded-lg ${
                    result.type === 'page' 
                      ? 'bg-primary-100 text-primary-600' 
                      : 'bg-accent-100 text-accent-600'
                  }`}>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-neutral-900">
                      {result.title}
                    </p>
                    <p className="text-sm text-neutral-500 truncate">
                      {result.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-neutral-200 bg-neutral-50">
          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>
              {results.length} résultat{results.length !== 1 ? 's' : ''} trouvé{results.length !== 1 ? 's' : ''}
            </span>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-white border border-neutral-200 font-mono">
                ↑↓
              </kbd>
              <span>pour naviguer</span>
              <kbd className="px-2 py-1 rounded bg-white border border-neutral-200 font-mono">
                Enter
              </kbd>
              <span>pour sélectionner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}