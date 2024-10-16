import './App.css'
import BreadCamps from './components/BreadCamps/BreadCamps.jsx'
import CardAlbumPhotographer from './components/CardAlbumPhotographer/CardAlbumPhotographer.jsx'
import FeaturedPhotographers from './components/FeaturedPhotographers/FeaturedPhotographers.jsx'
import Footer from './components/Footer/Footer.jsx'
import ImageGallery from './components/Gallery/ImageGallery.jsx'
import Header from './components/Header/Header.jsx'
import { CartProvider } from './context/CartContext.jsx'
import images from './utils/images'

function App() {

  return (
    <CartProvider>
      <div className='main-container'>
        <Header />
        <div className='p-2 justify-content-center align-items-center col'>
          <BreadCamps />
          <CardAlbumPhotographer images={images} />
          <ImageGallery images={images} />
          <FeaturedPhotographers />
        </div>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
