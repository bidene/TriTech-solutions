import {
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Palette,
  BarChart3,
  Brain,
  Headphones,
  Rocket,
  Users,
  Target,
  Award,
  Heart,
  Zap,
  Globe,
  CheckCircle2,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Network,
  Search,
  Beaker,
  Pencil,
} from 'lucide-react';

export const companyInfo = {
  name: 'TriTech-Solution',
  tagline: 'Solutions technologiques de nouvelle génération',
  phone: '+229 01 00 00 00 00',
  whatsapp: '+229 01 00 00 00 00',
  email: 'contact@tritech-solution.com',
  address: 'Cotonou, Bénin',
  fullAddress: 'Avenue Jean-Paul II, Cotonou, République du Bénin',
  hours: 'Lun – Ven : 8h00 – 18h00',
  foundedYear: 2018,
};

export const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const services = [
  {
    icon: Code2,
    title: 'Développement Web',
    short: 'Sites web et applications sur mesure, rapides et évolutifs.',
    description:
      'Nous concevons et développons des sites web modernes, des plateformes e-commerce et des applications métier performantes. Du frontend au backend, nous livrons des produits numériques robustes qui font grandir votre activité.',
    features: [
      'Sites vitrines & e-commerce',
      'Applications web SPA / PWA',
      'APIs REST & GraphQL',
      'Architecture microservices',
    ],
    image: 'https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'web',
  },
  {
    icon: Smartphone,
    title: 'Développement Mobile',
    short: 'Applications iOS et Android natives et cross-platform.',
    description:
      'Nous créons des applications mobiles intuitives et performantes pour iOS et Android. Avec React Native et Flutter, nous offrons une expérience utilisateur fluide sur tous les appareils.',
    features: [
      'Applications iOS & Android',
      'Cross-platform React Native / Flutter',
      'Intégration de paiement mobile',
      'Publication sur stores',
    ],
    image: 'https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'mobile',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    short: 'Infrastructure cloud scalable, CI/CD et automatisation.',
    description:
      'Nous accompagnons votre migration vers le cloud et mettons en place des pipelines CI/CD robustes. Nos experts DevOps assurent des déploiements continus, sécurisés et sans interruption.',
    features: [
      'Migration & hébergement cloud',
      'Pipelines CI/CD automatisés',
      'Conteneurisation Docker / Kubernetes',
      'Monitoring & observabilité',
    ],
    image: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'cloud',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersécurité',
    short: 'Audit, protection et conformité de vos systèmes.',
    description:
      "Nous sécurisons vos systèmes et vos données contre les menaces. De l'audit de vulnérabilités à la mise en place de politiques de sécurité, nous protégeons ce qui compte le plus pour vous.",
    features: [
      'Audit & tests de pénétration',
      'Sécurisation des données',
      'Conformité RGPD',
      'Formation & sensibilisation',
    ],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'security',
  },
  {
    icon: Palette,
    title: 'UI / UX Design',
    short: "Design d'interface intuitif et expériences mémorables.",
    description:
      "Nous donnons vie à vos idées avec des designs élégants et centrés sur l'utilisateur. De le wireframe au prototype interactif, nous créons des expériences qui captivent et convertissent.",
    features: [
      'Recherche utilisateur & personas',
      'Wireframes & prototypes Figma',
      'Design system & charte graphique',
      "Tests d'utilisabilité",
    ],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'design',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    short: 'Tableaux de bord, BI et intelligence des données.',
    description:
      "Nous transformons vos données en décisions stratégiques. Tableaux de bord interactifs, business intelligence et modèles prédictifs pour piloter votre activité avec précision.",
    features: [
      'Tableaux de bord interactifs',
      'Business Intelligence (BI)',
      'Modèles prédictifs & Machine Learning',
      'Reporting automatisé',
    ],
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'data',
  },
  {
    icon: Network,
    title: 'Administrateur Réseau',
    short: 'Gestion, maintenance et sécurisation de votre infrastructure réseau.',
    description:
      "Nous assurons la gestion complète de votre infrastructure réseau : installation, configuration, maintenance et sécurisation. Nos experts réseau garantissent une connectivité fiable et optimale pour votre entreprise.",
    features: [
      'Configuration & maintenance réseau',
      'Sécurité & pare-feu',
      'Gestion des utilisateurs & accès',
      'Support technique & dépannage',
    ],
    image: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'network',
  },
];

export const stats = [
  { value: '150+', label: 'Projets livrés' },
  { value: '80+', label: 'Clients satisfaits' },
  { value: '7+', label: "Années d'expérience" },
  { value: '25+', label: 'Experts passionnés' },
];

export const values = [
  {
    icon: Target,
    title: 'Excellence technique',
    description:
      "Nous visons l'excellence dans chaque ligne de code. Nos standards de qualité garantissent des produits fiables et durables.",
  },
  {
    icon: Heart,
    title: 'Satisfaction client',
    description:
      "Vos objectifs sont les nôtres. Nous collaborons étroitement pour livrer des solutions qui dépassent vos attentes.",
  },
  {
    icon: Zap,
    title: 'Innovation continue',
    description:
      "Nous restons à la pointe des technologies émergentes pour vous offrir des solutions toujours plus innovantes.",
  },
  {
    icon: Globe,
    title: 'Impact local, vision globale',
    description:
      "Basés au Bénin, nous servons des clients en Afrique et au-delà, avec une vision internationale de la technologie.",
  },
];

