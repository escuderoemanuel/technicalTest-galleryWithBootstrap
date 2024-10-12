/* eslint-disable react/prop-types */
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ImageGallery.css';
import Selector from '../Selector/Selector.jsx';
import { useState } from 'react';

export default function ImageGallery({ images }) {
  const [columns, setColumns] = useState(4); // Estado global para las columnas

  const isAcquired = (index) => {
    // Lógica para verificar si la imagen está adquirida
    return index % 2 === 0; // Ejemplo: Adquiridas las imágenes pares
  };

  return (
    <div className='image-gallery-container d-flex flex-column mb-4'>
      <Selector columns={columns} onColumnsChange={setColumns} />
      <div className={`row row-cols-${columns} g-4 mb-4`}>
        {images.map((image, index) => (
          <div key={index} className="d-flex image-container position-relative">
            <img src={image} alt={`Imagen ${index + 1}`} className="image img-fluid  rounded" />
            {isAcquired(index) && <span>
              <i className="bi bi-cart2 cart-icon"></i>
              <img className='water-mark' src="/waterMark.png" alt="Marca de agua con la palabra LOGO" />
            </span>}
          </div>

        ))}
      </div >
    </div>
  );
}