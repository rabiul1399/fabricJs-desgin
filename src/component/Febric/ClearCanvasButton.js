import React from 'react';
import { useCanvas } from './CanvasContext';

const ClearCanvasButton = () => {
    const { clearCanvas } = useCanvas()
    return (
        <button onClick={clearCanvas}>Очистить</button>
    );
};

export default ClearCanvasButton;