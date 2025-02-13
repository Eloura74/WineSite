import React from 'react';
import gastroImage from '../assets/gastro.jpg';
import degustationPriveImage from '../assets/degustationPrive.jpg';
import menusImage from '../assets/menus.jpg';
import midiImage from '../assets/midi.jpg'; // Image pour le menu du midi

const Menus: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#404041] to-[#533b34]">
      {/* Section Hero */}
      <div className="relative">
        {/* Section Hero avec image de fond */}
        <div className="relative h-[300px] overflow-hidden">
          <img
            src={menusImage}
            alt="Menus et Soirées"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#FF4B12] mb-4">
              Menus & Soirées
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Participez à nos soirées thématiques et découvrez des accords mets-vins savoureux dans un cadre convivial.
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 py-12">
        {/* 
          - items-stretch : force chaque carte à s'étirer sur la même hauteur.
          - grid-cols-3 : 3 colonnes sur écran moyen et plus.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Carte Menu du Midi */}
          <div className="group bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-[#FF4B12]/20 flex flex-col">
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={midiImage}
                alt="Menu du Midi"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </div>

            {/* Contenu texte et bouton */}
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-4 text-[#FF4B12]">Menu du Midi</h2>
              {/* flex-grow sur le texte pour "pousser" le bouton en bas */}
              <p className="text-gray-300 mb-4 flex-grow">
                Découvrez nos formules spéciales du midi, avec des plats de saison
                préparés par notre chef, accompagnés de vins sélectionnés avec soin.
              </p>
              {/* Bouton en bas */}
              <button className="mt-auto bg-[#FF4B12] text-white py-3 rounded-lg hover:bg-[#FF6B32] hover:scale-105 
                               transition-all duration-300 shadow-lg">
                Découvrir le menu
              </button>
            </div>
          </div>

          {/* Carte Soirée Gastronomique */}
          <div className="group bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-[#FF4B12]/20 flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img
                src={gastroImage}
                alt="Soirée Gastronomique"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-4 text-[#FF4B12]">Soirée Gastronomique</h2>
              <p className="text-gray-300 mb-4 flex-grow">
                Un menu exclusif élaboré par notre chef, en association avec une sélection de vins raffinés.
              </p>
              <button className="mt-auto bg-[#FF4B12] text-white py-3 rounded-lg hover:bg-[#FF6B32] hover:scale-105 
                               transition-all duration-300 shadow-lg">
                Réserver une table
              </button>
            </div>
          </div>

          {/* Carte Dégustation Privée */}
          <div className="group bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-[#FF4B12]/20 flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img
                src={degustationPriveImage}
                alt="Dégustation Privée"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-4 text-[#FF4B12]">Dégustation Privée</h2>
              <p className="text-gray-300 mb-4 flex-grow">
                Découvrez l'histoire et les arômes uniques de nos vins lors de sessions de dégustation intimistes.
              </p>
              <button className="mt-auto bg-[#FF4B12] text-white py-3 rounded-lg hover:bg-[#FF6B32] hover:scale-105 
                               transition-all duration-300 shadow-lg">
                Réserver une dégustation
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Menus;
