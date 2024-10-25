import React, { useState, useEffect, useRef } from 'react';
import './SortingVisualizer.css';
import BarSlider from './BarSlider';
import {mergeSort} from './SortingAlgorithms/MergeAlgorithm';

const SortingVisualizer = () => {

    const [array, setArray] = useState([]);
    const [barCount, setBarCount] = useState(200);
    const timeoutsRef = useRef([]);

    useEffect( () => { resetArray(barCount); }, [barCount]);

    const animateMergeSort = () => {
      const animations = mergeSort([...array]); 
      const arrayBars = document.getElementsByClassName('array-bar');

      clearAllTimeouts();    

      for (let i = 0; i < animations.length; i++) {
        const isColorChange = i % 2 === 0;
    
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
    
          const colorChangeTimeoutId = setTimeout(() => {
            barOneStyle.backgroundColor = 'red';  
            barTwoStyle.backgroundColor = 'red';  
          }, (i * 10));

          const revertColorTimeoutId = setTimeout(() => {
            barOneStyle.backgroundColor = 'rgb(238, 114, 135)';  
            barTwoStyle.backgroundColor = 'rgb(238, 114, 135)';  
          }, (i * 10) + 50);

          timeoutsRef.current.push(colorChangeTimeoutId);
          timeoutsRef.current.push(revertColorTimeoutId);

        } else {
          const timeoutId = setTimeout(() => {
            const [barIdx, newHeight] = animations[i];
            const barStyle = arrayBars[barIdx].style;
            barStyle.height = `${newHeight / 2}px`;
          }, i * 10);
           

          timeoutsRef.current.push(timeoutId);
        }
      }

    };
    
      

    const resetArray = (barCount) => {
      clearAllTimeouts();
      const newArray = [];
      for (let i = 0; i < barCount; i++) {
          newArray.push(randomIntFromInterval(10, 1000));
      }
      setArray(newArray);

      const arrayBars = document.getElementsByClassName('array-bar');
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = 'rgb(238, 114, 135)';
      }
    };

    const clearAllTimeouts = () => {

      timeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
      
      timeoutsRef.current = [];

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
        <button className='new-array-button' onClick={() => resetArray(barCount)}> Generate New Array </button>
        <div className='algorithm-button-container'>
        <button className='algorithm-type-button' onClick={() => animateMergeSort()}> Merge Sort </button>
        </div>
      </div>
    );
};


const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  
export default SortingVisualizer;