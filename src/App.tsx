import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartProvider, useCart } from './contexts/CartContext';

// Pages
import Accueil from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menus from './pages/Menus';
import Boutique from './pages/Boutique';
import Abonnement from './pages/Abonnement';
import Pannier from './componants/Pannier';

// Composant de navigation avec le panier
const Navigation = () => {
  const [isPanierOpen, setIsPanierOpen] = useState(false);
  const { getItemCount } = useCart();

  return (
    <>
      <nav className="bg-black/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-[#FF4B12]">
              L'Aperotec
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-[#FF4B12] transition-colors">
                Accueil
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-[#FF4B12] transition-colors">
                À propos
              </Link>
              <Link to="/boutique" className="text-gray-300 hover:text-[#FF4B12] transition-colors">
                Boutique
              </Link>
              <Link to="/menus" className="text-gray-300 hover:text-[#FF4B12] transition-colors">
                Menus
              </Link>
              <Link to="/abonnement" className="text-gray-300 hover:text-[#FF4B12] transition-colors">
                Abonnement
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-[#FF4B12] transition-colors">
                Contact
              </Link>
            </div>

            {/* Panier */}
            <button
              onClick={() => setIsPanierOpen(true)}
              className="relative p-2 text-gray-300 hover:text-[#FF4B12] transition-colors"
            >
              <FaShoppingCart size={24} />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF4B12] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Panier */}
      <Pannier isOpen={isPanierOpen} onClose={() => setIsPanierOpen(false)} />
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#1A1A1A] text-white">
          <Navigation />

          {/* Contenu principal */}
          <main>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/about" element={<About />} />
              <Route path="/boutique" element={<Boutique />} />
              <Route path="/menus" element={<Menus />} />
              <Route path="/abonnement" element={<Abonnement />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
