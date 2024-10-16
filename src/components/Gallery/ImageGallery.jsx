import 'bootstrap-icons/font/bootstrap-icons.css';
import './ImageGallery.css';
import { useState, useEffect } from 'react';
import { useCartContext } from '../../context/CartContext.jsx';
import Selector from './Selector/Selector.jsx';


export default function ImageGallery({ images }) {
  const [columns, setColumns] = useState(4); // Column Quantity Initial State

  const {
    isInCart,
    removeItem,
    addItem,
    getTotalItemsInCart,
    addPurchasedImages,
    isInPurchasedImages,
  } = useCartContext();

  // Initialize images with id:3 and id:10 in purchasedImages when component is mount (Like FIGMA) 
  useEffect(() => {
    const image3 = images.find(image => image.id === 3);
    const image10 = images.find(image => image.id === 10);

    if (image3) addPurchasedImages(image3);
    if (image10) addPurchasedImages(image10);
  }, []);

  const handleAddToCart = (image) => {
    if (isInCart(image.id)) {
      removeItem(image.id);
      getTotalItemsInCart();
    } else {
      addItem(image);
      getTotalItemsInCart();
    }
  };

  return (
    <div className="image-gallery-container d-flex flex-column mb-4">
      <Selector columns={columns} onColumnsChange={setColumns} />

      <div className={`row row-cols-${columns} g-2 m-0 mb-4`}>
        {images.map((image) => (
          <div key={image.id} className="d-flex">
            <div className="image-container">
              <img src={image.url} alt={`Imagen ${image.id}`} className="image img-fluid rounded" />

              {!isInPurchasedImages(image.id) && (
                <>
                  <i
                    className="bi bi-cart2 cart-icon"
                    onClick={() => handleAddToCart(image)}
                  ></i>
                  <img
                    className="water-mark"
                    src="/waterMark.png"
                    alt="Marca de agua con la palabra LOGO"
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
