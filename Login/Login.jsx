import "./Login.css";
import React, { useState } from "react";
import Axios from "axios";
import Navbar from "../Navbar/Top";
import GoBack from "./GoBack";
import { useNavigate } from "react-router-dom";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function Login() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const Signin = async (e) => {
    e.preventDefault();
    console.log(Email);
    console.log(Password);
    const data = await Axios.post("http://localhost:5000/UserLogin", {
      email: Email,
      password: Password,
    });
    console.log(data.data[0]);
  };
  return (
    <div>
      <Navbar />
    
      <div id="container">
        <div className="body">
          <div className="header">
            <div class="logo"></div>
            <h1>Login</h1>
          </div>
          <div id="login-form">
            <div class="fields">
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <input type="submit" value="Login" onClick={Signin}  onClick={() => {
                        navigate("/LeftBar");
                      }} />
          </div>
          <div id="footer">
            <p>
              <a href="/register">Register </a> To Donate Blood
            </p>
          </div>
          <div id="footer-2">
            <p>
              <a href="/Password">Forgot Password ?</a>
            </p>
            <GoBack />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
