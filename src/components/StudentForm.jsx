import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { addStudent } from "../redux/studentSlice";

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    class: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(student));
    setStudent({ name: "", rollNumber: "", class: "" });
    navigate("/"); // Redirect to home page after form submission
  };

  return (
    <div className="container mt-4">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            value={student.rollNumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Class</label>
          <input
            type="text"
            name="class"
            value={student.class}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
