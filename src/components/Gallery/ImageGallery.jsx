/* eslint-disable react/prop-types */
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ImageGallery.css';
import { useState } from 'react';
import Selector from '../Selectors/Selector.jsx';

export default function ImageGallery({ images }) {
  const [columns, setColumns] = useState(4); // Estado inicial para las columnas

  const isAcquired = (index) => {
    //! Lógica para verificar si la imagen está adquirida y así quitar la marca de agua
    // Ejemplo según Figma
    if (index === 2 || index === 9)
      return true
  };

  return (
    <div className='image-gallery-container d-flex flex-column mb-4'>

      <Selector columns={columns} onColumnsChange={setColumns} />

      <div className={`row row-cols-${columns} g-2 m-0 mb-4`}>
        {images.map((image, index) => (
          <div key={index} className="d-flex">
            <div className='image-container'>
              <img src={image} alt={`Imagen ${index + 1}`} className="image img-fluid  rounded" />
              {
                !isAcquired(index) &&
                <>
                  <i className="bi bi-cart2 cart-icon"></i>
                  <img className='water-mark' src="/waterMark.png" alt="Marca de agua con la palabra LOGO" />
                </>
              }
            </div>
          </div>

        ))}
      </div >
    </div>
  );
}