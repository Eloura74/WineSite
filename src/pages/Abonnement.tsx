import React from 'react';
import caveImage from '../assets/cave.jpg';

const Abonnement: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#404041] to-[#533b34]">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${caveImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative text-center px-4">
          <h1 className="text-6xl font-bold mb-4 text-[#FF4B12]">
            Mon Patrimoine Vin
          </h1>
          <h2 className="text-2xl text-gray-300 mb-8">
            Ma cave, selon mon budget et mes goûts !<br />
            Sans me soucier des contraintes !
          </h2>
          <button className="bg-[#FF4B12] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#FF6B32] transition duration-300">
            Souscrivez dès maintenant
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Colonne gauche : Projet & Avantages */}
          <div className="space-y-8">
            {/* Le Projet */}
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-[#FF4B12]/20">
              <h3 className="text-2xl font-bold text-[#FF4B12] mb-4">
                Le projet - Patrimoine vin
              </h3>
              <p className="text-gray-300">
                Concevez une cave personnalisée sous forme d'abonnement mensuel. L'APÉROTEC sélectionne pour vous des vins d'exception adaptés à votre identité vin, pour le plaisir de garde et de découverte.
              </p>
            </div>

            {/* Avantages Membres */}
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-[#FF4B12]/20">
              <h3 className="text-2xl font-bold text-[#FF4B12] mb-4">
                Avantages Membres
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <span className="font-semibold text-[#FF4B12]">Événements exclusifs :</span> Soirées et promotions réservées aux membres.
                </li>
                <li>
                  <span className="font-semibold text-[#FF4B12]">Livraison :</span> Offerte une fois par an jusqu'à 100km.
                </li>
                <li>
                  <span className="font-semibold text-[#FF4B12]">Allocation :</span> À partir de 50€/mois.
                </li>
                <li>
                  <span className="font-semibold text-[#FF4B12]">Accès à la cave :</span> Récupérez vos bouteilles quand vous le souhaitez (selon disponibilité).
                </li>
              </ul>
            </div>
          </div>

          {/* Colonne droite : Fonctionnement & Procédure */}
          <div className="space-y-8 flex flex-col justify-between">
            {/* Fonctionnement */}
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-[#FF4B12]/20">
              <h3 className="text-2xl font-bold text-[#FF4B12] mb-4">
                Fonctionnement
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-[#FF4B12]">Accès et vieillissement :</h4>
                  <p>
                    Accédez à votre casier pendant les heures d'ouverture de la cave et récupérez vos bouteilles sur rendez-vous (24h).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FF4B12]">Sécurité :</h4>
                  <p>
                    Casier climatisé et sécurisé par un système d'alarme.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FF4B12]">Accès en ligne :</h4>
                  <p>
                    Consultez votre cahier de cave via votre compte sur notre site.
                  </p>
                </div>
              </div>
            </div>

            {/* Procédure d'inscription */}
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-[#FF4B12]/20">
              <h3 className="text-2xl font-bold text-[#FF4B12] mb-4">
                Procédure en ligne
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Téléchargez votre contrat.</li>
                <li>Remplissez-le.</li>
                <li>Retournez-le rempli, signé, avec les pièces demandées.</li>
                <li>
                  Envoyez-le en magasin (13800 Istres) ou par mail à <span className="text-[#FF4B12]">contact@aperotec.fr</span>.
                </li>
              </ol>
              <div className="mt-6 text-center">
                <button className="w-full bg-[#FF4B12] text-white py-4 rounded-lg hover:bg-[#FF6B32] transition-all duration-300 shadow-lg">
                  Souscrivez maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abonnement;
