import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
const Navbar = () => {
  const navigate= useNavigate()
  const openContact=()=>{
    document.getElementById('contact-container').scrollIntoView()
  }
  const openHome=()=>{
    navigate("/")
    setTimeout(() => {
      document.getElementById("hero").scrollIntoView()
    });
  }
  const openCreate = () => {
    navigate("/create-new")
    setTimeout(() => {
      document.getElementById("create").scrollIntoView()
    });
  }
  const openMyMemo = () => {
    navigate("/my-memos")
    setTimeout(() => {
      document.getElementById("myMemos").scrollIntoView()
    });
  }
  return (
    <div className='navbar'>
      <div className="logo"><span className="color">M</span>emo<span className="color">W</span>rite</div>
      <ul className="label">
        <li onClick={openHome}>Home</li>
        <li onClick={openCreate}>Create new</li>
        <li onClick={openMyMemo}>My memos</li>
        <li onClick={openContact}>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
