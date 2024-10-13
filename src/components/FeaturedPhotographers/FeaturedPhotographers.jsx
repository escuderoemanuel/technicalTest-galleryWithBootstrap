import CardsFeaturedPhotographer from '../CardFeaturedPhotographer/CardFeaturedPhotographer'
import './FeaturedPhotographers.css'

export default function FeaturedPhotographers() {
  return (
    <div className='featured-photographers-container d-flex flex-column align-items-start text-start'>

      <h2 className='m-0 mb-4 ms-4'>Fotógrafos destacados</h2>

      {/* Contenedor deslizable de las Cards */}
      <div className='cards-container d-flex justify-content-between align-items-center gap-2 overflow-x-auto p-2'>
        <CardsFeaturedPhotographer
          imageUrl={'./avatars/avatar1.png'}
          name={'Paula Pérez'}
          location={'Buenos Aires, CABA'}
          type={'Tienda de mascotas'}
        />
        <CardsFeaturedPhotographer
          imageUrl={'./avatars/avatar2.png'}
          name={'Pedro Fuentes'}
          location={'Buenos Aires, CABA'}
          type={'Eventos'}
        />
        <CardsFeaturedPhotographer
          imageUrl={'./avatars/avatar3.png'}
          name={'Patricio Funes'}
          location={'Buenos Aires, CABA'}
          type={'Fundación rescate'}
        />
        <CardsFeaturedPhotographer
          imageUrl={'./avatars/avatar4.png'}
          name={'Macarena Ramirez'}
          location={'La Plata, GBA'}
          type={'Bicho feliz fundación'}
        />
      </div>
    </div>
  )
}
