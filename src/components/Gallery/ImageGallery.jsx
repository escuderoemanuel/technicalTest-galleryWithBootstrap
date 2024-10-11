/* eslint-disable react/prop-types */
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ImageGallery.css';
import Selector from '../Selector/Selector.jsx';
import { useState } from 'react';

export default function ImageGallery({ images }) {
  const [columns, setColumns] = useState(4); // Estado global para las columnas

  return (<>
    <Selector columns={columns} onColumnsChange={setColumns} />
    <div className={`row row-cols-${columns} g-4 mb-4`}>
      {images.map((image, index) => (
        <div key={index} className="col ">
          <img src={image} alt={`Imagen ${index + 1}`} className="image img-thumbnail" />
        </div>
      ))}
    </div>
  </>
  );
}