export const team = [
  {
    name: 'Koffi Adjagba',
    role: 'CEO & Fondateur',
    bio: "Entrepreneur passionné par la transformation digitale en Afrique. 15 ans d'expérience en gestion de projets technologiques.",
    image: 'https://images.pexels.com/photos/1181745/pexels-photo-1181745.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  initials: 'KA',
  color: 'from-primary-500 to-primary-700',
  icon: Award,
  badge: 'Leadership',
  badgeColor: 'bg-primary-100 text-primary-700',
  expertise: ['Stratégie', 'Management', 'Transformation digitale'],
  social: { linkedin: '#', twitter: '#' },
  achievements: [
    { icon: Award, label: "15 ans d'expérience", color: 'text-primary-600' },
    { icon: Globe, label: 'Speaker international', color: 'text-accent-600' },
    { icon: Users, label: '50+ projets dirigés', color: 'text-warning-600' },
  ],
  quote: "La technologie est un levier puissant pour le développement de l'Afrique.",
  philosophy:
    "Je crois fermement que chaque entreprise, quelle que soit sa taille, mérite d'accéder à des solutions technologiques de classe mondiale. Notre mission chez TriTech-Solution est de démocratiser l'accès à l'innovation numérique sur tout le continent africain.",
  certifications: ['PMP Certified', 'Scrum Master', 'AWS Cloud Practitioner'],
  timeline: [
    { year: '2018', event: 'Fondation de TriTech-Solution' },
    { year: '2020', event: 'Ouverture du bureau de Cotonou' },
    { year: '2022', event: 'Expansion sous-régionale' },
    { year: '2024', event: "Prix de l'innovation digitale" },
    ],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Découverte & Analyse',
    description:
      "Nous étudions vos besoins, vos objectifs et votre marché pour définir une stratégie sur mesure.",
    icon: Search,
  },
  {
    number: '02',
    title: 'Design & Prototypage',
    description:
      "Nous concevons des maquettes interactives et validons l'expérience utilisateur avant le développement.",
    icon: Pencil,
  },
  {
    number: '03',
    title: 'Développement & Tests',
    description:
      "Nos ingénieurs développent votre solution avec des tests continus pour garantir la qualité.",
    icon: Beaker,
  },
  {
    number: '04',
    title: 'Déploiement & Support',
    description:
      "Nous déployons votre solution et assurons un support continu pour sa pérennité.",
    icon: Rocket,
  },
];

export const testimonials = [
  {
    name: 'Awa Diallo',
    role: 'Directrice, FinTech Bénin',
    content:
      "TriTech-Solution a transformé notre vision en une plateforme financière robuste. Leur professionnalisme et leur expertise technique sont remarquables.",
    rating: 5,
    avatar: 'AD',
    color: 'from-primary-500 to-primary-700',
  },
  {
    name: 'Marc Houngbédji',
    role: 'CEO, E-commerce Cotonou',
    content:
      "Grâce à TriTech, notre boutique en ligne a triplé ses ventes en 6 mois. Une équipe à l'écoute et ultra-compétente.",
    rating: 5,
    avatar: 'MH',
    color: 'from-accent-500 to-accent-700',
  },
  {
    name: 'Fatima Karim',
    role: 'Responsable IT, ONG Santé',
    content:
      "L'application mobile développée par TriTech-Solution a révolutionné notre suivi des patients sur le terrain. Un travail impeccable.",
    rating: 5,
    avatar: 'FK',
    color: 'from-warning-500 to-warning-700',
  },
];

export const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'React Native',
  'Flutter', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS',
  'Figma', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Supabase',
];

export const faqs = [
  {
    question: "Quels types de projets acceptez-vous ?",
    answer:
      "Nous travaillons sur tous types de projets numériques : sites web, applications mobiles, plateformes cloud, solutions de cybersécurité, design d'interface et analyse de données. De la startup à la grande entreprise, nous nous adaptons à vos besoins.",
  },
  {
    question: "Combien de temps prend un projet en moyenne ?",
    answer:
      "La durée dépend de la complexité du projet. Un site vitrine prend 2 à 4 semaines, une application mobile 2 à 4 mois, et un projet cloud complet 3 à 6 mois. Nous établissons un planning précis dès le départ.",
  },
  {
    question: "Proposez-vous de la maintenance après livraison ?",
    answer:
      "Oui, nous proposons des contrats de maintenance et de support technique. Nous assurons les mises à jour, la sécurité et l'évolution de votre solution dans la durée.",
  },
  {
    question: "Travaillez-vous avec des clients hors du Bénin ?",
    answer:
      "Absolument. Bien que basés à Cotonou, nous collaborons avec des clients dans toute l'Afrique de l'Ouest et au-delà, en présentiel et à distance.",
  },
  {
    question: "Comment se déroule la collaboration ?",
    answer:
      "Nous suivons un processus en 4 étapes : découverte, design, développement et déploiement. Vous êtes impliqué à chaque phase avec des points réguliers et une transparence totale.",
  },
];

export const contactIcons = {
  mail: Mail,
  phone: Phone,
  whatsapp: MessageCircle,
  map: MapPin,
  clock: Clock,
};

export const heroImage =
  'https://images.pexels.com/photos/1181745/pexels-photo-1181745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const aboutHeroImage =
  'https://images.pexels.com/photos/8636587/pexels-photo-8636587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const aboutImage2 =
  'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const ctaImage =
  'https://images.pexels.com/photos/7495656/pexels-photo-7495656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
