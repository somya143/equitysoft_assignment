import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestionToForm, getForm } from "../redux/form/form.action";

function AddQuestion() {
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.form.forms);
  const [selectedForm, setSelectedForm] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [valueType, setValueType] = useState("Text"); // Default value type
  const { token } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  const handleAddQuestion = () => {
    if (selectedForm && questionText && valueType) {
      dispatch(addQuestionToForm(selectedForm._id, questionText, valueType,token));
      setSelectedForm("");
      setQuestionText("");
      setValueType("Text"); // Reset to default value type
    }
  };

  return (
    <div>
      <h2>Add Question</h2>
      <select
        value={selectedForm}
        onChange={(e) => setSelectedForm(e.target.value)}
      >
        <option value="">Select Form</option>
        {forms?.map((form) => (
          <option key={form._id} value={form._id}>
            {form.title}
          </option>
        ))}
      </select>
      {selectedForm && (
        <div>
          <input
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Enter Question Text"
          />
          <select
            value={valueType}
            onChange={(e) => setValueType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="Integer">Integer</option>
            <option value="Date">Date</option>
            <option value="Time">Time</option>
            <option value="Float">Float</option>
          </select>
          <button onClick={handleAddQuestion}>Add Question</button>
        </div>
      )}
    </div>
  );
}

export default AddQuestion;
