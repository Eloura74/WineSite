import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Boutique from './pages/Boutique';
import Abonnement from './pages/Abonnement';
import Menus from './pages/Menus';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';
import About from './pages/About';
import logoImage from './assets/logo.png';
import { FontProvider } from './context/FontContext'; // Si vous l'utilisez
import './App.css';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#404041] to-[#533b34]">
        {/* Header */}
        <header className="bg-[#404041] shadow-lg sticky top-0 z-50">
          <div className="mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo et titre */}
            <div className="flex items-center flex-wrap space-x-4">
              <img src={logoImage} alt="Logo" className="h-12 pl-20 w-auto" />
              <span className="text-[#FF4B12] text-4xl font-bold font-lobster tracking-wide pl-30">
                L'Apérotec
              </span>
            </div>

            {/* Menu desktop */}
            <nav className="hidden md:flex space-x-6 pr-10">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link text-lg ${isActive ? 'active-nav-link' : 'text-white hover:text-[#FF4B12]'}`
                }
              >
                Accueil
              </NavLink>
              <NavLink
                to="/boutique"
                className={({ isActive }) =>
                  `nav-link text-lg ${isActive ? 'active-nav-link' : 'text-white hover:text-[#FF4B12]'}`
                }
              >
                Boutique
              </NavLink>
              <NavLink
                to="/abonnement"
                className={({ isActive }) =>
                  `nav-link text-lg ${isActive ? 'active-nav-link' : 'text-white hover:text-[#FF4B12]'}`
                }
              >
                Abonnement
              </NavLink>
              <NavLink
                to="/menus"
                className={({ isActive }) =>
                  `nav-link text-lg ${isActive ? 'active-nav-link' : 'text-white hover:text-[#FF4B12]'}`
                }
              >
                Menus
              </NavLink>
              <NavLink
                to="/actualites"
                className={({ isActive }) =>
                  `nav-link text-lg ${isActive ? 'active-nav-link' : 'text-white hover:text-[#FF4B12]'}`
                }
              >
                Actualités
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link text-lg ${isActive ? 'active-nav-link' : 'text-white hover:text-[#FF4B12]'}`
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link text-lg ${isActive ? 'active-nav-link' : 'text-white hover:text-[#FF4B12]'}`
                }
              >
                Qui sommes-nous ?
              </NavLink>
            </nav>

            {/* Menu mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#FF4B12] focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Menu mobile déroulant */}
          {isOpen && (
            <div className="md:hidden bg-black">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-[#FF4B12]' : 'text-white hover:text-[#FF4B12]'
                    }`
                  }
                >
                  Accueil
                </NavLink>
                <NavLink
                  to="/boutique"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-[#FF4B12]' : 'text-white hover:text-[#FF4B12]'
                    }`
                  }
                >
                  Boutique
                </NavLink>
                <NavLink
                  to="/abonnement"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-[#FF4B12]' : 'text-white hover:text-[#FF4B12]'
                    }`
                  }
                >
                  Abonnement
                </NavLink>
                <NavLink
                  to="/menus"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-[#FF4B12]' : 'text-white hover:text-[#FF4B12]'
                    }`
                  }
                >
                  Menus
                </NavLink>
                <NavLink
                  to="/actualites"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-[#FF4B12]' : 'text-white hover:text-[#FF4B12]'
                    }`
                  }
                >
                  Actualités
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-[#FF4B12]' : 'text-white hover:text-[#FF4B12]'
                    }`
                  }
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-[#FF4B12]' : 'text-white hover:text-[#FF4B12]'
                    }`
                  }
                >
                  Qui sommes-nous ?
                </NavLink>
              </div>
            </div>
          )}
        </header>

        {/* Contenu principal */}
        <main className="flex-grow bg-gradient-to-r from-gray-600 to-yellow-800 shadow-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/abonnement" element={<Abonnement />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-[#404041] to-[#533b34] border-t-2 border-[#FF4B12]/20 shadow-lg py-6">
          <div className="container mx-auto text-center">
            &copy; {new Date().getFullYear()} L'Apérotec. Tous droits réservés.
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
