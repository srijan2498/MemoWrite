import React from 'react'
import MemoItem from "./MemoItem";

const MemoContainer = ({ memos, setMemos, setShowUpdateModel, setUpdateId, setuTitle, setuDescription, setAlert, setShowAlert }) => {
  const deleteMemo = (id) => {
    const newMemos = []
    for (let i = 0; i < memos.length; i++) {
      if (memos[i].id !== id) {
        newMemos.push(memos[i])
      }
    }
    setMemos(newMemos)
    setShowAlert(true)
    setAlert({
      success: true,
      msg: "Memo deleted successfully !"
    })
  }
  return (

    <div className="memo_items">
      <h1 id='myMemos' className='heading'>List of Memos</h1>
      <div className="memo_items_container">
        {memos.length > 0 ? memos.map((memo, index) => (
          <MemoItem key={index} memo={memo} deleteMemo={deleteMemo} setShowUpdateModel={setShowUpdateModel} setUpdateId={setUpdateId} setuTitle={setuTitle} setuDescription={setuDescription} />
        )) : "There is no memo"}
      </div>
    </div>
  )
}

export default MemoContainer
