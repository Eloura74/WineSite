import React, { useState, useMemo } from 'react';
import ArticleCard, { articles } from '../componants/Articles';
import boutiqueImage from '../assets/boutique.jpg';

const Boutique: React.FC = () => {
  // États pour les filtres
  const [categorieSelectionnee, setCategorieSelectionnee] = useState<string>('');
  const [regionSelectionnee, setRegionSelectionnee] = useState<string>('');
  const [prixMin, setPrixMin] = useState<number>(0);
  const [prixMax, setPrixMax] = useState<number>(1000);
  const [recherche, setRecherche] = useState<string>('');

  // Extraire les régions uniques des articles
  const regions = useMemo(() => {
    const regionsSet = new Set(articles.map((article) => article.region));
    return Array.from(regionsSet);
  }, []);

  // Filtrer les articles
  const articlesFiltres = useMemo(() => {
    return articles.filter((article) => {
      const matchCategorie =
        !categorieSelectionnee || article.categorie === categorieSelectionnee;
      const matchRegion =
        !regionSelectionnee || article.region === regionSelectionnee;
      const matchPrix = article.prix >= prixMin && article.prix <= prixMax;
      const matchRecherche =
        article.nom.toLowerCase().includes(recherche.toLowerCase()) ||
        article.description.toLowerCase().includes(recherche.toLowerCase());

      return matchCategorie && matchRegion && matchPrix && matchRecherche;
    });
  }, [categorieSelectionnee, regionSelectionnee, prixMin, prixMax, recherche]);

  return (
    <div className="min-h-screen">
      {/* Section Hero avec l'image de fond */}
      <section
        className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${boutiqueImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center px-4">
          <h1 className="text-6xl font-bold mb-4 text-[#FF4B12]">
            Notre Boutique
          </h1>
        </div>
      </section>

      {/* Contenu principal avec fond dégradé */}
      <div className="bg-gradient-to-r from-[#404041] to-[#533b34] py-12">
        <div className="container mx-auto px-6">
          {/* Barre de filtres */}
          <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-[#FF4B12]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Recherche */}
              <div>
                <label className="block text-[#FF4B12] mb-2">Rechercher</label>
                <input
                  type="text"
                  value={recherche}
                  onChange={(e) => setRecherche(e.target.value)}
                  className="w-full bg-zinc-900/80 border border-[#FF4B12]/20 px-4 py-2 rounded-lg text-white
                             focus:outline-none focus:ring-2 focus:ring-[#FF4B12] focus:border-transparent
                             placeholder-gray-500"
                  placeholder="Rechercher un vin..."
                />
              </div>

              {/* Filtre Catégorie */}
              <div>
                <label className="block text-[#FF4B12] mb-2">Catégorie</label>
                <select
                  value={categorieSelectionnee}
                  onChange={(e) => setCategorieSelectionnee(e.target.value)}
                  className="w-full bg-zinc-900/80 border border-[#FF4B12]/20 px-4 py-2 rounded-lg text-white
                             focus:outline-none focus:ring-2 focus:ring-[#FF4B12] focus:border-transparent"
                >
                  <option value="">Toutes les catégories</option>
                  <option value="Rouge">Vins Rouges</option>
                  <option value="Blanc">Vins Blancs</option>
                  <option value="Rosé">Vins Rosés</option>
                  <option value="Champagne">Champagnes</option>
                  <option value="Spiritueux">Spiritueux</option>
                </select>
              </div>

              {/* Filtre Région */}
              <div>
                <label className="block text-[#FF4B12] mb-2">Région</label>
                <select
                  value={regionSelectionnee}
                  onChange={(e) => setRegionSelectionnee(e.target.value)}
                  className="w-full bg-zinc-900/80 border border-[#FF4B12]/20 px-4 py-2 rounded-lg text-white
                             focus:outline-none focus:ring-2 focus:ring-[#FF4B12] focus:border-transparent"
                >
                  <option value="">Toutes les régions</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtre Prix Min */}
              <div>
                <label className="block text-[#FF4B12] mb-2">Prix minimum</label>
                <input
                  type="number"
                  value={prixMin}
                  onChange={(e) => setPrixMin(Number(e.target.value))}
                  className="w-full bg-zinc-900/80 border border-[#FF4B12]/20 px-4 py-2 rounded-lg text-white
                             focus:outline-none focus:ring-2 focus:ring-[#FF4B12] focus:border-transparent"
                  min="0"
                  max={prixMax}
                />
              </div>

              {/* Filtre Prix Max */}
              <div>
                <label className="block text-[#FF4B12] mb-2">Prix maximum</label>
                <input
                  type="number"
                  value={prixMax}
                  onChange={(e) => setPrixMax(Number(e.target.value))}
                  className="w-full bg-zinc-900/80 border border-[#FF4B12]/20 px-4 py-2 rounded-lg text-white
                             focus:outline-none focus:ring-2 focus:ring-[#FF4B12] focus:border-transparent"
                  min={prixMin}
                />
              </div>
            </div>
          </div>

          {/* Grille des articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articlesFiltres.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Message si aucun résultat */}
          {articlesFiltres.length === 0 && (
            <div className="text-center text-gray-300 py-12">
              Aucun article ne correspond à vos critères de recherche.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Boutique;
