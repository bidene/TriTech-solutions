import { Calendar, Clock, User } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Les tendances du développement web en 2024',
    excerpt: 'Découvrez les dernières technologies et pratiques qui révolutionnent le développement web cette année.',
    content: `
      <p>Le développement web évolue rapidement, et 2024 ne fait pas exception. Voici les tendances qui marquent cette année :</p>
      
      <h3>1. Intelligence Artificielle</h3>
      <p>L'IA transforme la façon dont nous développons des applications. Des assistants de code à la génération automatique de contenu, les possibilités sont immenses.</p>
      
      <h3>2. Edge Computing</h3>
      <p>Le traitement des données au bord du réseau permet des applications plus rapides et réactives. Vercel, Cloudflare et autres plateformes poussent cette technologie.</p>
      
      <h3>3. Micro-frontends</h3>
      <p>Les micro-frontends permettent de diviser les applications frontales en plus petits morceaux gérables par différentes équipes.</p>
      
      <h3>4. WebAssembly</h3>
      <p>WebAssembly permet d'exécuter du code compilé dans le navigateur, ouvrant la porte à des applications web ultra-performantes.</p>
      
      <h3>5. Server Components</h3>
      <p>Les composants serveur de React et Next.js réduisent la charge client et améliorent les performances.</p>
    `,
    author: 'Jean K. Doe',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Développement',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Web', 'React', 'Tendances'],
  },
  {
    id: '2',
    title: 'Pourquoi choisir React pour votre prochain projet ?',
    excerpt: 'React reste le framework le plus populaire pour le développement frontend. Voici pourquoi.',
    content: `
      <p>React domine le marché du développement frontend depuis des années, et ce n'est pas un hasard.</p>
      
      <h3>Écosystème riche</h3>
      <p>Une bibliothèque de composants, d'outils et de ressources incroyablement vaste qui accélère le développement.</p>
      
      <h3>Performance</h3>
      <p>Le Virtual DOM et les optimisations de React garantissent des applications rapides et fluides.</p>
      
      <h3>Flexibilité</h3>
      <p>React peut être utilisé pour des sites web, des applications mobiles (React Native), et même du desktop (Electron).</p>
      
      <h3>Communauté active</h3>
      <p>Une communauté massive qui contribue constamment à l'amélioration du framework.</p>
    `,
    author: 'Marie A. Smith',
    date: '2024-01-10',
    readTime: '4 min',
    category: 'Développement',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React', 'Frontend', 'JavaScript'],
  },
  {
    id: '3',
    title: 'Guide complet du DevOps pour les débutants',
    excerpt: 'Tout ce que vous devez savoir sur DevOps pour améliorer votre workflow de développement.',
    content: `
      <p>Le DevOps révolutionne la façon dont les équipes développent et déploient des logiciels.</p>
      
      <h3>Qu\'est-ce que DevOps ?</h3>
      <p>DevOps est une culture qui combine le développement (Dev) et les opérations (Ops) pour améliorer la collaboration et l'efficacité.</p>
      
      <h3>Principaux outils</h3>
      <ul>
        <li>Docker - Conteneurisation</li>
        <li>Kubernetes - Orchestration</li>
        <li>Jenkins - CI/CD</li>
        <li>Terraform - Infrastructure as Code</li>
      </ul>
      
      <h3>Avantages</h3>
      <p>Déploiements plus rapides, moins d'erreurs, meilleure qualité du code et satisfaction client accrue.</p>
    `,
    author: 'Pierre L. Martin',
    date: '2024-01-05',
    readTime: '6 min',
    category: 'DevOps',
    image: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['DevOps', 'CI/CD', 'Cloud'],
  },
  {
    id: '4',
    title: 'Cybersécurité : Les bonnes pratiques à adopter',
    excerpt: 'Protégez vos applications et données avec ces conseils essentiels en cybersécurité.',
    content: `
      <p>La cybersécurité est plus importante que jamais. Voici les bonnes pratiques à suivre.</p>
      
      <h3>1. Authentification forte</h3>
      <p>Utilisez MFA, OAuth2, et des mots de passe robustes pour protéger les comptes utilisateurs.</p>
      
      <h3>2. Validation des entrées</h3>
      <p>Validez et nettoyez toutes les données entrantes pour prévenir les injections SQL et XSS.</p>
      
      <h3>3. HTTPS obligatoire</h3>
      <p>Utilisez toujours HTTPS pour chiffrer les communications entre client et serveur.</p>
      
      <h3>4. Mises à jour régulières</h3>
      <p>Gardez vos dépendances et systèmes à jour pour corriger les vulnérabilités connues.</p>
    `,
    author: 'Sophie R. Dubois',
    date: '2024-01-01',
    readTime: '5 min',
    category: 'Sécurité',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Sécurité', 'Best Practices', 'Web'],
  },
  {
    id: '5',
    title: 'UI/UX : Créer des expériences utilisateur mémorables',
    excerpt: 'Les principes fondamentaux du design UI/UX pour des applications qui captivent vos utilisateurs.',
    content: `
      <p>Un bon design UI/UX peut faire la différence entre le succès et l'échec d'une application.</p>
      
      <h3>1. Simplicité</h3>
      <p>Moins c'est plus. Un design épuré facilite la navigation et la compréhension.</p>
      
      <h3>2. Consistance</h3>
      <p>Utilisez des couleurs, polices et composants cohérents dans toute l'application.</p>
      
      <h3>3. Accessibilité</h3>
      <p>Assurez-vous que votre application est utilisable par tous, y compris les personnes handicapées.</p>
      
      <h3>4. Feedback visuel</h3>
      <p>Fournissez un retour visuel pour chaque action pour informer l'utilisateur de ce qui se passe.</p>
    `,
    author: 'Claire M. Bernard',
    date: '2023-12-28',
    readTime: '4 min',
    category: 'Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['UI/UX', 'Design', 'User Experience'],
  },
  {
    id: '6',
    title: 'Cloud Computing : Choisissez la bonne solution',
    excerpt: 'AWS, Azure, Google Cloud : comparatif des principaux fournisseurs de cloud.',
    content: `
      <p>Le choix d'un fournisseur de cloud est crucial pour votre infrastructure.</p>
      
      <h3>AWS</h3>
      <p>Le leader du marché avec la plus grande offre de services. Idéal pour les entreprises matures.</p>
      
      <h3>Azure</h3>
      <p>Excellent pour les entreprises utilisant déjà l'écosystème Microsoft.</p>
      
      <h3>Google Cloud</h3>
      <p>Performant pour l'IA/ML et le Big Data. Intégration native avec les services Google.</p>
      
      <h3>Facteurs de décision</h3>
      <p>Coût, services disponibles, support, et écosystème existant sont les critères clés.</p>
    `,
    author: 'Marc T. Dupont',
    date: '2023-12-20',
    readTime: '5 min',
    category: 'Cloud',
    image: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Cloud', 'AWS', 'Azure', 'GCP'],
  },
];

export const blogCategories = ['Tous', 'Développement', 'DevOps', 'Sécurité', 'Design', 'Cloud'];