import React, {Component} from 'react';
import formbanner from '../../assets/image/form-banner.png';
import { Link } from 'react-router-dom';
import togglePasswordVisibility from '../script_handle/index_scripts/password_visi';
import showImage from '../../assets/image/showImage.png'
export default function Login(){
  return (
    <>
      {/* Main */}
      <div className="container">
        <div className="wrapper">
          <div className="form-group">
            <img className="form-banner" src={formbanner} alt="form-banner" />
            <form className="form-control" action="" method="post">
              <h1>Log in to Exclusive</h1>
              <div className="form-box">
                <input className="form-input" type="email" placeholder="Email or Phone Number" />
              </div>
              <div className="form-box">
                <input className="form-input" type="password" placeholder="Password" id="passwordField" />
                <i id="togglePassword" onClick={togglePasswordVisibility}><img id='togglePassword' src={showImage} alt="showButton"/></i>
              </div>
              <button type="submit" className="form-button form-button__btn">Log In</button>
              <p>No account? <Link to={'/register'}>Register</Link></p>
            </form>
          </div>
        </div>
      </div>
      {/* End Main */}
    </>
  );
}

