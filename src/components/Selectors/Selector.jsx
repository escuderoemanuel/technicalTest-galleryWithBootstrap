/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import './Selector.css';
import useWindowWidth from '../../hooks/useWindowWidth.js';

export default function Selector({ columns, onColumnsChange }) {
  const isMobile = useWindowWidth();
  const selectedQuantity = 0; // Lógica para la cantidadd de fotoss seleccionada

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
    // Actualizar directamente en ImageGallery
    onColumnsChange(newColumns);
  };

  useEffect(() => {
    // Llamar la función de entrada para establecer la cantidad de columnas
    updateColumnsBasedOnWidth();

    // Escuchar el evento al cambiar el tamaño de la ventana
    window.addEventListener('resize', updateColumnsBasedOnWidth);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', updateColumnsBasedOnWidth);
    };
    // Se ejecuta solo una vez al montar el componente []
  }, []);

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    // Invierte el valor dependiendo del dispositivo
    const invertedValue = isMobile ? 4 - value : 5 - value;
    // Actualiza directamente en ImageGallery
    onColumnsChange(invertedValue);
  };

  return <>
    {
      isMobile ?

        //! MOBILE
        < div className="m-selector-container bg-white rounded-4 mb-3 d-flex justify-content-between px-2 m-0" >
          {/* Contenedor de la izquierda */}
          <div className="d-flex align-items-center m-0">
            <p className='p-0 m-0'>Seleccionados
              <span className='m-selected-quantity m-0 ms-2'>{selectedQuantity}</span>
            </p>
          </div >
          {/* Contenedor de la derecha */}
          <div className="d-flex align-items-center bg-white m-0">
            <div className=''>
              {/* Contenedor del selector (Barra-Marcador Móvil-Marcadores Estáticos-Squares)*/}
              <div className="m-range-container " >
                {/* Barra de selección y Marcador Móvil */}
                <input
                  className="m-form-range form-range"
                  type="range"
                  name="range"
                  id="range1"
                  step={1}
                  min={1}
                  max={3}
                  value={4 - columns} // Mostrar el valor invertido en el rango
                  onChange={handleRangeChange}
                />
                {/* Marcadores sobre la barra */}
                <div className='m-mark-point-content d-flex justify-content-between'>
                  <span className='m-mark-point m-0'></span>
                  <span className='m-mark-point m-0'></span>
                  <span className='m-mark-point m-0'></span>
                </div>


                {/* Contenedor de los svg debajo de la barra */}
                <div className='m-square-point-content d-flex justify-content-between' style={{
                  position: 'relative',
                  top: '-10px',
                }}>

                  <span
                    className="m-square-point  m-0"
                    style={{
                      backgroundImage: `url('/selector/square3x2.svg')`,
                      width: '19px',
                      height: '9px',
                      backgroundRepeat: 'no-repeat',
                      position: 'relative',
                      left: '0px',
                      fill: '#A5AEBD',
                    }}
                  ></span>
                  <span
                    className="m-square-point m-0"
                    style={{
                      backgroundImage: `url('/selector/square2x2.svg')`,
                      width: '19px',
                      height: '9px',
                      backgroundRepeat: 'no-repeat',
                      position: 'relative',
                      left: '5px',
                      fill: '#A5AEBD',
                    }}
                  ></span>
                  <span
                    className="m-square-point m-0"
                    style={{
                      backgroundImage: `url('/selector/square1x2.svg')`,
                      width: '19px',
                      height: '9px',
                      backgroundRepeat: 'no-repeat',
                      position: 'relative',
                      left: '11px',
                      fill: '#A5AEBD',
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div >
        </ div >

        :

        //! DESKTOP
        <div className="d-selector-container bg-white rounded-4 mb-3 d-flex justify-content-between align-item-center px-4 m-0" >

          {/* Contenedor de la izquierda */}
          <div className="d-flex align-items-center m-0">
            <p className='p-0 m-0'>Seleccionados
              <span className='selected-quantity ms-2'>{selectedQuantity}</span>
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
    }
  </>
}
