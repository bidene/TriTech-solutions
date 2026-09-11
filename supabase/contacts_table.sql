-- Création de la table contacts
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(20),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Ajout des indexes pour optimiser les requêtes
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);

-- Ajout des commentaires pour documenter la table
COMMENT ON TABLE contacts IS 'Table pour stocker les demandes de contact du site web';
COMMENT ON COLUMN contacts.name IS 'Nom complet du contact';
COMMENT ON COLUMN contacts.email IS 'Adresse email du contact';
COMMENT ON COLUMN contacts.company IS 'Nom de l entreprise (optionnel)';
COMMENT ON COLUMN contacts.phone IS 'Numéro de téléphone (optionnel)';
COMMENT ON COLUMN contacts.subject IS 'Sujet de la demande';
COMMENT ON COLUMN contacts.message IS 'Message du contact';
COMMENT ON COLUMN contacts.status IS 'Statut de la demande (pending, processing, completed, failed)';
COMMENT ON COLUMN contacts.metadata IS 'Données supplémentaires en format JSON';