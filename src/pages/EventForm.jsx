import React, { useState } from "react";
import useFormValidation from "../hooks/useFormValidation";
import Summary from "./Summary";

function EventForm() {
  const initialData = {
    name: "",
    email: "",
    age: "",
    isAttendingWithGuest: null,
    guestName: "",
  };
  const [data, setData] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);
  const errors = useFormValidation(data);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioInput = (e) => {
    setData((prevData) => ({
      ...prevData,
      isAttendingWithGuest: e.target.value === "yes",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted:", data);
      setSubmitted(true);
    } else {
      console.error("Validation Errors:", errors);
    }
  };

  return (
    <div className="container">
      {!submitted ? <h2>Event Registration Form</h2> : <h2>Submitted Data Summary</h2> }
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-div">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleInput}
            />
            {submitted && errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-div">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleInput}
            />
            {submitted && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
          <div className="form-div">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={data.age}
              onChange={handleInput}
            />
            {submitted && errors.age && <p className="error">{errors.age}</p>}
          </div>
          <div className="form-div">
            <label>Are you attending as a guest?</label>
            <div>
              <input
                type="radio"
                name="isAttendingWithGuest"
                value="yes"
                checked={data.isAttendingWithGuest === true}
                onChange={handleRadioInput}
              />
              <span>Yes</span>
            </div>
            <div>
              <input
                type="radio"
                name="isAttendingWithGuest"
                value="no"
                checked={data.isAttendingWithGuest === false}
                onChange={handleRadioInput}
              />
              <span>No</span>
            </div>
          </div>
          {data.isAttendingWithGuest && (
            <div className="form-div">
              <label>Guest Name</label>
              <input
                type="text"
                name="guestName"
                value={data.guestName}
                onChange={handleInput}
              />
              {submitted && errors.guestName && (
                <p className="error">{errors.guestName}</p>
              )}
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <Summary data={data} />
      )}
    </div>
  );
}

export default EventForm;
