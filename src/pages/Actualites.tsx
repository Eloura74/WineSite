import React from "react";
import actuImage from "../assets/actu.jpg";
import nouveaucruImage from "../assets/nouveauCru.jpg";
import degustationPrive from "../assets/degustationPrive.jpg";

const Actualites: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Section Hero avec l'image de fond */}
      <section
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${actuImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4 pb-2 text-[#FF4B12]">Actualités</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
      Retrouvez tous les vendredis midis, Eric notre tonton Apérotec derrière les fourneaux pour vous concocter un bon repas !<br /><br />
      Unique chaque semaine à retrouver sur notre site ou sur les réseaux ! À vous de réserver !<br /><br />
      En ligne, par téléphone ou à l’improviste, profitez d’un moment délicieux !
    </p>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 py-12">
        {/* Les repas du Vendredi Midi & Les dégustations plaisirs */}
        <div className="grid gap-12 md:grid-cols-2 max-w-7xl mx-auto mb-12">
          {/* Les repas du Vendredi Midi */}
          <div className="bg-black/50 backdrop-blur-sm rounded-xl shadow-2xl border border-[#FF4B12]/20 overflow-hidden p-6">
            <h2 className="text-3xl font-bold text-[#FF4B12] mb-4">
              Les repas du Vendredi Midi
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Retrouvez tous les vendredis midi chez votre tonton Apérotec
              d'énormes surprises pour vous concocter un <strong>apéromidi</strong> !
              Chaque semaine, le service évolue pour ne jamais lasser !
              À vous de tester !
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Venez profiter d'un lieu chaleureux et convivial pour vous
              détendre et découvrir nos spécialités.
            </p>
            {/* Vidéo YouTube */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/FZl9z-iGWek"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Les dégustations plaisirs */}
          <div className="bg-black/50 backdrop-blur-sm rounded-xl shadow-2xl border border-[#FF4B12]/20 overflow-hidden p-6">
            <h2 className="text-3xl font-bold text-[#FF4B12] mb-4">
              Les dégustations plaisirs
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Partager de la bonne humeur, entre amis ou en famille, des
              moments d'émotions, en sirotant quelques verres tout en
              dégustant nos savoureuses planches.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Nous avons réuni l'« Oeno » avec nos expressions gustatives,
              dans un cadre authentique. À vous de tester !
            </p>
            {/* Vidéo YouTube */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/KGx9iGH3vhw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Grille d'articles : Nouveau cru 2025 & Dégustation Privée */}
        <div className="grid gap-12 md:grid-cols-2 max-w-7xl mx-auto">
          {/* Article 1 : Nouveau cru 2025 */}
          <article className="group bg-black/50 backdrop-blur-sm rounded-xl shadow-2xl border border-[#FF4B12]/20 overflow-hidden">
            <div className="relative h-72 overflow-hidden">
              <img
                src={nouveaucruImage}
                alt="Nouveau Cru"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-gray-300 mb-2">15/02/2025</p>
                <h2 className="text-3xl font-bold text-[#FF4B12] mb-2">
                  Lancement de notre nouveau cru 2025
                </h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Nous sommes fiers de vous présenter notre tout nouveau cru 2025, fruit
                d'un travail passionné et de la collaboration avec des vignerons
                renommés. Découvrez ce vin d'exception et laissez-vous surprendre
                par ses arômes subtils.
              </p>
              <div className="flex justify-between items-center">
                <button className="px-8 py-3 text-lg font-semibold bg-[#FF4B12] text-white rounded-lg 
                                 shadow-lg transition-all duration-300 hover:bg-[#FF6B32] hover:scale-105 
                                 hover:shadow-[#FF4B12]/20">
                  En savoir plus
                </button>
                <span className="text-[#FF4B12]">→</span>
              </div>
            </div>
          </article>

          {/* Article 2 : Dégustation Privée */}
          <article className="group bg-black/50 backdrop-blur-sm rounded-xl shadow-2xl border border-[#FF4B12]/20 overflow-hidden">
            <div className="relative h-72 overflow-hidden">
              <img
                src={degustationPrive}
                alt="Dégustation Privée"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-gray-300 mb-2">22/02/2025</p>
                <h2 className="text-3xl font-bold text-[#FF4B12] mb-2">
                  Soirée de dégustation exclusive
                </h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Réservez votre place pour notre prochaine soirée de dégustation, où vous pourrez
                découvrir des accords mets-vins exceptionnels dans une ambiance chaleureuse et
                intimiste. Places limitées pour garantir une expérience personnalisée.
              </p>
              <div className="flex justify-between items-center">
                <button className="px-8 py-3 text-lg font-semibold bg-[#FF4B12] text-white rounded-lg 
                                 shadow-lg transition-all duration-300 hover:bg-[#FF6B32] hover:scale-105 
                                 hover:shadow-[#FF4B12]/20">
                  Réserver maintenant
                </button>
                <span className="text-[#FF4B12]">→</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Actualites;
