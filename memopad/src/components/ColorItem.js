import React, { useState } from 'react'

const ColorItem = ({ setSelectedColor }) => {
    const [colors, setColors]=useState([
        "#FF3C2A",
        "#FF7F00",
        "#FFFF00",
        "#A2BC13",
        "#71B3FF",
        "#E599E5",
        "#FF69B4"
    ])
  return (
    <div className='color_container'>
      {colors.map((color, index)=>{
          return <div className="color" key={index} style={{ backgroundColor: color }} onClick={() => setSelectedColor(color)}></div>
      })}
    </div>
  )
}

export default ColorItem
