import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = ({ setAlert, setShowAlert }) => {
  const [user_name, setUser_name] = useState("")
  const [user_email, setUser_email] = useState("")
  const [message, setMessage] = useState("")
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (user_name && user_email && message) {
      emailjs.sendForm('service_4jjlunm', 'template_6gd1fmp', form.current, 'Xjp89TOS2t43YRNBw')
        .then((result) => {
          setAlert({
            success: true,
            msg: "Message sent successfully !"
          })
          setShowAlert(true)
          setUser_name("")
          setUser_email("")
          setMessage("")
        }, (error) => {
          setAlert({
            success: false,
            msg: "Message was not sent !"
          })
          setShowAlert(true)
        });
    }
    else {
      setAlert({
        success: false,
        msg: "All the fields are mandatory !"
      })
      setShowAlert(true)
    }
  };
  return (
    <div className="contact-container" id='contact-container'>
      <h1 className="heading">Get in touch</h1>
      <form ref={form} onSubmit={sendEmail} >
        <input type="text" name="user_name" minLength={2} maxLength={30} value={user_name} onChange={(e) => setUser_name(e.target.value)} placeholder='Your Name' />
        <input type="email" name="user_email" value={user_email} onChange={(e) => setUser_email(e.target.value)} placeholder='Your Email' />
        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' minLength={5} maxLength={150} />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact
