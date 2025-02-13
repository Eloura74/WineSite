import { useState, useEffect } from 'react';
import { Article } from '../componants/Articles';

interface CartItem extends Article {
  quantity: number;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sauvegarder le panier dans le localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculer le sous-total (sans TVA)
  const getSubTotal = () => {
    return cartItems.reduce((total, item) => total + item.prix * item.quantity, 0);
  };

  // Calculer la TVA (20%)
  const getTVA = () => {
    return getSubTotal() * 0.20;
  };

  // Calculer le total (avec TVA)
  const getTotal = () => {
    return getSubTotal() + getTVA();
  };

  // Ajouter un article au panier
  const addToCart = (article: Article) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === article.id);
      if (existingItem) {
        // Vérifier le stock disponible
        if (existingItem.quantity >= article.stock) {
          alert('Stock insuffisant !');
          return prevItems;
        }
        return prevItems.map(item =>
          item.id === article.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...article, quantity: 1 }];
    });
  };

  // Retirer un article du panier
  const removeFromCart = (articleId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== articleId));
  };

  // Mettre à jour la quantité d'un article
  const updateQuantity = (articleId: number, newQuantity: number) => {
    setCartItems(prevItems => {
      const article = prevItems.find(item => item.id === articleId);
      if (!article) return prevItems;

      // Vérifier le stock disponible
      if (newQuantity > article.stock) {
        alert('Stock insuffisant !');
        return prevItems;
      }

      if (newQuantity <= 0) {
        return prevItems.filter(item => item.id !== articleId);
      }

      return prevItems.map(item =>
        item.id === articleId
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };

  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  // Vérifier si le panier est vide
  const isCartEmpty = () => {
    return cartItems.length === 0;
  };

  // Obtenir le nombre total d'articles dans le panier
  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartEmpty,
    getItemCount,
    getSubTotal,
    getTVA,
    getTotal
  };
};
