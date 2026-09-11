# TriTech-Solution

Site web professionnel pour une entreprise de services technologiques, développé avec React, TypeScript, Vite et Tailwind CSS.

## 🌟 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Navigation SPA avec React Router
- ✅ Pages principales : Accueil, À propos, Services, Contact
- ✅ Pages légales : Mentions légales, Politique de confidentialité, Conditions d'utilisation
- ✅ Page 404 personnalisée
- ✅ Formulaire de contact avec backend Supabase
- ✅ Icônes colorées et professionnelles
- ✅ Animations et transitions fluides
- ✅ Mode dark/light (préparé)
- ✅ Icônes de réseaux sociaux colorées

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur http://localhost:5173

## 📦 Scripts disponibles

```bash
npm run dev       # Serveur de développement
npm run build     # Build pour production
npm run preview   # Prévisualiser le build
npm run lint      # Linter le code
npm run typecheck # Vérifier les types TypeScript
```

## 🏗️ Structure du projet

```
TriTech-solution/
├── src/
│   ├── assets/          # Images et ressources statiques
│   ├── components/      # Composants réutilisables
│   │   ├── Footer.tsx
│   │   ├── Loading.tsx
│   │   ├── Navbar.tsx
│   │   └── ScrollToTop.tsx
│   ├── data/           # Données du site
│   │   └── site.ts
│   ├── pages/          # Pages de l'application
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Legal.tsx
│   │   ├── NotFound.tsx
│   │   ├── Privacy.tsx
│   │   ├── Services.tsx
│   │   └── Terms.tsx
│   ├── services/       # Services API
│   │   └── api.ts
│   ├── App.tsx         # Composant principal
│   ├── index.css       # Styles globaux
│   └── main.tsx        # Point d'entrée
├── supabase/           # Configuration Supabase
│   ├── functions/      # Edge Functions
│   └── contacts_table.sql
├── .env.example        # Exemple de variables d'environnement
├── BACKEND_SETUP.md    # Documentation backend
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_anon
```

Pour le formulaire de contact complet, voir [BACKEND_SETUP.md](./BACKEND_SETUP.md)

## 🎨 Technologies

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Icônes**: Lucide React
- **Routing**: React Router DOM
- **Backend**: Supabase (base de données et Edge Functions)
- **Email**: SendGrid (optionnel)

## 📄 Pages

### Pages principales
- `/` - Page d'accueil
- `/about` - À propos de l'entreprise
- `/services` - Services proposés
- `/contact` - Formulaire de contact

### Pages légales
- `/legal` - Mentions légales
- `/privacy` - Politique de confidentialité
- `/terms` - Conditions d'utilisation

### Autres
- `*` - Page 404 personnalisée

## 🌐 Déploiement

### Vercel (recommandé)

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

### Netlify

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Déployer
netlify deploy --prod
```

## 🔒 Sécurité

- Validation des formulaires côté client et serveur
- Row Level Security (RLS) Supabase
- Protection CORS
- Sanitization des entrées utilisateur

## 📱 Responsive Design

Le site est optimisé pour :
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎨 Personnalisation

### Modifier les couleurs

Modifiez `tailwind.config.js` pour personnaliser les couleurs du site.

### Modifier le contenu

Éditez `src/data/site.ts` pour modifier :
- Informations de l'entreprise
- Services proposés
- Témoignages
- Statistiques
- etc.

### Modifier les icônes

Les icônes sont utilisées depuis Lucide React. Consultez [lucide.dev](https://lucide.dev) pour la liste complète.

## 🐛 Dépannage

### Erreur de build

```bash
# Nettoyer le cache
rm -rf node_modules/.vite
npm run dev
```

### Problèmes de types

```bash
# Vérifier les types
npm run typecheck
```

### Erreurs de lint

```bash
# Corriger automatiquement
npm run lint -- --fix
```

## 📚 Documentation

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [React Router Documentation](https://reactrouter.com)

## 🤝 Contribution

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 👥 Équipe

- TriTech-Solution - Développement Web & Solutions Technologiques

## 📞 Contact

- Email: contact@tritech-solution.com
- Téléphone: +229 01 00 00 00 00
- Adresse: Cotonou, Bénin

---

Développé avec ❤️ par TriTech-Solution