import './Header.css';
import CartModal from './CartModal/CartModal.jsx';
import { useCartContext } from '../../context/CartContext.jsx';

export default function Header() {
  const { getTotalItemsInCart } = useCartContext();
  const cartQuantity = getTotalItemsInCart();

  return (
    <div className='header px-2'>
      {/* Navbar Container */}
      <div className='navbar-container d-flex justify-content-between align-items-center '>
        {/* Left Container (Logo) */}
        <div className='navbar-brand-container d-flex justify-content-center align-items-center text-center m-0 p-0'>
          <div className="navbar-brand d-flex justify-content-center align-items-center text-center m-0 p-0">LOGO</div>
        </div>

        {/* Right Container */}
        <div className={'d-flex justify-content-between align-items-center m-0'}>
          {/* Links */}
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              {/* Toggle Button NavBar */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Navbar */}
              <div className={`collapse navbar-collapse `} id="navbarNavDropdown">
                <ul className="navbar-nav gap-4">
                  <li className="nav-item">
                    <a className="link nav-link" aria-current="page" href="#">Inicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="link nav-link" href="#">Quiénes somos</a>
                  </li>
                  <li className="nav-item">
                    <a className="link nav-link" href="#">Ayuda</a>
                  </li>
                  <li className="nav-item">
                    <a className="link nav-link" href="#">Mis compras</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* User */}
          <div className="link nav-item dropdown d-flex justify-content-between align-items-center">
            <a className="nav-link mx-2 d-flex justify-content-between align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span className='badge-name me-2 d-flex justify-content-center align-items-center'>DS</span>
              <p className='my-0 me-3 d-none d-md-block'>Delfina</p>
              <i className="navbar-icon-arrow bi bi-chevron-down d-none d-md-block"></i>
            </a>
          </div>

          {/* Cart */}
          <i className='link navbar-icon-cart bi bi-cart2 ms-3' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            {cartQuantity > 0 && <span className='badge-cart'>{cartQuantity}</span>}
          </i>
        </div>
      </div>
      <CartModal />
    </div>
  );
}
