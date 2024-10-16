import { createContext, useContext, useState } from 'react';

// Create CartContext
const CartContext = createContext();
// Create, use and export CartContext
export const useCartContext = () => {
  return useContext(CartContext);
}

// Create and export Cart Provider
export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [purchasedImages, setPurchasedImages] = useState([]);

  //! purchasedImages
  // Add purchased image (store the entire object)
  const addPurchasedImages = (image) => {
    setPurchasedImages((prevPurchasedImages) => {
      // Verify by id, if the image is already purchased
      if (!prevPurchasedImages.some((purchasedImage) => purchasedImage.id === image.id)) {
        return [...prevPurchasedImages, image];
      }
      return prevPurchasedImages;
    });
  };

  // Check by id, if an image is in purchasedImages array
  const isInPurchasedImages = (id) => {
    return purchasedImages.some((image) => image.id === id);
  };

  //! Cart
  // Count total items in cart
  const getTotalItemsInCart = () => {
    return cart.reduce((acc, item) => acc + item.q, 0);
  }

  // Check if that image exists in the cart
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  }

  // Empty Cart
  const emptyCart = () => {
    setCart([]);
  }

  // Delete item
  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  // Add item
  const addItem = (item) => {
    // If the image exist in the cart, does not increase its quantity neither add it again
    if (isInCart(item.id)) {
      return;
    } else {
      const itemCart = { ...item, q: 1 };
      setCart([...cart, itemCart]);
    }
  }

  // Add all items
  const addAllItems = (items) => {
    const updatedCart = [...cart];

    items.forEach(item => {
      const existingItem = updatedCart.find(cartItem => cartItem.id === item.id);
      const isPurchased = purchasedImages.some(purchasedItem => purchasedItem.id === item.id);

      if (!existingItem && !isPurchased) {
        updatedCart.push({ ...item, q: 1 });
      }
    });
    setCart(updatedCart);
  }

  // Return CartProvider with necessary methods
  return (
    <CartContext.Provider
      value={{
        cart, addItem, removeItem, emptyCart, getTotalItemsInCart, isInCart, addAllItems,
        purchasedImages, addPurchasedImages, isInPurchasedImages
      }}>
      {props.children}
    </CartContext.Provider>
  );
}
