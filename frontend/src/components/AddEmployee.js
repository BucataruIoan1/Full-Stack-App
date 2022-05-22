import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [experience, setExperience] = useState();
  const navigate = useNavigate();

  const saveEmployee = async(e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:5001/employees', {
              name,
              email,
              gender,
              experience
          });
          navigate("/");
      } catch (error) {
          console.log(error);
      }
  }

  return (
      <div className="add-page">
        <form onSubmit={saveEmployee} className="form-add">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is full-width">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Experience</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Experience"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success is-normal">Save</button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default AddEmployee;
