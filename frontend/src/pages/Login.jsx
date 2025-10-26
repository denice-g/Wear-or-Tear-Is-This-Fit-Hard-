import React from "react";
import background from "../assets/background.png";
import BlueBox from "../components/big_bluebox";
import "../styles/Login.css"; 
import InputBox from "../components/InputBox.jsx";

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
         <h3 className="login-subtitle">Is your fit hard as you think it is?</h3>
          <h3 className="login-subtitle">Find out!</h3>
        <div className=" loginform">
            <InputBox placeholder="Username"/>
            <InputBox type="password" placeholder="Password"/>
        </div>
    </div>
        
    </BlueBox>
    </div>
  );
}

export default Login;
