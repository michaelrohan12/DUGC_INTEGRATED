import "./Login.css";
import pic from "./img1.jpg";
// import { useState, useEffect, useRef } from "react";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import axios from "axios"
import React, { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

const roles = [
  { label: "Coordinator", value: "Coordinator" },
  { label: "DUGC Member", value: "DUGC Member" }
]

const Shreyas = (props) => {
  const navigate = useNavigate();
  const initialValues = { username: "", email: "", role: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginerr, setLoginErr] = useState("");
  const [isloggedin, setIsLoggedin] = useState(false);
  const [roleerr, setRoleerr] = useState("");
  const [inputs, setInputs] = useState({
    uemail: "",
    upass: "",
    urole: ""
  });
  const [Crole, setRole] = useState("");
  const [Drole, setDrole] = useState("");

  // const [role, setRole]
  const dropdownoption = (value) => {
    if (value == 'Coordinator') {
      setRole(value);
    }
    else {
      setRole(value);
    }
  }
  //capturing the values of input from login form
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    const newdata = { ...inputs };
    newdata[e.target.name] = e.target.value;
    setInputs(newdata);
  };

  //Function to check whether the given login details are correct or not
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Crole && !Drole) {
      setRoleerr("Please select a role !");
    }
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    axios.post('http://localhost:1999/login', {
      uemail: inputs.uemail,
      upass: inputs.upass,
      urole: inputs.urole
    }).then(res => {
      setIsLoggedin(true);
      localStorage.setItem('token-info', JSON.stringify(formValues));
      if (Crole == "Coordinator") {
        localStorage.setItem('role', "coordinator")
      }
      else if (Crole == "DUGC Member") {
        localStorage.setItem('role', "dugc")
      }
      navigate("/Generate");

    }).catch(err => {
      setLoginErr("Invalid Username or password");
    })
  };

  //Function to validate the form
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.uname) {
      errors.username = "Username is required!";
    }
    if (!values.uemail) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.uemail)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.upass) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="shreyas123">
    <div className="container form">
      <div className="img1">
        <img className="" src={pic} />
      </div>
      <form className="begin">
        {/* <h1>Login</h1> */}
        <div className="ui divider"></div>
        <div className="ui form" style={{ paddingLeft: "0px" }}>
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="uname"
              placeholder="Username"
              onChange={handleChange}
              required
              autocomplete="off"
            />
            <p>{formErrors?.username}</p>
          </div>
          <div class="field">
            <label>Role</label>
            <Select styles={{ padding: "5px", width: "16.5rem" }} className="course1" name="urole" placeholder="Please Select a Role"
              options={roles}
              onChange={(item) => {
                dropdownoption(item?.value)
              }
              }
            />
            <p>{roleerr ? roleerr : null}</p> 
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="uemail"
              value={inputs?.uemail}
              placeholder="Email"
              onChange={(e) => handleChange(e)}
              required
              autocomplete="off"
            />

          </div>
          <p>{formErrors?.email}</p>
          <p>{loginerr ? loginerr:null}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="upass"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
              required
            />
            <p>{loginerr ? loginerr:null}</p>
            <button className="fluid ui button blue btn btn-primary" style={{textAlign:"center"}} onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}
export default Shreyas;