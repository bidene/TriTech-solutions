import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';
import { companyInfo } from '@/data/site';

export default function Privacy() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <h1 className="font-display text-3xl font-bold text-neutral-900">
              Politique de confidentialité
            </h1>
          </div>
          <p className="text-neutral-600 max-w-2xl">
            Comment {companyInfo.name} protège vos données personnelles conformément au RGPD et à la législation béninoise.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-page max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Introduction
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Chez {companyInfo.name}, nous prenons la protection de vos données personnelles très au sérieux. 
                    Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons 
                    vos informations lorsque vous utilisez notre site web.
                  </p>
                  <p>
                    Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) et à la 
                    loi n°2019-031 du 17 octobre 2019 relative à la protection des données personnelles au Bénin.
                  </p>
                  <p>
                    En utilisant notre site, vous acceptez les pratiques décrites dans cette politique.
                  </p>
                </div>
              </div>

              {/* Données collectées */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary-600" />
                  Données que nous collectons
                </h2>
                <div className="space-y-4 text-neutral-600">
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Données personnelles</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Nom de l'entreprise (le cas échéant)</li>
                      <li>Adresse IP</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Données de navigation</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Pages visitées</li>
                      <li>Temps passé sur le site</li>
                      <li>Type de navigateur</li>
                      <li>Appareil utilisé</li>
                      <li>Système d'exploitation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Utilisation des données */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary-600" />
                  Comment nous utilisons vos données
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>Nous utilisons vos données personnelles pour :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Répondre à vos demandes</strong> : Traiter vos demandes de devis et de contact</li>
                    <li><strong>Améliorer nos services</strong> : Analyser les tendances d'utilisation pour optimiser notre site</li>
                    <li><strong>Communication</strong> : Vous envoyer des informations pertinentes (avec votre consentement)</li>
                    <li><strong>Sécurité</strong> : Détecter et prévenir les activités frauduleuses</li>
                    <li><strong>Conformité légale</strong> : Respecter nos obligations légales et réglementaires</li>
                  </ul>
                </div>
              </div>

              {/* Partage des données */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-primary-600" />
                  Partage de vos données
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers. Nous ne partageons 
                    vos données que dans les cas suivants :
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Prestataires de services</strong> : Hébergement, emails, analytiques (avec garanties de protection)</li>
                    <li><strong>Obligations légales</strong> : Lorsque la loi l'exige ou pour protéger nos droits</li>
                    <li><strong>Partenaires commerciaux</strong> : Avec votre consentement explicite</li>
                  </ul>
                  <p className="mt-4">
                    Nos prestataires de services sont tenus par contrat de protéger vos données et de ne les utiliser 
                    que pour les services qu'ils nous fournissent.
                  </p>
                </div>
              </div>

              {/* Conservation des données */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary-600" />
                  Conservation des données
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour les finalités 
                    pour lesquelles elles ont été collectées :
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Données de contact</strong> : 3 ans après notre dernier échange</li>
                    <li><strong>Données de navigation</strong> : 13 mois (conformément au RGPD)</li>
                    <li><strong>Données transactionnelles</strong> : 5 ans (obligations comptables)</li>
                  </ul>
                  <p className="mt-4">
                    Après ces délais, vos données sont soit supprimées soit anonymisées.
                  </p>
                </div>
              </div>

              {/* Vos droits */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-primary-600" />
                  Vos droits sur vos données
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Droit d'accès</strong> : Savoir quelles données nous avons sur vous</li>
                    <li><strong>Droit de rectification</strong> : Demander la correction de données inexactes</li>
                    <li><strong>Droit à l'effacement</strong> : Demander la suppression de vos données</li>
                    <li><strong>Droit à la portabilité</strong> : Recevoir vos données dans un format standard</li>
                    <li><strong>Droit d'opposition</strong> : Vous opposer au traitement de vos données</li>
                    <li><strong>Droit de retrait du consentement</strong> : Retirer votre consentement à tout moment</li>
                  </ul>
                  <p className="mt-4">
                    Pour exercer ces droits, contactez-nous à {companyInfo.email}. Nous répondrons dans un délai de 30 jours.
                  </p>
                </div>
              </div>

              {/* Sécurité */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary-600" />
                  Sécurité de vos données
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles :
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Chiffrement des données en transit (HTTPS/TLS)</li>
                    <li>Accès restreint aux données autorisées uniquement</li>
                    <li>Sauvegardes régulières et sécurisées</li>
                    <li>Tests de sécurité réguliers</li>
                    <li>Formation du personnel à la sécurité des données</li>
                  </ul>
                  <p className="mt-4">
                    Malgré nos efforts, aucune méthode de transmission sur Internet n'est 100% sécurisée. Nous ne pouvons 
                    garantir une sécurité absolue.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary-600" />
                  Cookies et technologies similaires
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser l'utilisation de notre site :
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Cookies essentiels</strong> : Nécessaires au fonctionnement du site</li>
                    <li><strong>Cookies analytiques</strong> : Pour comprendre comment vous utilisez notre site</li>
                    <li><strong>Cookies de performance</strong> : Pour améliorer les performances du site</li>
                  </ul>
                  <p className="mt-4">
                    Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
                  </p>
                </div>
              </div>

              {/* Modifications */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Modifications de cette politique
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Nous pouvons modifier cette politique de confidentialité de temps à temps. Les modifications seront 
                    publiées sur cette page avec la date de mise à jour. Nous vous informerons des modifications importantes 
                    par email.
                  </p>
                  <p>
                    Nous vous recommandons de consulter régulièrement cette politique pour rester informé de la manière 
                    dont nous protégeons vos données.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="card p-8 bg-gradient-to-br from-primary-50 to-accent-50">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4">
                  Contact pour la protection des données
                </h2>
                <p className="text-neutral-600 mb-4">
                  Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors"
                  >
                    <Shield className="w-4 h-4" />
                    {companyInfo.email}
                  </a>
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-primary-700 font-semibold text-sm border border-primary-200 hover:bg-primary-50 transition-colors"
                  >
                    <Lock className="w-4 h-4" />
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              {/* Dernière mise à jour */}
              <div className="text-center text-sm text-neutral-500 mt-8">
                <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}