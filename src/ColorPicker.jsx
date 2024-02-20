import React, {useState} from 'react';
import './ColorPicker.css';

function ColorPicker(){

    const [color, setColor] = useState('#ffffff');

    function changeColor(event){
        setColor(event.target.value);
    }

    return (
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}></div>
            <div>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color</label>
            <input className='color-input' type="color" value={color} onChange={changeColor}/>
        </div>
    )

}

export default ColorPicker;