import './ButtonsPhotographer.css'

export default function ButtonsPhotographer() {
  return (
    <div className='buttons-photographer-container d-flex justify-content-center align-items-center '>
      {/* Qualify */}
      <button className='btn-star d-flex m-0 me-4 gap-2'>
        <i className='bi bi-star'></i>
        <p className='m-0'>Calificar</p>
      </button>
      {/* Add All to Cart */}
      <button className='btn-cart d-flex m-0 ms-4 gap-2'>
        <i className='bi bi-cart2'></i>
        <p className='m-0'>Agregar todo</p>
      </button>
    </div>
  )
}
