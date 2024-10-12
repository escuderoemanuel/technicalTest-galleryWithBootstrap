// 'use client'
// import { useState } from 'react';
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


  return (
    <div className='main-container m-0 p-0 justify-content-center align-items-center col'>
      <Navbar />
      <BreadCamps />
      <CardAlbumPhotographer />
      {/* selector */}
      <ImageGallery images={imageLinks} />
      {/* fotografos destacados */}
      <FeaturedPhotographers />
      {/* footer */}
      <Footer />
    </div>
  )
}

export default App
