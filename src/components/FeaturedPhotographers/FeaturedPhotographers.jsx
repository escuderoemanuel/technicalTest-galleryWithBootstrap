import CardsFeaturedPhotographer from './CardFeaturedPhotographer/CardFeaturedPhotographer'
import './FeaturedPhotographers.css'

// Importa las imágenes directamente
import avatar1 from '../../assets/avatars/avatar1.png';
import avatar2 from '../../assets/avatars/avatar2.png';
import avatar3 from '../../assets/avatars/avatar3.png';
import avatar4 from '../../assets/avatars/avatar4.png';

export default function FeaturedPhotographers() {
  return (
    <div className='featured-photographers-container d-flex flex-column align-items-start text-start'>

      <h2 className='m-0 mb-4 ms-4'>Fotógrafos destacados</h2>

      {/* Contenedor deslizable de las Cards */}
      <div className='cards-container d-flex justify-content-between align-items-center gap-2 overflow-x-auto p-2'>
        <CardsFeaturedPhotographer
          imageUrl={avatar1}
          name={'Paula Pérez'}
          location={'Buenos Aires, CABA'}
          type={'Tienda de mascotas'}
        />
        <CardsFeaturedPhotographer
          imageUrl={avatar2}
          name={'Pedro Fuentes'}
          location={'Buenos Aires, CABA'}
          type={'Eventos'}
        />
        <CardsFeaturedPhotographer
          imageUrl={avatar3}
          name={'Patricio Funes'}
          location={'Buenos Aires, CABA'}
          type={'Fundación rescate'}
        />
        <CardsFeaturedPhotographer
          imageUrl={avatar4}
          name={'Macarena Ramirez'}
          location={'La Plata, GBA'}
          type={'Bicho feliz fundación'}
        />
      </div>
    </div>
  )
}
