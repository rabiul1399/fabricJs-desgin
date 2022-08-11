import React, { useEffect } from 'react';
import { useState } from 'react';
import { useCanvas } from './CanvasContext';

const Canva = () => {
    const [add, setAdd] = useState('')

    const [time, setTime] = useState(0);
    const reset = () => {
      setTime(0);
    };

    console.log('click', add)
    const {
        canvasRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        draw,
    } = useCanvas();

    useEffect(() => {
        prepareCanvas();
    }, []);
    let submitButton
    let restButton

    if (add === true) {
        submitButton = <button class="btn btn-xs sm:btn-sm md:btn-sm lg:btn-lg">submit</button>
        restButton = <button onClick={reset} class="btn btn-xs sm:btn-sm md:btn-sm lg:btn-lg">rest</button>

    }




    const clicekThis = (event) => {
        setAdd(event.bubbles)
  

    }
    return (
        <div className='bg-base-300 m-8 '>
            <div  onClick={clicekThis}>
                <canvas 
                    onMouseDown={startDrawing}
                    onMouseUp={finishDrawing}
                    onMouseMove={draw}
                    ref={canvasRef}
                />
            </div>
      <div className='flex justify-around'>
      {submitButton}
      {restButton}
      </div>
         
        </div>
    );
};

export default Canva;