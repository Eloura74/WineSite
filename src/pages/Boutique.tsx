import React, { useState, useMemo } from 'react';
import { useCart } from '../contexts/CartContext';
import { articles } from '../componants/Articles';
import boutiqueImage from '../assets/boutique.jpg';

const Boutique: React.FC = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes les catégories');
  const [selectedRegion, setSelectedRegion] = useState('Toutes les régions');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // Liste des catégories uniques
  const categories = ['Toutes les catégories', 'Rouge', 'Blanc', 'Rosé', 'Champagne', 'Spiritueux'];
  
  // Liste des régions uniques
  const regions = ['Toutes les régions', ...new Set(articles.map(article => article.region))];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Toutes les catégories' || article.categorie === selectedCategory;
      const matchesRegion = selectedRegion === 'Toutes les régions' || article.region === selectedRegion;
      const matchesPrice = article.prix >= minPrice && article.prix <= maxPrice;
      
      return matchesSearch && matchesCategory && matchesRegion && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedRegion, minPrice, maxPrice]);

  const handleAddToCart = (article: typeof articles[0]) => {
    addToCart(article);
    // Optionnel : Ajouter une notification de succès
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-[#FF4B12] text-white px-4 py-2 rounded-lg shadow-lg z-50';
    notification.textContent = 'Article ajouté au panier !';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src={boutiqueImage}
          alt="Notre Cave"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Notre Cave</h1>
        </div>
      </div>

      {/* Nombre de vins disponibles */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-400">{filteredArticles.length} vins disponibles</p>
      </div>

      {/* Filtres */}
      <div className="container mx-auto px-4 py-8 bg-black/30 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Recherche */}
          <div>
            <input
              type="text"
              placeholder="Rechercher un vin..."
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B12]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Catégorie */}
          <div>
            <select
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B12]"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Région */}
          <div>
            <select
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B12]"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>

          {/* Prix minimum */}
          <div>
            <input
              type="number"
              placeholder="Prix minimum"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B12]"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
          </div>

          {/* Prix maximum */}
          <div>
            <input
              type="number"
              placeholder="Prix maximum"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4B12]"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      {/* Liste des vins */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="group bg-black/30 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#FF4B12]/20 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.nom}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#FF4B12] mb-2">{article.nom}</h3>
                <p className="text-gray-400 mb-2">{article.description}</p>
                <div className="text-sm text-gray-300 space-y-1 mb-4">
                  <p>Région: {article.region}</p>
                  <p>Cépage: {article.cepage}</p>
                  <p>Année: {article.annee}</p>
                  <p>Stock: {article.stock} bouteilles</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#FF4B12] text-xl font-bold">{article.prix}€</span>
                  <button
                    onClick={() => handleAddToCart(article)}
                    className="px-4 py-2 bg-[#FF4B12] text-white rounded-lg hover:bg-[#FF6B32] transition-colors"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boutique;
