import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {createContext} from 'react';
const formDataContext = createContext();


function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    email: '',
    dateOfBirth: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!!");
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      email: '',
      dateOfBirth: ''
    });
  }

  return (
    <formDataContext.Provider value={formData}>
    
    <Router>
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <br />
      <label>
        Gender:
        <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} /> Male
        <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} /> Female
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Date of Birth:
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
      </label>
      <br />
      <Link to="/submit">
  <button type="submit">Submit</button>
</Link>
      <button type="reset" onClick={handleReset}>Reset</button>
    </form>
    <Route path="/submit" component={SubmitPage} />
    </Router>
    </formDataContext.Provider>
  );
}
function SubmitPage() {
  const formData = useContext(formDataContext);
  return (
    <div>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Age: {formData.age}</p>
      <p>Gender: {formData.gender}</p>
      <p>Email: {formData.email}</p>
      <p>Date of Birth: {formData.dateOfBirth}</p>
    </div>
  );
}


export default Form;