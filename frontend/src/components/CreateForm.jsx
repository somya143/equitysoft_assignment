import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createForm } from "../redux/form/form.action";

function CreateForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleCreateForm = () => {
    if (title.trim() !== "") {
      dispatch(createForm(title));
      setTitle("");
    }
  };

  return (
    <div>
      <h2>Create Form</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Form Title"
      />
      <button onClick={handleCreateForm}>Create Form</button>
    </div>
  );
}

export default CreateForm;
