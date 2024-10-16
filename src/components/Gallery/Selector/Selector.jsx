import './Selector.css';
import useWindowWidth from '../../../hooks/useWindowWidth.js';
import { useEffect } from 'react';
import { useCartContext } from '../../../context/CartContext.jsx';
import square1 from '../../../assets/selector/square1x2.svg';
import square2 from '../../../assets/selector/square2x2.svg';
import square3 from '../../../assets/selector/square3x2.svg';
import square4 from '../../../assets/selector/square4x2.svg';

export default function Selector({ columns, onColumnsChange }) {
  const isMobile = useWindowWidth();
  const { getTotalItemsInCart } = useCartContext();
  const selectedQuantity = getTotalItemsInCart();

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    const invertedValue = isMobile ? 4 - value : 5 - value;
    onColumnsChange(invertedValue);
  };

  useEffect(() => {
    const updateColumnsBasedOnWidth = () => {
      const widthWindow = window.innerWidth;
      const newColumns = widthWindow <= 768 ? 1 : widthWindow <= 1200 ? 3 : 4;
      onColumnsChange(newColumns);
    };

    updateColumnsBasedOnWidth();
    window.addEventListener('resize', updateColumnsBasedOnWidth);
    return () => {
      window.removeEventListener('resize', updateColumnsBasedOnWidth);
    };
  }, [onColumnsChange]);

  const rangeMax = isMobile ? 3 : 4;
  const squareIcons = isMobile
    ? [square3, square2, square1]
    : [square4, square3, square2, square1];

  return (
    <div className={`${isMobile ? 'm-selector-container px-2' : 'd-selector-container px-4'} bg-white rounded-4 mb-3 d-flex justify-content-between align-item-center m-0`}>
      {/* Left COntainer */}
      <div className="d-flex align-items-center m-0">
        <p className="p-0 m-0">
          Seleccionados
          <span className={`${isMobile ? 'm-selected-quantity' : 'selected-quantity'} ms-2`}>
            {selectedQuantity}
          </span>
        </p>
      </div>

      {/* Right Container */}
      <div className="d-flex align-items-center m-0">
        {!isMobile && <label htmlFor="range1" className="form-label m-0 me-4">Ver como</label>}

        {/* Selector General ContainerContenedor  */}
        <div className={`range-container`}>
          <input
            className={`${isMobile ? 'm-form-range form-range' : 'form-range'}`}
            type="range"
            name="range"
            id="range1"
            step={1}
            min={1}
            max={rangeMax}
            value={rangeMax + 1 - columns}
            onChange={handleRangeChange}
          />

          {/* Marks */}
          <div className={`${isMobile ? 'm-mark-point-content' : 'mark-point-content'} d-flex justify-content-between`}>
            {Array.from({ length: rangeMax }, (_, i) => (
              <span key={i} className={`${isMobile ? 'm-mark-point' : 'mark-point'} m-0`}></span>
            ))}
          </div>

          {/* Squares SVG Container */}
          <div className={`${isMobile ? 'm-square-point-content' : 'square-point-content'} d-flex justify-content-between`} style={{ position: 'relative', top: '-10px' }}>
            {squareIcons.map((icon, index) => (
              <span
                key={index}
                className={`${isMobile ? 'm-square-point' : 'square-point'} m-0`}
                style={{
                  backgroundImage: `url(${icon})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '19px',
                  height: '9px',
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}
