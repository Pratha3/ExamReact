import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentDetails = () => {
  const { id } = useParams();
  const { students } = useSelector((state) => state.students);

  // Find the specific student by ID
  const student = students.find(
    (student) => student.id === id || student.id === Number(id)
  );

  if (!student) {
    return (
      <div className="container mt-4 text-light bg-dark p-4 rounded shadow">
        <h2 className="text-danger">Student Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4 text-light bg-dark p-4 rounded shadow">
      <h2 className="text-warning text-center mb-4">Student Details</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-dark text-light">
          <strong>Name:</strong> {student.name}
        </li>
        <li className="list-group-item bg-dark text-light">
          <strong>Roll Number:</strong> {student.rollNumber}
        </li>
        <li className="list-group-item bg-dark text-light">
          <strong>Class:</strong> {student.class}
        </li>
      </ul>
    </div>
  );
};

export default StudentDetails;
