import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Loading from '@/components/Loading';
import SEO from '@/components/SEO';
import Analytics from '@/components/Analytics';
import { companyInfo } from '@/data/site';

// Lazy loading des pages pour le code splitting
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Contact = lazy(() => import('@/pages/Contact'));
const Legal = lazy(() => import('@/pages/Legal'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));
const NotFound = lazy(() => import('@/pages/NotFound'));

interface PageSeo {
  title: string;
  description: string;
}

function getPageSeo(path: string): PageSeo {
  switch (path) {
    case '/':
      return {
        title: 'Solutions technologiques de nouvelle génération',
        description: 'TriTech-Solution conçoit des applications web, mobiles et cloud sur mesure pour les entreprises ambitieuses au Bénin et en Afrique.',
      };
    case '/about':
      return { title: 'À propos de TriTech-Solution', description: 'Découvrez TriTech-Solution, son équipe, ses valeurs et sa mission de transformation digitale au Bénin.' };
    case '/services':
      return { title: 'Services numériques sur mesure', description: 'Développement web et mobile, cloud, cybersécurité, design UI/UX, data et administration réseau.' };
    case '/contact':
      return { title: 'Contactez TriTech-Solution', description: 'Parlez-nous de votre projet numérique et recevez un devis gratuit et personnalisé sous 24 heures.' };
    case '/legal':
      return { title: 'Mentions légales', description: 'Informations légales et éditeur du site TriTech-Solution.' };
    case '/privacy':
      return { title: 'Politique de confidentialité', description: 'Découvrez comment TriTech-Solution collecte, utilise et protège vos données personnelles.' };
    case '/terms':
      return { title: 'Conditions d\'utilisation', description: 'Conditions applicables à l’utilisation du site et des services de TriTech-Solution.' };
    case '/blog':
      return { title: 'Blog technologique', description: 'Conseils, tendances et bonnes pratiques en développement web, cloud, DevOps et cybersécurité.' };
    case '/portfolio':
      return { title: 'Portfolio de projets numériques', description: 'Découvrez une sélection de projets web, mobiles et logiciels réalisés par TriTech-Solution.' };
    default:
      if (path.startsWith('/blog/')) {
        return { title: 'Article technologique', description: 'Retrouvez les analyses et conseils de TriTech-Solution sur les technologies numériques.' };
      }
      return { title: 'Page introuvable', description: 'La page demandée est introuvable. Retournez à l’accueil de TriTech-Solution.' };
  }
}

function AppContent() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pageSeo = getPageSeo(location.pathname);

  useEffect(() => {
    document.title = `${pageSeo.title} | ${companyInfo.name}`;
  }, [pageSeo.title]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-700 focus:shadow-lg"
      >
        Aller au contenu principal
      </a>
      <SEO
        title={pageSeo.title}
        description={pageSeo.description}
        noindex={location.pathname === '/404'}
      />
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop show={showScrollTop} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
