import React from 'react'
import { IoMdClose } from 'react-icons/io';
const Alert = ({ alert, setAlert, setShowAlert }) => {
    return (
        <div className='alertContainer' style={{ backgroundColor: `${alert.success ? "green" : "red"}` }}>
            <button className="closeAlert" onClick={() => {
                setAlert({})
                setShowAlert(false)
            }}><IoMdClose /></button>
            {alert.msg}
        </div>
    )
}

export default Alert
