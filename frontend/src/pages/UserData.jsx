import React from "react";
import background from "../assets/background.png";
import BlueBox from "../components/big_bluebox";
import { useNavigate } from "react-router-dom"
import "../styles/Login.css"; 
import InputBox from "../components/InputBox.jsx";
import EverythingBox from "../components/EverythingBox.jsx";
import Left from "../components/Left.jsx";
function UserData() {
    const navigate = useNavigate();
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
        <h2 className="login-title" style={{ marginTop: "10px" }}>WEAR or TEAR </h2>
        <div className=" loginform" style={{ marginTop: "10px" }}>
            <InputBox placeholder="First Name"/>
            <InputBox  placeholder="Last name"/>
            <InputBox type="email" placeholder="Email"/>
            <InputBox  type="password" placeholder="Password"/>
            <InputBox type="password"  placeholder="Comfirm Password"/>
        </div>
          
        <div
            style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <div style={{ marginRight: "150px" }}> 
                <Left to="/Login" />
            </div>
            <EverythingBox
                label="Sign"
                onClick={() =>navigate("/WhatDo") } 
            />
            </div>
    </div>
        
    </BlueBox>
    </div>
  );
}

export default UserData;
