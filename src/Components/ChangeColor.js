import React, { useState } from 'react'
import {changeColor} from '../Features/Theme'
import{ useDispatch } from 'react-redux'

function ChangeColor() {
    const [color,SetColor]=useState('');

    const dispatch=useDispatch();
  return (
    <div>
        <input type="text" onChange={(e)=>{
            SetColor(e.target.value);
            console.log(e.target.value);
        }}/>
        <button onClick={()=>{
            dispatch(changeColor(color))
            }}>Change Color</button>
      
    </div>
  )
}

export default ChangeColor
