import BannerPhotographer from '../BannerPhotographer/BannerPhotographer'
import ButtonsPhotographer from '../ButtonsPhotographer/ButtonsPhotographer'
import InfoPhotographer from '../InfoPhotographer/InfoPhotographer'
import './CardAlbumPhotographer.css'

export default function CardAlbumPhotographer() {
  return (
    <div className='card-album-photographer-container'>
      <BannerPhotographer />
      <InfoPhotographer />
      <ButtonsPhotographer />
    </div>
  )
}
