import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForm } from "../redux/form/form.action";

function ViewForms() {
  const {isError, isLoading, forms} = useSelector((state) => state.form);
  const dispatch = useDispatch

  useEffect(() => {
    dispatch(getForm())
  },[dispatch])

  return (
    <div>
      <h2>View Forms</h2>
      <div className="form-grid">
        {forms.map((form) => (
          <div key={form._id} className="form-box">
            <h3>{form.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewForms;
