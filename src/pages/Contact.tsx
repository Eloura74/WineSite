import React from "react";
import contactImage from "../assets/contact.jpg";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Section Hero avec l'image de fond */}
      <section
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-[#FF4B12]">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Vous avez une question ou souhaitez en savoir plus ? N'hésitez pas à nous contacter.
          </p>
        </div>
      </section>

      {/* Contenu principal avec fond dégradé */}
      <div className="bg-gradient-to-r from-[#404041] to-[#533b34] py-12">
        <div className="container mx-auto px-6">
          {/* Disposition en 2 colonnes sur écrans md+ */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formulaire de contact */}
            <div className="bg-black/50 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-[#FF4B12]/20">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#FF4B12] font-medium mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-zinc-900/80 border border-[#FF4B12]/20 px-4 py-2 rounded-lg text-white
                               focus:outline-none focus:ring-2 focus:ring-[#FF4B12] focus:border-transparent
                               placeholder-gray-500"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#FF4B12] font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-zinc-900/80 border border-[#FF4B12]/20 px-4 py-2 rounded-lg text-white
                               focus:outline-none focus:ring-2 focus:ring-[#FF4B12] focus:border-transparent
                               placeholder-gray-500"
                    placeholder="Votre email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#FF4B12] font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-zinc-900/80 border border-[#FF4B12]/20 px-4 py-2 rounded-lg text-white
                               focus:outline-none focus:ring-2 focus:ring-[#FF4B12] focus:border-transparent
                               placeholder-gray-500"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF4B12] text-white py-3 rounded-lg hover:bg-[#FF6B32] hover:scale-105 
                             transition-all duration-300 shadow-lg"
                >
                  Envoyer
                </button>
              </form>
            </div>

            {/* Coordonnées de L’Apérotec */}
            <div className="bg-black/50 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-[#FF4B12]/20 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-[#FF4B12] mb-4">
                L’Apérotec
              </h2>
              <p className="text-gray-300 mb-4">
                <span className="font-semibold text-white">En face du KFC Istres</span><br />
                Avenue Radolfzell, ZAC des Cognets<br />
                13800 Istres
              </p>
              <p className="text-gray-300 mb-4">
                <span className="font-semibold text-white">Tél :</span> 04 84 48 50 00<br />
                <span className="font-semibold text-white">Tél :</span> 07 57 07 86 24
              </p>
              <p className="text-gray-300 mb-4">
                <span className="font-semibold text-white">Horaires :</span><br />
                Mardi / Mercredi / Samedi : 10h - 19h<br />
                Jeudi / Vendredi : 10h - 23h
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-white">Bar à vins :</span><br />
                Le jeudi et vendredi
              </p>
            </div>
          </div>

          {/* Carte Google Maps avec voile sombre */}
          <div className="relative w-full h-72 mt-12 rounded-lg overflow-hidden shadow-xl border border-[#FF4B12]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.129211963321!2d4.9941043154893855!3d43.510590679126026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b60fd330283a71%3A0x66d2f95b0f53b0d2!2sAvenue%20Radolfzell%2C%2013800%20Istres!5e0!3m2!1sfr!2sfr!4v1690208857000!5m2!1sfr!2sfr"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Localisation L'Apérotec"
            ></iframe>
            {/* Voile sombre semi-transparent, sans bloquer l'interaction (pointer-events-none) */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
