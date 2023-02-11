import React from 'react'
import { useNavigate } from 'react-router-dom'
import hero_img from './img/hero_img.jpg'

const Hero = () => {
  const navigate = useNavigate()
  const openCreate = () => {
    navigate("/create-new")
    setTimeout(() => {
      document.getElementById("create").scrollIntoView()
    });
  }
  return (
    <div className='hero_container' id='hero'>
      <div className="hero_inner">
        <div className="text">
          <p className="heading">Lets manage your day & make it more productive</p>
          <p className="sub_heading">Manage your day easily along with us and live your life to the fullest.</p>
          <button className="create" onClick={openCreate}>Create Memo</button>
        </div>
        <div className="image_container">
          <img src={hero_img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
