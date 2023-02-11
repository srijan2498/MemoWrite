import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

const MemoItem = ({ memo, deleteMemo, setShowUpdateModel, setUpdateId, setuTitle, setuDescription }) => {
  return (
    <div className='memo_item' style={{ backgroundColor: memo.color ? memo.color : "#FFAFBD"}}>
      <div className="top">
        <p className='memo_title'>{memo.title}</p>
        <div className="btns">
          <div className="btn">
            <BiEdit onClick={() => {
              setShowUpdateModel(true)
              setuTitle(memo.title)
              setuDescription(memo.description)
              setUpdateId(memo.id)
            }} />
          </div>
          <div className="btn">
            <AiOutlineDelete onClick={() => deleteMemo(memo.id)} />
          </div>
        </div>
      </div>
      <p className='memo_desc'>{memo.description}</p>
    </div>
  )
}

export default MemoItem
