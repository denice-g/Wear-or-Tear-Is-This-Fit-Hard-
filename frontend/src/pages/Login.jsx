import React from "react";
import background from "../assets/background.png";
import BlueBox from "../components/big_bluebox";
import "../styles/Login.css"; 
import InputBox from "../components/InputBox.jsx";

import EverythingBox from "../components/EverythingBox.jsx";
function Login() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <BlueBox width="500px" height="500px">
    <div className= "loginner">
        <h2 className="login-title">WEAR or TEAR</h2>
        <div className=" loginform">
            <InputBox placeholder="Username"/>
            <InputBox type="password" placeholder="Password"/>

        </div>
        <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <EverythingBox
              label="Login"
              onClick={() => console.log("Login clicked")}
            />
          </div>
        <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <EverythingBox
              label="Sign"
              onClick={() => console.log("Login clicked")}
            />
          </div>
    </div>
        
    </BlueBox>
    </div>
  );
}

export default Login;
