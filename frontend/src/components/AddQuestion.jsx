import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "./redux/form.actions";

function AddQuestion() {
  const dispatch = useDispatch();
  const [formId, setFormId] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [valueType, setValueType] = useState("Text"); // Default value type

  const handleAddQuestion = () => {
    if (formId && questionText && valueType) {
      dispatch(addQuestion(formId, questionText, valueType));
      setFormId("");
      setQuestionText("");
      setValueType("Text"); // Reset to default value type
    }
  };

  return (
    <div>
      <h2>Add Question</h2>
      <input
        type="text"
        value={formId}
        onChange={(e) => setFormId(e.target.value)}
        placeholder="Enter Form ID"
      />
      <input
        type="text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        placeholder="Enter Question Text"
      />
      <select value={valueType} onChange={(e) => setValueType(e.target.value)}>
        <option value="Text">Text</option>
        <option value="Number">Number</option>
        <option value="Date">Date</option>
        <option value="Time">Time</option>
        <option value="Float">Float</option>
      </select>
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
}

export default AddQuestion;
