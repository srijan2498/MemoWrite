import React from 'react'
import { AiOutlineDelete, AiOutlineRead } from 'react-icons/ai';
import { MdOutlineCreateNewFolder } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';

const Features = () => {
  return (
    <div className='features_container'>
      <p className="heading">Features</p>
      <div className="feature_list">
        <div className="feature_item">
          <div className="feature_img" style={{ backgroundColor: "#20BF55"}}>
            <MdOutlineCreateNewFolder />
          </div>
          <div className="feature_label">
            Create your memo
          </div>
        </div>
        <div className="feature_item">
          <div className="feature_img" style={{ backgroundColor: "#0CBABA" }}>
            <AiOutlineRead/>
          </div>
          <div className="feature_label">
            Have a glance at your todos
          </div>
        </div>
      </div>
      <div className="feature_list">
        <div className="feature_item">
          <div className="feature_img" style={{ backgroundColor: "#EC9F05" }}>
            <RxUpdate/>
          </div>
          <div className="feature_label">
            Update your todos if there is a change in plan
          </div>
        </div>
        <div className="feature_item">
          <div className="feature_img" style={{ backgroundColor: "#A40606" }}>
            <AiOutlineDelete/>
          </div>
          <div className="feature_label">
            Drop your todo from the list if already done.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
