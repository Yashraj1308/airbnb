import React from "react";
//import './Login.css'; // Assuming you have a CSS file named Login.css for styling
import "../style/Login.css";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="container">
      <section id="LoginForm" className="sectionForm reSize">
        <form id="Register" action="#">
          <div className="inputSection">
            <h1 className="log">LOGIN</h1>
            <input
              type="text"
              id="L-Username"
              className="inputText"
              required
              placeholder="Email"
            />
          </div>

          <div className="inputSection">
            <input
              type="password"
              id="L-Password"
              className="inputText"
              required
              placeholder="Password"
            />
            <br />
            <br />
          </div>

          <div>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>

          <div className="formFooter">
            <button className="submitButton" type="submit" id="SubmitForm">
              Login
            </button>
          </div>
          <div className="optionalSection">
          <span className="sizeBack">No account yet?</span>
         <Link to={"/register"} >Register</Link>
        </div>
        </form>

        {/* <div className="optionalSection">
          <span className="sizeBack">No account yet?</span>
         <Link to={"/register"} >Register</Link>
        </div> */}

        <div className="boxShadow"></div>
      </section>
    </div>
  );
};

export default LoginForm;
