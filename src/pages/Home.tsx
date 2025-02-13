import React from 'react';
import homeImage from '../assets/home.webp';
import abonnementImage from '../assets/abonnement.jpg';
import degustationImage from '../assets/degustation.jpg';

const Home: React.FC = () => {
  return (
    <div className="bg-zinc-900">
      {/* Section Hero */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInDown 
  bg-gradient-to-r from-[#FF4B12] via-[#d37640] to-[#FF4B12] bg-clip-text text-transparent">
  Bienvenue chez L'Apérotec
</h1>


          <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl animate-fadeInUp">
            Savourez des vins et spiritueux d'exception dans un cadre chaleureux et raffiné.
          </p>
          <a
            href="/boutique"
            className="px-8 py-4 bg-[#FF4B12] text-white font-semibold rounded-lg shadow-xl hover:bg-[#FF6B32] hover:scale-105 transition duration-300"
          >
            Explorer notre Boutique
          </a>
          <div className="animate-fadeInUp mt-6">
            <p className="text-white text-lg md:text-xl ">OUVERT DU MARDI AU SAMEDI DE 10h à 19h  </p>
            <p>& </p>
            <p className="text-white text-lg md:text-xl ">BAR A VIN LE JEUDI ET VENDREDI DE 18h30 à 22h30</p>

            
          </div>
        </div>
      </section>

      {/* Section Nos Services */}
      <section className="py-20 bg-gradient-to-r from-[#404041] to-[#533b34]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#FF4B12] mb-12 underline">Nos Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Boutique en ligne */}
            <div className="bg-zinc-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-600 border border-[#FF4B12]/20">
              <div className="relative">
                <img
                  src={homeImage}
                  alt="Boutique en ligne"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#FF4B12]">Boutique en ligne</h3>
                <p className="text-gray-300">
                  Parcourez notre sélection raffinée de vins et spiritueux, soigneusement choisis pour les amateurs d'excellence.
                </p>
              </div>
            </div>

            {/* Abonnement Vin */}
            <div className="bg-zinc-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-600 border border-[#FF4B12]/20">
              <div className="relative">
                <img
                  src={abonnementImage}
                  alt="Abonnement Vin"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#FF4B12]">Abonnement Vin</h3>
                <p className="text-gray-300">
                  Profitez de notre service exclusif d'abonnement pour stocker et conserver vos bouteilles dans des conditions optimales.
                </p>
              </div>
            </div>

            {/* Menus & Soirées */}
            <div className="bg-zinc-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-600 border border-[#FF4B12]/20">
              <div className="relative">
                <img
                  src={degustationImage}
                  alt="Menus & Soirées"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#FF4B12]">Menus & Soirées</h3>
                <p className="text-gray-300">
                  Rejoignez-nous pour des soirées gastronomiques où mets et vins se marient à la perfection dans une ambiance conviviale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
