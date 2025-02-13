import React, { createContext, useContext, ReactNode } from 'react';
import { useCart as useCartHook } from '../hooks/useCart';
import { Article } from '../componants/Articles';

// Type pour le contexte
interface CartContextType {
  cartItems: (Article & { quantity: number })[];
  addToCart: (article: Article) => void;
  removeFromCart: (articleId: number) => void;
  updateQuantity: (articleId: number, newQuantity: number) => void;
  clearCart: () => void;
  isCartEmpty: () => boolean;
  getItemCount: () => number;
  getSubTotal: () => number;
  getTVA: () => number;
  getTotal: () => number;
}

// Création du contexte
const CartContext = createContext<CartContextType | undefined>(undefined);

// Props pour le provider
interface CartProviderProps {
  children: ReactNode;
}

// Provider du panier
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const cart = useCartHook();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte du panier
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart doit être utilisé à l'intérieur d'un CartProvider");
  }
  return context;
};
