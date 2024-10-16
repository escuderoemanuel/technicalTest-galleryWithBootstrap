import BannerPhotographer from './BannerPhotographer/BannerPhotographer'
import ButtonsPhotographer from './ButtonsPhotographer/ButtonsPhotographer'
import InfoPhotographer from './InfoPhotographer/InfoPhotographer'
import './CardAlbumPhotographer.css'

export default function CardAlbumPhotographer({ images }) {
  return (
    <div className='card-album-photographer-container mb-4'>
      <BannerPhotographer />
      <InfoPhotographer />
      <ButtonsPhotographer images={images} />
    </div>
  )
}