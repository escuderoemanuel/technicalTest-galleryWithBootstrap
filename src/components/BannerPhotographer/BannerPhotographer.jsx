import './BannerPhotographer.css'

export default function BannerPhotographer() {
  return (
    <div className='banner-photographer-container mb-4 p-0'>
      <img className='mobile-banner img-fluid' src="./banner-mobile.png" alt="Banner de la sección información sobre el fotógrafo" />
      <img className='desktop-banner img-fluid' src="./banner-desktop.png" alt="Banner de la sección información sobre el fotógrafo" />
    </div>
  )
}
