import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ defaultStudentId = 1 }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Branding */}
        <Link to="/" className="navbar-brand text-warning fw-bold fs-4">
          Student Management
        </Link>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <Link
            to={`/details/${defaultStudentId}`}
            className="btn btn-outline-light"
          >
            Details
          </Link>
          <Link to="/" className="btn btn-outline-warning rounded-pill px-3">
            Student List
          </Link>
          <Link
            to="/add"
            className="btn btn-warning text-dark rounded-pill px-3"
          >
            Add Student
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
