import React, { onChange } from 'react';
import './SortingVisualizer.css';

const BarSlider = ({ barCount, setBarCount }) => {
    return (
      <div className="slider-container">
        <input
          type="range"
          min="10"
          max="200"
          value={barCount}
          onChange={(e) => setBarCount(Number(e.target.value))}
        />
        <label id='slider-bar-count'>  Bars: {barCount}</label> 
      </div>
    );
  };
  
  export default BarSlider;