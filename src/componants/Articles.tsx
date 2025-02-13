import React from 'react';
import rouge from '../assets/rouge.jpg';
import blanc from '../assets/blanc.jpg';
import rose from '../assets/rose.jpg';
import champagne from '../assets/champagne.jpg';
import spirituel from '../assets/spirituel.jpg';

// Types pour les articles
export interface Article {
  id: number;
  nom: string;
  categorie: 'Rouge' | 'Blanc' | 'Rosé' | 'Champagne' | 'Spiritueux';
  region: string;
  prix: number;
  annee: number;
  description: string;
  image: string;
  cepage: string;
  stock: number;
}

// Fonction pour obtenir l'image selon la catégorie
const getImageByCategorie = (categorie: string): string => {
  switch (categorie) {
    case 'Rouge':
      return rouge;
    case 'Blanc':
      return blanc;
    case 'Rosé':
      return rose;
    case 'Champagne':
      return champagne;
    case 'Spiritueux':
      return spirituel;
    default:
      return rouge;
  }
};

// Données factices
export const articles: Article[] = [
    // 🍷 Vins Rouges (11 articles)
    {
      id: 1,
      nom: "Château Lafite Rothschild",
      categorie: "Rouge",
      region: "Bordeaux",
      prix: 120,
      annee: 2017,
      description: "Un vin rouge d’exception aux tanins fins et élégants.",
      image: getImageByCategorie("Rouge"),
      cepage: "Cabernet Sauvignon, Merlot",
      stock: 10
    },
    {
      id: 2,
      nom: "Pomerol Château Clinet",
      categorie: "Rouge",
      region: "Bordeaux",
      prix: 85,
      annee: 2018,
      description: "Un vin velouté aux notes de mûre et de chocolat noir.",
      image: getImageByCategorie("Rouge"),
      cepage: "Merlot, Cabernet Franc",
      stock: 12
    },
    {
      id: 3,
      nom: "Côte-Rôtie La Mouline",
      categorie: "Rouge",
      region: "Vallée du Rhône",
      prix: 150,
      annee: 2016,
      description: "Syrah d’exception aux arômes de violette et d'épices douces.",
      image: getImageByCategorie("Rouge"),
      cepage: "Syrah",
      stock: 7
    },
    {
      id: 4,
      nom: "Saint-Julien Château Talbot",
      categorie: "Rouge",
      region: "Bordeaux",
      prix: 75,
      annee: 2019,
      description: "Un vin puissant et tannique, idéal pour le vieillissement.",
      image: getImageByCategorie("Rouge"),
      cepage: "Cabernet Sauvignon, Merlot",
      stock: 8
    },
    {
      id: 5,
      nom: "Hermitage La Chapelle",
      categorie: "Rouge",
      region: "Vallée du Rhône",
      prix: 130,
      annee: 2015,
      description: "Un vin ample et profond, avec une belle finale épicée.",
      image: getImageByCategorie("Rouge"),
      cepage: "Syrah",
      stock: 9
    },
  
    // 🍾 Vins Blancs (11 articles)
    {
      id: 11,
      nom: "Puligny-Montrachet 1er Cru",
      categorie: "Blanc",
      region: "Bourgogne",
      prix: 95,
      annee: 2020,
      description: "Un grand blanc élégant aux notes de fleurs blanches et d’amandes.",
      image: getImageByCategorie("Blanc"),
      cepage: "Chardonnay",
      stock: 7
    },
    {
      id: 12,
      nom: "Meursault Les Charmes",
      categorie: "Blanc",
      region: "Bourgogne",
      prix: 110,
      annee: 2019,
      description: "Un blanc puissant et beurré avec une belle minéralité.",
      image: getImageByCategorie("Blanc"),
      cepage: "Chardonnay",
      stock: 6
    },
    {
      id: 13,
      nom: "Château d'Yquem",
      categorie: "Blanc",
      region: "Sauternes",
      prix: 350,
      annee: 2017,
      description: "Un liquoreux exceptionnel aux notes de miel et d'abricot confit.",
      image: getImageByCategorie("Blanc"),
      cepage: "Sémillon, Sauvignon Blanc",
      stock: 3
    },
  
    // 🌸 Vins Rosés (11 articles)
    {
      id: 21,
      nom: "Côtes de Provence Rosé",
      categorie: "Rosé",
      region: "Provence",
      prix: 22,
      annee: 2023,
      description: "Un rosé frais et fruité, idéal pour l’été.",
      image: getImageByCategorie("Rosé"),
      cepage: "Grenache, Cinsault",
      stock: 15
    },
    {
      id: 22,
      nom: "Château Minuty Prestige",
      categorie: "Rosé",
      region: "Provence",
      prix: 28,
      annee: 2022,
      description: "Un rosé élégant aux notes de fraise et d’agrumes.",
      image: getImageByCategorie("Rosé"),
      cepage: "Grenache, Cinsault",
      stock: 12
    },
    {
      id: 23,
      nom: "Domaines Ott Clos Mireille",
      categorie: "Rosé",
      region: "Provence",
      prix: 35,
      annee: 2021,
      description: "Un rosé gastronomique aux arômes complexes et floraux.",
      image: getImageByCategorie("Rosé"),
      cepage: "Mourvèdre, Grenache",
      stock: 9
    },
  
    // 🥂 Champagnes (11 articles)
    {
      id: 31,
      nom: "Krug Grande Cuvée",
      categorie: "Champagne",
      region: "Champagne",
      prix: 250,
      annee: 2016,
      description: "Un champagne d’exception aux bulles fines et persistantes.",
      image: getImageByCategorie("Champagne"),
      cepage: "Chardonnay, Pinot Noir",
      stock: 5
    },
    {
      id: 32,
      nom: "Bollinger La Grande Année",
      categorie: "Champagne",
      region: "Champagne",
      prix: 180,
      annee: 2014,
      description: "Un champagne complexe aux notes de brioche et de noisette.",
      image: getImageByCategorie("Champagne"),
      cepage: "Pinot Noir, Chardonnay",
      stock: 6
    },
  
    // 🥃 Spiritueux (11 articles)
    {
      id: 41,
      nom: "Hennessy XO",
      categorie: "Spiritueux",
      region: "Charente",
      prix: 220,
      annee: 2012,
      description: "Un cognac puissant et épicé aux notes de fruits confits.",
      image: getImageByCategorie("Spiritueux"),
      cepage: "Ugni Blanc",
      stock: 4
    },
    {
      id: 42,
      nom: "Glenfiddich 21 ans",
      categorie: "Spiritueux",
      region: "Écosse",
      prix: 195,
      annee: 2001,
      description: "Un whisky raffiné avec des notes de vanille et de chêne.",
      image: getImageByCategorie("Spiritueux"),
      cepage: "Orge maltée",
      stock: 3
    },
    {
      id: 43,
      nom: "Rhum Diplomatico Reserva",
      categorie: "Spiritueux",
      region: "Venezuela",
      prix: 65,
      annee: 2015,
      description: "Un rhum doux et vanillé avec une belle rondeur en bouche.",
      image: getImageByCategorie("Spiritueux"),
      cepage: "Canne à sucre",
      stock: 9
    }
  ];
  

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="group flex flex-col h-full bg-black/50 backdrop-blur-sm 
                    rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#FF4B12]/40 
                    border border-[#FF4B12]/20 transform transition duration-600">
      {/* Image */}
      <div className="relative h-64 overflow-hidden p-2">
        <img
          src={article.image}
          alt={article.nom}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-102 rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-[#FF4B12] font-semibold text-lg">
            {article.prix}€
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl text-center font-bold bg-gradient-to-r from-[#FF4B12] via-[#d37640] to-[#FF4B12] 
                       bg-clip-text text-transparent border-b-2 border-[#FF4B12]/20 pb-2">
          {article.nom}
        </h3>
        <div className="space-y-2 text-gray-300 mt-2 flex-grow">
          <p className="text-sm">Région: {article.region}</p>
          <p className="text-sm">Cépage: {article.cepage}</p>
          <p className="text-sm">Année: {article.annee}</p>
          <p className="mt-2">{article.description}</p>
        </div>

        <button className="mt-4 w-full bg-[#FF4B12] text-white py-3 rounded-lg 
                         hover:bg-[#FF6B32] hover:scale-105 transition-all duration-300 
                         shadow-lg">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
