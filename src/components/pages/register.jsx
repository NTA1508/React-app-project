import React, { useState } from "react";
import formbanner from "../../assets/image/form-banner.png";
import { Link, useNavigate } from "react-router-dom";
import togglePasswordVisibility from "../../components/script_handle/index_scripts/password_visi";
import showImage from "../../assets/image/showImage.png";
import axios from "axios";
export default function Register() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("https://web-shopping.onrender.com/register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* Main */}
      <div className="container">
        <div className="wrapper">
          <div className="form-group">
            <img className="form-banner" src={formbanner} alt="form-banner" />
            <form className="form-control" onSubmit={Submit}>
              <h1>Create an account</h1>
              <div className="form-box">
                <input
                  className="form-input1"
                  type="text"
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="form-input2"
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-box">
                <input
                  className="form-input"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-box">
                <input
                  className="form-input"
                  type="password"
                  placeholder="Password"
                  id="passwordField"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i id="togglePassword" onClick={togglePasswordVisibility}>
                  <img id="togglePassword" src={showImage} alt="showButton" />
                </i>
              </div>
              <button type="submit" className="form-button form-button__btn">
                Create Account
              </button>
              <button type="button" className="form-button form-button__google">
                <img src="./assets/images/Icon-Google.png" alt="" />
                <span>Sign up with Google</span>
              </button>
              <p>
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* End Main */}
    </>
  );
}
