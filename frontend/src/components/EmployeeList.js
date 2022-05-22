import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const response = await axios.get("http://localhost:5001/employees");
    setEmployee(response.data);
  };

  const deleteEmployee = async (id) => {
      try {
          await axios.delete(`http://localhost:5001/employees/${id}`);
          getEmployees();
      } catch (error) {
          console.log(error);
      }
  }

  return (
    <div className="columns">
      <div className="column">
      <h1 id="titleTable">Employee List</h1>
        <table className="table is-bordered is-hoverable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Experience</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee._id}>
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.gender}</td>
                <td>{employee.experience}</td>
                <td>
                  <Link
                    to={`edit/${employee._id}`}
                    className="button is-info is-outlined is-normal edit-button"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteEmployee(employee._id)}
                    className="button is-danger is-outlined is-normal delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-container">
            <Link to="add" className="button is-success add-button">
                Add New
            </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
