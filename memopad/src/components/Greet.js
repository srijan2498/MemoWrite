import React from 'react'
import { IoMdClose } from 'react-icons/io';

const Greet = ({ greet, setShowGreet }) => {
    return (
        <div className='greet_outer'>
            <div className="greet_inner">
                <div className="close_update_model"><IoMdClose onClick={() => setShowGreet(false)} /></div>
                <p className="desc">{greet.msg}</p>
            </div>
        </div>
    )
}

export default Greet
