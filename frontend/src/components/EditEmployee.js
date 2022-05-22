import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [experience, setExperience] = useState();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
      getEmployeeById();
  }, []);

  const getEmployeeById = async() => {
      const response = await axios.get(`http://localhost:5001/employees/${id}`);
      setName(response.data.name);
      setEmail(response.data.email);
      setGender(response.data.gender);
      setExperience(response.data.experience);
  }

  const updateEmployee = async(e) => {
      e.preventDefault();
      try {
          await axios.patch(`http://localhost:5001/employees/${id}`, {
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
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={updateEmployee}>
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
              <button type="submit" className="button is-success">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
