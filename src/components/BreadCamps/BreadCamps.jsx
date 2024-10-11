import './BreadCamps.css'

export default function BreadCamps() {
  return (
    <div className='bread-camps-container d-flex justify-content-start align-items-center gap-1 px-3 my-3'>
      <i className="breadcamps-icon-files m-0 bi bi-files d-flex" />
      <p className='breadcamps-albums m-0 d-flex'>Álbumes</p>
      <i className="breadcamps-icon-arrow m-0 bi bi-chevron-right text-bold d-flex" />
      <p className='breadcamps-date m-0 d-flex'>15/06/2024</p>
    </div>
  )
}
