import React from 'react';
import { useCart } from '../contexts/CartContext';
import { IoMdClose } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';

interface PannierProps {
  isOpen: boolean;
  onClose: () => void;
}

const Pannier: React.FC<PannierProps> = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartEmpty,
    getSubTotal,
    getTVA,
    getTotal
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-full max-w-md bg-[#1A1A1A] h-full overflow-y-auto">
        {/* En-tête du panier */}
        <div className="sticky top-0 bg-[#1A1A1A] border-b border-[#FF4B12]/20 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#FF4B12]">Votre Panier</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#FF4B12]/10 rounded-full transition-colors"
          >
            <IoMdClose size={24} className="text-[#FF4B12]" />
          </button>
        </div>

        {/* Contenu du panier */}
        <div className="p-4">
          {isCartEmpty() ? (
            <div className="text-center py-8">
              <p className="text-gray-400">Votre panier est vide</p>
            </div>
          ) : (
            <>
              {/* Liste des articles */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-black/30 rounded-lg p-4 flex gap-4"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.nom}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Informations */}
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h3 className="text-[#FF4B12] font-semibold">{item.nom}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-[#FF4B12] transition-colors"
                        >
                          <FaTrash size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-gray-400">{item.prix}€ / unité</p>
                      
                      {/* Contrôles de quantité */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 bg-[#FF4B12]/20 text-[#FF4B12] rounded hover:bg-[#FF4B12]/30"
                        >
                          -
                        </button>
                        <span className="text-white px-4">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-[#FF4B12]/20 text-[#FF4B12] rounded hover:bg-[#FF4B12]/30"
                        >
                          +
                        </button>
                        <span className="ml-auto text-[#FF4B12] font-semibold">
                          {(item.prix * item.quantity).toFixed(2)}€
                        </span>
                      </div>

                      {/* Stock disponible */}
                      <p className="text-sm text-gray-400 mt-1">
                        Stock disponible : {item.stock}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Résumé */}
              <div className="mt-8 space-y-2 border-t border-[#FF4B12]/20 pt-4">
                <div className="flex justify-between text-gray-400">
                  <span>Sous-total</span>
                  <span>{getSubTotal().toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>TVA (20%)</span>
                  <span>{getTVA().toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-[#FF4B12] font-bold text-lg pt-2 border-t border-[#FF4B12]/20">
                  <span>Total</span>
                  <span>{getTotal().toFixed(2)}€</span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 space-y-4">
                <button
                  onClick={() => {
                    // Ici, on pourrait ajouter la logique de validation de commande
                    alert('Commande validée ! (simulation)');
                    clearCart();
                    onClose();
                  }}
                  className="w-full py-3 bg-[#FF4B12] text-white rounded-lg hover:bg-[#FF6B32] transition-colors"
                >
                  Valider la commande
                </button>
                <button
                  onClick={clearCart}
                  className="w-full py-3 bg-[#FF4B12]/20 text-[#FF4B12] rounded-lg hover:bg-[#FF4B12]/30 transition-colors"
                >
                  Vider le panier
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pannier;