import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      {/* Mobile */}
      <div className='m-footer text-start px-2 py-3 d-sm-block d-md-none'>
        <div className='text-1 d-flex flex-wrap text-start'>
          <p className='m-0 me-2'>Cómo cuidamos tu privacidad</p>
          <span className='m-0 me-2'>Copyright
            <i className='bi bi-c-circle mx-1'></i>
          </span>
          <span className='m-0'>1999-2024 Photeala S.R.L.</span>
        </div>
        <div className='text-3 d-flex text-start gap-2 mt-2'>
          <p className='m-0'>Protegido por </p>
          <span className='m-0'>reCAPTCHA Privacidad Condiciones</span>
        </div>
      </div>

      {/* Desktop */}
      <div className='footer-container p-4 d-none d-md-block'>
        <div className='footer-content d-flex justify-content-between'>
          {/* Logo */}
          <div className='footer-logo col-3 align-self-start text-start'>
            <p className=''>LOGO</p>
          </div>
          {/* Navbar */}
          <div className='footer-navbar col-2  text-start'>
            <p className='m-0'>Inicio</p>
            <p className='m-0'>Quiénes somos</p>
            <p className='m-0'>Mi perfil</p>
            <p className='m-0'>Mis compras</p>
            <p className='m-0'>Ayuda</p>
          </div>
          {/* Rights & Social Media */}
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
    </div>
  )
}
