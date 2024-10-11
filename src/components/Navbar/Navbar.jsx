import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar-container bg-white d-flex justify-content-between align-items-center p-1'>
      <div className='navbar-brand-container d-flex justify-content-center align-items-center text-center m-0 p-0'>
        <div className="navbar-brand d-flex justify-content-center align-items-center text-center m-0 p-0" href="#">LOGO</div>
      </div>
      <div className='d-flex justify-content-between align-items-center m-0'>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Quiénes somos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Ayuda</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Mis compras</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        <div className="nav-item dropdown d-flex justify-content-between align-items-center">
          <a className="nav-link mx-2 d-flex justify-content-between align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='badge-name me-2 d-flex justify-content-center align-items-center'>DS</span>
            <p className='my-0 me-3'>Delfina</p>
            <i className="navbar-icon-arrow bi bi-chevron-down"></i>
          </a>
        </div>
        <i className='navbar-icon-cart bi bi-cart2 ms-3'>
          <span className='badge bg-danger text-white'>1</span>
        </i>
      </div>
    </div>
  )
}
