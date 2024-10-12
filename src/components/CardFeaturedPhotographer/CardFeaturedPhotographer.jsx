/* eslint-disable react/prop-types */
import './CardFeaturedPhotographer.css';

export default function CardFeaturedPhotographer({ imageUrl, name, location, type }) {
  return (
    <div className='card d-flex justify-content-between align-items-center text-center p-4'>

      <img src={imageUrl} className='card-img m-0 mb-2' alt={`Imagen de perfil de ${name}`} />

      <div className='card-info m-0 d-flex flex-column justify-content-between align-items-center text-center'>
        <h3 className='m-0'>{name}</h3>
        <div className='card-info-location d-flex justify-content-between align-items-center text-center m-0 gap-2'>
          <i className="bi bi-pin-map m-0"></i>
          <p className='m-0'>{location}</p>
        </div>
        <div className='card-info-type d-flex justify-content-between align-items-center  m-0 gap-2'>
          <i className="bi bi-stars m-0"></i>
          <p className='m-0'>{type}</p>
        </div>
        <div className='card-info-stars d-flex align-items-center m-0 mb-3 mt-2 gap-2'>
          <i className="m-0 bi bi-star-fill"></i>
          <i className="m-0 bi bi-star-fill"></i>
          <i className="m-0 bi bi-star-fill"></i>
          <i className="m-0 bi bi-star-half"></i>
          <i className="m-0 bi bi-star"></i>
        </div>
        <button className='d-flex justify-content-center align-items-center gap-2'>
          <i className='bi bi-eye m-0' />
          <p className='m-0'>Contactar</p>
        </button>
      </div>

    </div>
  )
}
