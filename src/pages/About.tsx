import React from 'react';
import aboutImage from '../assets/about.jpg'
import caveAboutImage from   '../assets/caveAbout.jpg'; // Image de fond pour la section Hero
// import wineryPortrait from 'https://source.unsplash.com/600x400/?winery,portrait'; // Exemple d'image ou remplacez par la vôtre

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Section Hero avec l'image about.jpg */}
      <section
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-[#FF4B12]">Qui sommes-nous ?</h1>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image de présentation */}
          <div className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-lg shadow-xl">
            <img
              src={caveAboutImage }
              alt="Notre équipe"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
          </div>

          {/* Texte à droite */}
          <div className="w-full md:w-1/2 space-y-6 text-gray-300">
            {/* Texte issu de l'image */}
            <h2 className="text-2xl font-bold text-[#FF4B12]">
              Caviste / Bar à vins / Casiers à vins
            </h2>
            <p className="text-lg">
              Cette histoire de trois copains qui ont décidé de réunir ensemble une passion commune :
              un lieu de plaisir et de partage pour tous autour du bon vin et de bonnes planches !
            </p>
            <p className="text-lg">
              Le tout vous amènera à découvrir, déguster, explorer ou simplement vous émerveiller
              par une émotion.
            </p>
            <p className="text-lg">
              Ce bar à vin est une histoire d’émotion avant tout !
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold text-white">Sélection Particulière :</span> Vins, 
                champagnes et spiritueux du monde. Des produits sélectionnés avec soin par nos cavistes,
                de la grande distribution à la petite exploitation.
              </li>
              <li>
                <span className="font-semibold text-white">Convivialité :</span> Dégustation, bar à vin. 
                Franc et générosité du moment. Des bons conseils et la possibilité de privatiser au cas par cas.
              </li>
              <li>
                <span className="font-semibold text-white">Patrimoine :</span> Casiers de conservation. 
                Sous forme d’allocation de vin pour constituer une cave. Tous nos services proposés à la carte.
              </li>
              <li>
                <span className="font-semibold text-white">Expériences :</span> Repas, planches, animations. 
                Ou comment passer un agréable moment vin convivial !
              </li>
              <li>
                <span className="font-semibold text-white">Legato :</span> Coffrets cadeaux éventuellement 
                personnalisés sur devis.
              </li>
            </ul>

            {/* Texte existant sur L'Apérotec */}
            <p className="text-lg">
              Fondée en 2010, <span className="text-[#FF4B12] font-semibold">L'Apérotec</span> est née de la passion pour 
              l'art du vin et de la volonté de partager des expériences œnologiques uniques. Nous travaillons 
              main dans la main avec des vignerons passionnés pour vous offrir une sélection de vins et 
              spiritueux d'exception.
            </p>
            <p className="text-lg">
              Notre mission est de créer un lieu où se mêlent convivialité, savoir-faire et innovation. 
              Chaque détail compte, que ce soit dans la sélection de nos produits ou dans l'organisation 
              de nos soirées dégustation.
            </p>
            <p className="text-lg font-medium text-[#FF4B12]">
              Rejoignez-nous et découvrez un univers où la passion du vin se vit pleinement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
