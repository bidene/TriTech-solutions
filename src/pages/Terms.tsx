import { useEffect } from 'react';
import { FileText, AlertTriangle, CheckCircle, XCircle, Users, Shield } from 'lucide-react';
import { companyInfo } from '@/data/site';

export default function Terms() {
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
              <FileText className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <h1 className="font-display text-3xl font-bold text-neutral-900">
              Conditions d'utilisation
            </h1>
          </div>
          <p className="text-neutral-600 max-w-2xl">
            Conditions générales d'utilisation du site web et des services de {companyInfo.name}.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-page max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Acceptation */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  Acceptation des conditions
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    En accédant à ce site web et en l'utilisant, vous acceptez les présentes conditions d'utilisation. 
                    Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
                  </p>
                  <p>
                    {companyInfo.name} se réserve le droit de modifier ces conditions à tout moment. Les modifications 
                    seront effectives dès leur publication sur cette page. Votre utilisation continue du site après 
                    publication des modifications constitue votre acceptation des nouvelles conditions.
                  </p>
                </div>
              </div>

              {/* Description des services */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary-600" />
                  Description des services
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    {companyInfo.name} fournit des services de développement web, mobile, cloud, cybersécurité, 
                    design UI/UX, data analytics et administration réseau. Ces services sont décrits en détail 
                    dans la section "Services" de notre site.
                  </p>
                  <p>
                    Nous nous réservons le droit de modifier, suspendre ou interrompre tout service à tout moment, 
                    avec ou sans préavis, pour quelque raison que ce soit.
                  </p>
                </div>
              </div>

              {/* Obligations de l'utilisateur */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  Obligations de l'utilisateur
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>En utilisant ce site, vous vous engagez à :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Fournir des informations exactes et complètes dans les formulaires</li>
                    <li>Ne pas utiliser ce site à des fins illégales ou non autorisées</li>
                    <li>Ne pas tenter d'interrompre ou endommager le site ou les serveurs</li>
                    <li>Ne pas transmettre de virus ou autres codes malveillants</li>
                    <li>Respecter les droits de propriété intellectuelle de tiers</li>
                    <li>Ne pas utiliser le site pour envoyer des communications non sollicitées (spam)</li>
                    <li>Ne pas usurper l'identité d'une autre personne ou entité</li>
                  </ul>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Propriété intellectuelle
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Tout le contenu de ce site (textes, images, vidéos, logos, designs, code source, etc.) est la 
                    propriété exclusive de {companyInfo.name} ou de ses tiers licenciés.
                  </p>
                  <p>
                    Toute reproduction, distribution, modification, adaptation, publication, transmission ou autre 
                    exploitation de tout ou partie du contenu de ce site est strictement interdite sans notre 
                    autorisation écrite préalable.
                  </p>
                  <p>
                    Les marques commerciales, logos et marques de service affichés sur ce site sont la propriété de 
                    {companyInfo.name} ou de leurs propriétaires respectifs.
                  </p>
                </div>
              </div>

              {/* Confidentialité */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Confidentialité
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Votre utilisation de ce site est également régie par notre Politique de confidentialité. 
                    En utilisant ce site, vous acceptez la collecte et l'utilisation de vos données personnelles 
                    conformément à cette politique.
                  </p>
                  <p>
                    Nous nous engageons à protéger vos données personnelles et à ne les partager qu'avec des 
                    tiers autorisés dans le cadre des services fournis.
                  </p>
                </div>
              </div>

              {/* Limitation de responsabilité */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-primary-600" />
                  Limitation de responsabilité
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Dans la mesure maximale permise par la loi applicable, {companyInfo.name} décline toute 
                    responsabilité pour :
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Tout dommage direct, indirect, accessoire, spécial ou consécutif résultant de l'utilisation 
                    ou de l'impossibilité d'utiliser ce site</li>
                    <li>Toute erreur, inexactitude ou omission dans le contenu</li>
                    <li>Tout virus ou composant malveillant pouvant affecter votre équipement informatique</li>
                    <li>Tout dysfonctionnement technique du site</li>
                    <li>Toute perte de données ou de profits</li>
                  </ul>
                  <p className="mt-4">
                    L'utilisation de ce site se fait à vos propres risques. Nous ne fournisons aucune garantie, expresse 
                    ou implicite, concernant le fonctionnement du site ou son contenu.
                  </p>
                </div>
              </div>

              {/* Indemnisation */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Indemnisation
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Vous acceptez d'indemniser et détenir {companyInfo.name} et ses dirigeants, employés, agents, 
                    affiliés et partenaires inoffensifs contre toute réclamation, demande, action, cause de action, 
                    perte, dommage, coût, dépense et responsabilité (y compris les frais juridiques raisonnables) 
                    résultant de :
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Votre utilisation de ce site</li>
                    <li>Votre violation des présentes conditions</li>
                    <li>Votre violation des droits d'un tiers</li>
                  </ul>
                </div>
              </div>

              {/* Résiliation */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-primary-600" />
                  Résiliation
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Nous nous réservons le droit de résilier ou suspendre votre accès à ce site à tout moment, 
                    avec ou sans préavis, pour quelque raison que ce soit, y compris mais sans s'y limiter :
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Violation des présentes conditions</li>
                    <li>Activité frauduleuse ou suspectée</li>
                    <li>Non-paiement des services (le cas échéant)</li>
                    <li>Abus du système ou tentative de compromission</li>
                  </ul>
                  <p className="mt-4">
                    En cas de résiliation, votre droit d'utiliser ce site cessera immédiatement.
                  </p>
                </div>
              </div>

              {/* Législation applicable */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Législation applicable et juridiction
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Les présentes conditions sont régies par les lois de la République du Bénin. Tout litige 
                    relatif à ces conditions ou à l'utilisation de ce site sera soumis à la juridiction exclusive 
                    des tribunaux compétents de Cotonou, Bénin.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="card p-8 bg-gradient-to-br from-primary-50 to-accent-50">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4">
                  Contact pour les questions
                </h2>
                <p className="text-neutral-600 mb-4">
                  Pour toute question concernant ces conditions d'utilisation :
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    {companyInfo.email}
                  </a>
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-primary-700 font-semibold text-sm border border-primary-200 hover:bg-primary-50 transition-colors"
                  >
                    <Shield className="w-4 h-4" />
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