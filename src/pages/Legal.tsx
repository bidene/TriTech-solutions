import { useEffect } from 'react';
import { Shield, Scale, FileText } from 'lucide-react';
import { companyInfo } from '@/data/site';

export default function Legal() {
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
              <Scale className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <h1 className="font-display text-3xl font-bold text-neutral-900">
              Mentions légales
            </h1>
          </div>
          <p className="text-neutral-600 max-w-2xl">
            Informations légales et conditions d'utilisation du site web de {companyInfo.name}.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-page max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Éditeur du site */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Éditeur du site
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p><strong>Éditeur :</strong> {companyInfo.name}</p>
                  <p><strong>Adresse :</strong> {companyInfo.fullAddress}</p>
                  <p><strong>Téléphone :</strong> {companyInfo.phone}</p>
                  <p><strong>Email :</strong> {companyInfo.email}</p>
                  <p><strong>Forme juridique :</strong> Société à responsabilité limitée (SARL)</p>
                  <p><strong>Capital social :</strong> 1 000 000 FCFA</p>
                  <p><strong>Numéro d'immatriculation :</strong> RB/COT/2023/B-12345</p>
                  <p><strong>Numéro TVA :</strong> TG123456789</p>
                </div>
              </div>

              {/* Hébergement */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary-600" />
                  Hébergement
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  <p><strong>Téléphone :</strong> +1 (415) 231-9654</p>
                  <p><strong>Email :</strong> support@vercel.com</p>
                  <p><strong>Site web :</strong> https://vercel.com</p>
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
                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur.
                    Toute reproduction, distribution, modification, adaptation, transmission ou publication de tout ou partie 
                    du contenu de ce site est interdite sans l'autorisation préalable écrite de {companyInfo.name}.
                  </p>
                  <p>
                    Les marques, logos et mentions visuelles cités sur ce site sont la propriété de leurs déposants ou titulaires.
                    Toute reproduction, totale ou partielle, de ces marques est interdite sans autorisation.
                  </p>
                </div>
              </div>

              {/* Données personnelles */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Protection des données personnelles
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Conformément au RGPD et à la loi n°2019-031 du 17 octobre 2019 relative à la protection des données 
                    personnelles au Bénin, nous nous engageons à protéger vos données personnelles.
                  </p>
                  <p>
                    Les données collectées via notre formulaire de contact sont utilisées uniquement pour répondre à vos 
                    demandes et ne sont jamais partagées avec des tiers sans votre consentement explicite.
                  </p>
                  <p>
                    Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer 
                    ces droits, contactez-nous à {companyInfo.email}.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary-600" />
                  Cookies
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Ce site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits 
                    fichiers stockés sur votre appareil qui nous permettent de vous reconnaître lors de vos visites ultérieures.
                  </p>
                  <p>
                    Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, certaines fonctionnalités 
                    du site pourraient ne pas fonctionner correctement sans cookies.
                  </p>
                </div>
              </div>

              {/* Responsabilité */}
              <div className="card p-8">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Limitation de responsabilité
                </h2>
                <div className="space-y-3 text-neutral-600">
                  <p>
                    {companyInfo.name} s'efforce de fournir des informations exactes et à jour sur ce site. Cependant, 
                    nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées.
                  </p>
                  <p>
                    En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive. 
                    {companyInfo.name} ne saurait être tenu responsable des dommages directs ou indirects résultant 
                    de l'utilisation de ce site.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="card p-8 bg-gradient-to-br from-primary-50 to-accent-50">
                <h2 className="font-display text-xl font-bold text-neutral-900 mb-4">
                  Contact pour les questions légales
                </h2>
                <p className="text-neutral-600 mb-4">
                  Pour toute question concernant ces mentions légales, n'hésitez pas à nous contacter :
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