import './Footer.css'

export default function Footer() {
  return (
    <div className='footer p-4'>
      <div className='footer-container d-flex justify-content-between'>
        <div className='footer-logo col-3 align-self-start text-start'>
          <p className=''>LOGO</p>
        </div>
        <div className='footer-navbar col-2  text-start'>
          <p className='m-0'>Inicio</p>
          <p className='m-0'>Quiénes somos</p>
          <p className='m-0'>Mi perfil</p>
          <p className='m-0'>Mis compras</p>
          <p className='m-0'>Ayuda</p>
        </div>
        <div className='footer-rights col-7 d-flex align-self-end text-end justify-content-end align-items-end gap-4'>
          <div className='footer-rights-text d-flex m-0'>
            <p className='m-0'>Protegido por
              <span> reCAPTCHA Privacidad Condiciones</span>
            </p>
          </div>
          <div className='footer-social d-flex gap-4 m-0'>
            <i className='bi bi-instagram d-flex'></i>
            <i className='bi bi-facebook d-flex'></i>
          </div>
        </div>
      </div>
    </div>
  )
}
