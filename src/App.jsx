import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import EditStudent from "./components/EditStudent";
import StudentDetails from "./components/StudentDetails"; // Import StudentDetails component

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/edit/:id" element={<EditStudent />} />
        <Route path="/details/:id" element={<StudentDetails />} />{" "}
        {/* New route */}
      </Routes>
    </div>
  );
};

export default App;
