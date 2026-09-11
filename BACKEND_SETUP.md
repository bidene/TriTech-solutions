# Configuration du Backend - Formulaire de Contact

Ce document explique comment configurer le backend pour le formulaire de contact avec Supabase.

## 📋 Prérequis

- Un compte Supabase (gratuit sur https://supabase.com)
- Node.js et npm installés
- CLI Supabase (optionnel mais recommandé)

## 🚀 Étape 1: Créer un projet Supabase

1. Allez sur https://supabase.com
2. Cliquez sur "New Project"
3. Remplissez les informations :
   - **Name**: TriTech-Solution
   - **Database Password**: Choisissez un mot de passe fort
   - **Region**: Choisissez la région la plus proche (ex: West Africa)
4. Attendez que le projet soit créé (environ 2 minutes)

## 📊 Étape 2: Créer la table contacts

### Option A: Via l'interface Supabase

1. Allez dans votre projet Supabase
2. Cliquez sur "Table Editor" dans le menu gauche
3. Cliquez sur "New Table"
4. Remplissez les informations :
   - **Name**: contacts
   - **Columns**:
     - `id` (UUID, primary key, default: gen_random_uuid())
     - `name` (text, not null)
     - `email` (text, not null)
     - `company` (text, nullable)
     - `phone` (text, nullable)
     - `subject` (text, not null)
     - `message` (text, not null)
     - `status` (text, default: 'pending')
     - `created_at` (timestamp with time zone, default: NOW())
     - `updated_at` (timestamp with time zone, default: NOW())
     - `metadata` (jsonb, default: '{}')

### Option B: Via SQL

1. Allez dans "SQL Editor" dans Supabase
2. Cliquez sur "New Query"
3. Copiez et collez le contenu de `supabase/contacts_table.sql`
4. Cliquez sur "Run"

## 🔑 Étape 3: Obtenir les clés API

1. Allez dans "Settings" → "API"
2. Copiez :
   - **Project URL** (ex: https://xxx.supabase.co)
   - **anon public key** (ex: eyJhbGc...)

## ⚙️ Étape 4: Configurer les variables d'environnement

1. Créez un fichier `.env` à la racine du projet (copiez `.env.example`)
2. Remplissez les variables :

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_anon

# Optionnel: pour l'envoi d'emails
SENDGRID_API_KEY=votre_cle_sendgrid
SENDGRID_FROM_EMAIL=contact@tritech-solution.com
SENDGRID_FROM_NAME=TriTech-Solution
```

3. Redémarrez le serveur de développement :

```bash
npm run dev
```

## 🔧 Étape 5: Déployer l'Edge Function (Optionnel)

L'Edge Function permet la validation côté serveur et l'envoi d'emails.

### Installation de la CLI Supabase

```bash
npm install -g supabase
```

### Connexion à votre projet

```bash
supabase login
supabase link --project-ref votre_project_id
```

### Déploiement de la fonction

```bash
supabase functions deploy contact-api
```

### Définition des secrets

```bash
supabase secrets set SENDGRID_API_KEY=votre_cle_sendgrid
```

## 📧 Étape 6: Configuration de l'envoi d'emails (Optionnel)

### Option A: SendGrid

1. Créez un compte sur https://sendgrid.com
2. Obtenez une API Key
3. Ajoutez la clé dans vos variables d'environnement
4. Modifiez `supabase/functions/contact-api/index.ts` pour utiliser SendGrid

### Option B: Mailgun

1. Créez un compte sur https://mailgun.com
2. Obtenez une API Key
3. Configurez de manière similaire à SendGrid

### Option C: Supabase Email Hooks

Supabase propose des Email Hooks pour envoyer des emails automatiquement.

## 🧪 Étape 7: Tester le formulaire

1. Ouvrez http://localhost:5173/contact
2. Remplissez le formulaire de contact
3. Cliquez sur "Envoyer le message"
4. Vérifiez :
   - Le message de succès apparaît
   - Les données sont dans la table contacts (via Supabase Dashboard)
   - L'email de confirmation est reçu (si configuré)

## 🔍 Étape 8: Vérifier les données dans Supabase

1. Allez dans "Table Editor" → "contacts"
2. Vous devriez voir les contacts soumis
3. Vous pouvez modifier le statut :
   - `pending` : Nouveau contact
   - `processing` : En cours de traitement
   - `completed` : Traitement terminé
   - `failed` : Erreur

## 🛡️ Sécurité

### Row Level Security (RLS)

Pour sécuriser votre table, activez RLS dans Supabase :

```sql
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre l'insertion (public)
CREATE POLICY "Allow public insert" ON contacts
FOR INSERT
TO anon
WITH CHECK (true);

-- Politique pour permettre la lecture (auth only)
CREATE POLICY "Allow authenticated read" ON contacts
FOR SELECT
TO authenticated
USING (true);
```

## 📱 Mode Développement

Si Supabase n'est pas configuré, le formulaire utilise automatiquement un mode simulation locale :

- Les données sont enregistrées dans la console
- Le formulaire fonctionne normalement
- Idéal pour le développement et les tests

## 🚨 Dépannage

### Erreur "Supabase URL not found"

- Vérifiez que `.env` existe
- Vérifiez que `VITE_SUPABASE_URL` est défini
- Redémarrez le serveur

### Erreur 403 lors de l'envoi

- Vérifiez les RLS policies
- Vérifiez que la clé anon est correcte
- Vérifiez que l'Edge Function est déployée

### Emails non envoyés

- Vérifiez que l'API key SendGrid est correcte
- Vérifiez les logs de l'Edge Function
- Vérifiez que l'expéditeur est vérifié chez SendGrid

## 📚 Ressources

- [Documentation Supabase](https://supabase.com/docs)
- [Documentation Edge Functions](https://supabase.com/docs/guides/functions)
- [Documentation SendGrid](https://docs.sendgrid.com)
- [Guide RLS Supabase](https://supabase.com/docs/guides/auth/row-level-security)

## 🎯 Prochaines étapes

- Créer un tableau de bord admin pour gérer les contacts
- Ajouter des notifications pour les nouveaux contacts
- Intégrer avec Slack/Discord pour les alertes
- Ajouter des statistiques et des rapports