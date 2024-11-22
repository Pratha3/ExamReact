import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../redux/studentSlice";
import { Link } from "react-router-dom";

const StudentList = () => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.students);

  const [search, setSearch] = useState(""); // Search input state
  const [filterByClass, setFilterByClass] = useState(""); // Class filter state
  const [sortBy, setSortBy] = useState("name"); // Sorting criteria state

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  // Sorting Logic
  const sortedStudents = [...students].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name); // Sort by name
    } else {
      return a.rollNumber - b.rollNumber; // Sort by roll number
    }
  });

  // Filter students based on search and class
  const filteredStudents = sortedStudents.filter((student) => {
    return (
      student.name.toLowerCase().includes(search.toLowerCase()) && // Search by name
      student.class.toLowerCase().includes(filterByClass.toLowerCase()) // Filter by class
    );
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2>Student List</h2>

      {/* Search Input */}
      <div className="mb-3">
        <label>Search by Name:</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search state
          className="form-control"
          placeholder="Search by student name"
        />
      </div>

      {/* Filter by Class Input */}
      <div className="mb-3">
        <label>Filter by Class:</label>
        <input
          type="text"
          value={filterByClass}
          onChange={(e) => setFilterByClass(e.target.value)} // Update filter state
          className="form-control"
          placeholder="Enter class to filter"
        />
      </div>

      {/* Sort by Dropdown */}
      <div className="mb-3">
        <label>Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)} // Update sort state
          className="form-control"
        >
          <option value="name">Name</option>
          <option value="rollNumber">Roll Number</option>
        </select>
      </div>

      {/* Students Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.class}</td>
              <td>
                <Link
                  to={`/edit/${student.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
