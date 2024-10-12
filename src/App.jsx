// 'use client'
// import { useState } from 'react';
import { useEffect, useState } from 'react'
import './App.css'
import BreadCamps from './components/BreadCamps/BreadCamps.jsx'
import CardAlbumPhotographer from './components/CardAlbumPhotographer/CardAlbumPhotographer.jsx'
import FeaturedPhotographers from './components/FeaturedPhotographers/FeaturedPhotographers.jsx'
import Footer from './components/Footer/Footer.jsx'
import ImageGallery from './components/Gallery/ImageGallery.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
// import Selector from './components/Selector/Selector.jsx';

const imageLinks = [
  './images/sunira-moses-r149yvhlJ4Q-unsplash.jpg',
  './images/erik-jan-leusink---SDX4KWIbA-unsplash.jpg',
  './images/jonathan-fink-Sa1z1pEzjPI-unsplash.jpg',
  './images/alex-konokh-6MKJbkZ0qNY-unsplash.jpg',
  './images/amjith-s-VJGBwaB57Fg-unsplash.jpg',
  './images/borna-bevanda-VwqecUsYKvs-unsplash.jpg',
  './images/hanny-naibaho--Go4DH2pZbc-unsplash.jpg',
  './images/diana-macesanu-FoY0-gwa9N4-unsplash.jpg',
  './images/karlijn-prot-3fjyk4CLfvA-unsplash.jpg',
  './images/sandy-millar-kKAaCeGf5wY-unsplash.jpg',
  './images/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg',
  './images/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg',
]


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Escuchar evento de redimensionamiento
    window.addEventListener('resize', handleResize);

    return () => {
      // Eliminar el listener al desmontar el componente
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div className='main-container'>
      <Navbar isMobile={isMobile} />
      <div className='p-4 justify-content-center align-items-center col'>
        <BreadCamps />
        <CardAlbumPhotographer />
        <ImageGallery images={imageLinks} isMobile={isMobile} />
        <FeaturedPhotographers />
      </div>
      <Footer />
    </div>
  )
}

export default App
