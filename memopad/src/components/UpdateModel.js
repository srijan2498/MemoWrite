import React from 'react'
import { IoMdClose } from 'react-icons/io';

const UpdateModel = ({ memos, setMemos, utitle, setuTitle, udescription, setuDescription, setShowUpdateModel, updateId, setAlert, setShowAlert }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        if (updateId && utitle && udescription) {
            for (let i = 0; i < memos.length; i++) {
                if (memos[i].id === updateId) {
                    memos[i].id = updateId
                    memos[i].title = utitle
                    memos[i].description = udescription
                }
            }
            setMemos([...memos]);
            setuTitle("");
            setuDescription("");
            setShowUpdateModel(false)
            setShowAlert(true)
            setAlert({
                success: true,
                msg: "Memo updated successfully !"
            })
        }
        else {
            setShowAlert(true)
            setAlert({
                success: false,
                msg: "Please select all fields before proceeding !"
            })
        }
    };
    return (
        <div className='update_model'>
            <div className="update_model_container">
                <div className="close_update_model"><IoMdClose onClick={() => setShowUpdateModel(false)} /></div>
                <p className="heading">Update Memo</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={utitle}
                        onChange={(event) => setuTitle(event.target.value)}
                    />
                    <textarea
                        placeholder="Description"
                        value={udescription}
                        onChange={(event) => setuDescription(event.target.value)}
                    />
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateModel
