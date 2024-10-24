import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';
import BarSlider from './BarSlider';

const SortingVisualizer = () => {

    const [array, setArray] = useState([]);
    const [barCount, setBarCount] = useState(200);

    useEffect( () => { resetArray(barCount); }, [barCount]);

    const resetArray = (barCount) => {
        const newArray = [];
        for (let i = 0; i < barCount; i++) {
            newArray.push(randomIntFromInterval(10, 1000));
        }
        setArray(newArray);
    };

    return (
      <div className="sorting-visualizer">

        <BarSlider barCount={barCount} setBarCount={setBarCount} />
    
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                height: `${value / 2}px`
              }}
            ></div>
          ))}
        </div>
      </div>
    );
};


const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  
export default SortingVisualizer;