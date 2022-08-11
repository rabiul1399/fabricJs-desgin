import React, { useState } from 'react';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'

const Draw = () => {
    const { selectedObjects, editor, onReady } = useFabricJSEditor({ defaultStrokeColor: 'red' })
    const [text, setText] = useState("");
    const [strokeColor, setStrokeColor] = useState("");
    const [fillColor, setFillColor] = useState("");

    const onAddCircle = () => {
        editor?.addCircle()
    }
    const onAddRectangle = () => {
        editor?.addRectangle()
    }
    const onAddLine = () => {
        editor?.addLine()
    }
    const onAddText = () => {
        if (selectedObjects?.length) {
            return editor?.updateText(text)
        }
        editor?.addText(text);
    }
    const onSetStrokeColor = () => {
        editor?.setStrokeColor(strokeColor)
    }
    const onSetFillColor = () => {
        editor?.setFillColor(fillColor)
    }
    const onDeleteAll = () => {
        editor?.deleteAll();
    }
    const onDeleteSelected = () => {
        editor?.deleteSelected();
    }
    const onZoomIn = () => {
        editor?.zoomIn()
    }
    const onZoomOut = () => {
        editor?.zoomOut()
    }

    return (
        <div>
            <div class=" mx-auto my-32 p-8 w-full h-96 bg-base-300 shadow-xl ">
                {editor ? (<div>
                    <button class="btn btn-xs m-1" onClick={onZoomIn}>Zoom In</button>
                    <button class="btn btn-xs m-1" onClick={onZoomOut}>Zoom Out</button>
                    <button class="btn btn-xs m-1" onClick={onAddCircle}>Add circle</button>
                    <button class="btn btn-xs m-1" onClick={onAddRectangle}>Add Rectangle</button>
                    <button class="btn btn-xs m-1" onClick={onAddLine}>Add Line</button>
                    <button class="btn btn-xs m-1" onClick={onDeleteAll}>Delete All</button>
                    <button class="btn btn-xs" onClick={onDeleteSelected}>Delete Selected</button>
                    <input
                        type="text"
                        class="input input-bordered input-xs w-32 mx-4"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button class="btn btn-xs" onClick={onAddText}>Add Text</button>
                    <input
                        type="text"
                        class="input input-bordered input-xs w-32 mx-4"
                        value={strokeColor || editor.strokeColor}
                        onChange={e => setStrokeColor(e.target.value)}
                    />
                    <button class="btn btn-xs" onClick={onSetStrokeColor}>Set Stroke Color</button>
                    <input
                        type="text"
                        class="input input-bordered input-xs w-32 mx-4"
                        value={fillColor || editor.fillColor}
                        onChange={e => setFillColor(e.target.value)}
                    />
                    <button class="btn btn-xs" onClick={onSetFillColor}>Set Fill Color</button>

                    <pre>fillColor: {editor.fillColor}, strokeColor: {editor.strokeColor}</pre>
                    <pre>{JSON.stringify(selectedObjects)}</pre>

                </div>) : (<>Loading...</>)}
                <FabricJSCanvas className="sample-canvas" onReady={onReady} />

            </div>
        </div>
    );
};

export default Draw;