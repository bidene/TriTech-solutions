import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
  year: string;
  client?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce complète avec gestion des stocks et paiements.',
    longDescription: 'Une plateforme e-commerce moderne développée avec React et Node.js. Le système inclut la gestion des stocks en temps réel, intégration avec Stripe pour les paiements, et un panneau d\'administration complet pour la gestion des commandes et des clients.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    link: 'https://example.com',
    github: 'https://github.com/example',
    featured: true,
    year: '2024',
    client: 'TechRetail',
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'Application mobile bancaire sécurisée pour transactions en ligne.',
    longDescription: 'Application mobile développée avec React Native permettant aux utilisateurs de gérer leurs comptes bancaires, effectuer des transferts, payer des factures et consulter leur historique de transactions. L\'application inclut l\'authentification biométrique et la sécurisation des données.',
    image: 'https://images.pexels.com/photos/5700161/pexels-photo-5700161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Mobile',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Express'],
    link: 'https://apps.apple.com',
    featured: true,
    year: '2024',
    client: 'SecureBank',
  },
  {
    id: '3',
    title: 'Cloud Infrastructure Dashboard',
    description: 'Dashboard de monitoring pour infrastructure cloud.',
    longDescription: 'Dashboard interactif pour surveiller et gérer l\'infrastructure cloud AWS. Visualisation en temps réel des métriques, alertes automatiques, et gestion des ressources cloud via une interface intuitive.',
    image: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Cloud',
    technologies: ['React', 'TypeScript', 'AWS SDK', 'GraphQL', 'D3.js'],
    github: 'https://github.com/example',
    featured: true,
    year: '2023',
    client: 'CloudCorp',
  },
  {
    id: '4',
    title: 'SaaS Analytics Platform',
    description: 'Plateforme d\'analytics pour entreprises SaaS.',
    longDescription: 'Plateforme d\'analytics complète pour les entreprises SaaS, offrant des tableaux de bord interactifs, des rapports personnalisés, et des insights basés sur l\'IA pour optimiser les performances.',
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Web',
    technologies: ['Next.js', 'Python', 'PostgreSQL', 'Redis', 'Plotly'],
    link: 'https://example.com',
    featured: false,
    year: '2023',
    client: 'DataInsights',
  },
  {
    id: '5',
    title: 'Healthcare Management System',
    description: 'Système de gestion pour cliniques et hôpitaux.',
    longDescription: 'Système complet de gestion pour les établissements de santé, incluant la gestion des patients, des rendez-vous, des dossiers médicaux, et de la facturation. Conforme aux normes de sécurité des données de santé.',
    image: 'https://images.pexels.com/photos/5320028/pexels-photo-5320028.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Web',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
    featured: false,
    year: '2023',
    client: 'MediCare',
  },
  {
    id: '6',
    title: 'Food Delivery App',
    description: 'Application de livraison de repas multi-restaurants.',
    longDescription: 'Application de livraison de repas avec interface pour les clients, les restaurants et les livreurs. Système de géolocalisation en temps réel, suivi des commandes, et système de paiement intégré.',
    image: 'https://images.pexels.com/photos/9583847/pexels-photo-9583847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Mobile',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js'],
    link: 'https://play.google.com',
    featured: false,
    year: '2023',
    client: 'QuickEats',
  },
  {
    id: '7',
    title: 'Social Media Dashboard',
    description: 'Dashboard pour gestion des réseaux sociaux.',
    longDescription: 'Plateforme de gestion des réseaux sociaux permettant de planifier et publier du contenu sur plusieurs plateformes, analyser les performances, et gérer les interactions avec les abonnés.',
    image: 'https://images.pexels.com/photos/3252291/pexels-photo-3252291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Web',
    technologies: ['React', 'TypeScript', 'Social Media APIs', 'PostgreSQL'],
    link: 'https://example.com',
    featured: false,
    year: '2022',
    client: 'SocialConnect',
  },
  {
    id: '8',
    title: 'IoT Monitoring System',
    description: 'Système de monitoring pour appareils IoT.',
    longDescription: 'Système de monitoring en temps réel pour appareils IoT avec alertes personnalisables, historique des données, et tableau de bord de visualisation des capteurs et actionneurs.',
    image: 'https://images.pexels.com/photos/1550340/pexels-photo-1550340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'IoT',
    technologies: ['React', 'MQTT', 'InfluxDB', 'Grafana', 'Node.js'],
    github: 'https://github.com/example',
    featured: false,
    year: '2022',
    client: 'SmartHome Tech',
  },
];

export const portfolioCategories = ['Tous', 'Web', 'Mobile', 'Cloud', 'IoT'];