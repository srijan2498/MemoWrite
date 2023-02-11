import React from "react";
import ColorItem from "./ColorItem";

const Create = ({ memos, setMemos, title, setTitle, description, setDescription, setSelectedColor, selectedColor, setShowAlert, setAlert }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description && selectedColor){
      let id = new Date().getTime();
      setMemos([...memos, { id, title, description, color: selectedColor }]);
      setTitle("");
      setDescription("");
      setSelectedColor("")
      setShowAlert(true)
      setAlert({
        success: true,
        msg: "New memo created successfully !"
      })
    }
    else{
      setShowAlert(true)
      setAlert({
        success: false,
        msg: "Please select all fields before proceeding !"
      })
    }
  };
  return (
    <div className="create_memo_container">
      <p className="heading" id="create">Create a Memo</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <ColorItem setSelectedColor={setSelectedColor} />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create
