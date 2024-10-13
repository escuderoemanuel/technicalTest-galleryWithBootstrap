import './InfoPhotographer.css'

export default function InfoPhotographer() {
  return (
    <div className='info-photographer-container d-flex flex-column justify-content-center align-items-center mb-4'>
      <h1 className='info-title mb-4'>Expo mascotas 2024</h1>
      <div className='d-flex flex-column justify-content-center align-items-center text-center'>

        {/* Name */}
        <div className='d-flex gap-2 mt-2'>
          <i className='icon-camera bi bi-camera m-0'></i>
          <p className='info-name m-0'>Juan Bianchi</p>
        </div>
        {/* Location */}
        <div className='info-location d-flex gap-2'>
          <i className="bi bi-pin-map"></i>
          <p className='m-0'>Centro de convenciones, Bariloche</p>
        </div>
        {/* Date & Photos Count */}
        <div className='d-flex gap-4'>
          <div className='info-photo-date d-flex gap-2'>
            <i className="bi bi-files"></i>
            <p className='m-0'>12 fotos</p>
          </div>
          <p className='info-date m-0 ms-4'>Exp. 15/06/2024</p>
        </div>
      </div>
    </div >
  )
}
