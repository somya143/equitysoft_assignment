import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForm, submitForm } from "../redux/form/form.action";

function SubmitResponse() {
  const dispatch = useDispatch();
  const {forms} = useSelector((state) => state.form);
  const [selectedForm, setSelectedForm] = useState("");
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    dispatch(getForm());
  }, [dispatch]);

  const handleAddResponse = () => {
    if (selectedForm && responses.length < selectedForm.questions.length) {
      setResponses([...responses, { questionId: "", responseValue: "" }]);
    }
  };

  const handleResponseChange = (index, field, value) => {
    const updatedResponses = [...responses];
    updatedResponses[index][field] = value;
    setResponses(updatedResponses);
  };

  const handleSubmitForm = () => {
    if (selectedForm && responses.length === selectedForm.questions.length) {
      const formattedResponses = responses.map((response) => ({
        questionId: response.questionId,
        responseValue: response.responseValue,
      }));
      dispatch(submitForm(selectedForm._id, formattedResponses));
      setSelectedForm("");
      setResponses([]);
    }
  };

  return (
    <div>
      <h2>Submit Response</h2>
      <select
        value={selectedForm}
        onChange={(e) => setSelectedForm(e.target.value)}
      >
        <option value="">Select Form</option>
        {forms?.map((form) => (
          <option key={form._id} value={form}>
            {form.title}
          </option>
        ))}
      </select>
      {selectedForm &&
        responses.map((response, index) => (
          <div key={index}>
            <label>Question: {selectedForm.questions[index].questionText}</label>
            <input
              type="text"
              value={response.responseValue}
              onChange={(e) =>
                handleResponseChange(index, "responseValue", e.target.value)
              }
              placeholder="Enter Response Value"
            />
          </div>
        ))}
      <button onClick={handleAddResponse}>Add Response</button>
      {selectedForm && responses.length === selectedForm.questions.length && (
        <button onClick={handleSubmitForm}>Submit Form</button>
      )}
    </div>
  );
}

export default SubmitResponse;
