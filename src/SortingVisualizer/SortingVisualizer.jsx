import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';

const SortingVisualizer = () => {

    const [array, setArray] = useState([]);

    useEffect( () => { resetArray(); }, []);

    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < 185; i++) {
            newArray.push(randomIntFromInterval(10, 800));
        }
        setArray(newArray);
    };

    return (
        <div className='array-container'>
          {array.map((value, index) => (
            <div className="array-bar" key={index} style={{height: `${value}px`}}>
              {value}
            </div>
          ))}
        </div>
      );
};

/* Helper function to calculate random numbers*/
const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  
export default SortingVisualizer;