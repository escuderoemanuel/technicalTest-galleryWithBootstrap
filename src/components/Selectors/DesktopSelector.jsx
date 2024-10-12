/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import './DesktopSelector.css';

export default function DesktopSelector({ columns, onColumnsChange }) {

  // Función para actualizar las columnas según el ancho de la ventana
  const updateColumnsBasedOnWidth = () => {
    const widthWindow = window.innerWidth;
    let newColumns;

    if (widthWindow <= 768) {
      newColumns = 1;
    } else if (widthWindow > 768 && widthWindow <= 1200) {
      newColumns = 3;
    } else {
      newColumns = 4;
    }

    onColumnsChange(newColumns); // Actualizar directamente en ImageGallery
  };

  useEffect(() => {
    // Llamar la función inicialmente para establecer las columnas
    updateColumnsBasedOnWidth();

    // Agregar event listener al cambiar el tamaño de la ventana
    window.addEventListener('resize', updateColumnsBasedOnWidth);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', updateColumnsBasedOnWidth);
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    const invertedValue = 5 - value; // Invertimos el valor
    onColumnsChange(invertedValue); // Actualiza directamente en ImageGallery
  };

  return <>
    <div className="selector-container bg-white rounded-4 mb-3 d-flex justify-content-between align-item-center px-4 m-0" >

      {/* Contenedor de la izquierda */}
      <div className="d-flex align-items-center m-0">
        <p className='p-0 m-0'>Seleccionados
          <span className='selected-quantity ms-2'>1</span>
        </p>
      </div >

      {/* Contenedor de la derecha */}
      <div className="d-flex align-items-center bg-white m-0">
        <label htmlFor="range1" className="form-label m-0 me-4">Ver como</label>

        <div className=''>
          {/* Contenedor del selector (Barra-Marcador Móvil-Marcadores Estáticos-Squares)*/}
          <div className="range-container " >
            {/* Barra de selección y Marcador Móvil */}
            <input
              className="form-range"
              type="range"
              name="range"
              id="range1"
              step={1}
              min={1}
              max={4} //! O 3 si es mobile
              value={5 - columns} // Mostrar el valor invertido en el rango
              onChange={handleRangeChange}
            />
            {/* Marcadores sobre la barra */}
            <div className='mark-point-content d-flex justify-content-between'>
              <span className='mark-point m-0'></span>
              <span className='mark-point m-0'></span>
              <span className='mark-point m-0'></span>
              <span className='mark-point m-0'></span>
            </div>


            {/* Contenedor de los svg debajo de la barra */}
            <div className='square-point-content d-flex justify-content-between' style={{
              position: 'relative',
              top: '-10px',
            }}>
              <span
                className="square-point m-0"
                style={{
                  backgroundImage: `url('/selector/square4x2.svg')`,
                  width: '19px',
                  height: '9px',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  left: '-5px',
                  fill: '#A5AEBD',
                }}
              ></span>
              <span
                className="square-point  m-0"
                style={{
                  backgroundImage: `url('/selector/square3x2.svg')`,
                  width: '19px',
                  height: '9px',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  left: '2px',
                  fill: '#A5AEBD',
                }}
              ></span>
              <span
                className="square-point m-0"
                style={{
                  backgroundImage: `url('/selector/square2x2.svg')`,
                  width: '19px',
                  height: '9px',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  left: '6px',
                  fill: '#A5AEBD',
                }}
              ></span>
              <span
                className="square-point m-0"
                style={{
                  backgroundImage: `url('/selector/square1x2.svg')`,
                  width: '19px',
                  height: '9px',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  left: '12px',
                  fill: '#A5AEBD',
                }}
              ></span>
            </div>
          </div>
        </div>
      </div >
    </div >

  </>
}
