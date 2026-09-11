import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, companyInfo } from '@/data/site';
import logo from '@/assets/logo.jpeg';
import Search from '@/components/Search';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-sm shadow-neutral-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <button
          onClick={() => handleNav('/')}
          className="flex items-center gap-2.5 group"
        >
          <img 
            src={logo} 
            alt="TriTech Solution Logo" 
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col leading-none">
            <span className={`font-display font-extrabold text-lg tracking-tight transition-colors ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
              TriTech
            </span>
            <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${scrolled ? 'text-primary-600' : 'text-white'}`}>
              Solution
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-primary-700 bg-primary-50'
                    : `${scrolled ? 'text-neutral-600 hover:text-primary-700 hover:bg-neutral-50' : 'text-white hover:text-white hover:bg-white/10'}`
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${scrolled ? 'text-neutral-700 hover:text-primary-700' : 'text-white hover:text-white'}`}
          >
            <Phone className="w-4 h-4" />
            {companyInfo.phone}
          </a>
          <button onClick={() => handleNav('/contact')} className="btn-primary">
            Demander un devis
          </button>
          <Search />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-navigation" className="lg:hidden glass border-t border-neutral-200/50 animate-fade-in-down">
          <div className="container-page py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  location.pathname === link.path
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-neutral-700"
            >
              <Phone className="w-4 h-4" />
              {companyInfo.phone}
            </a>
            <button
              onClick={() => handleNav('/contact')}
              className="btn-primary mt-2"
            >
              Demander un devis
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
