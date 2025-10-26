import React from "react";
import background from "../assets/background.png";
import BlueBox from "../components/big_bluebox.jsx";
import "../styles/Login.css"; 
import InputBox from "../components/InputBox.jsx";
import Camera from "../components/camera.jsx";
import CameraBox from "../components/CameraBox.jsx";
import DownloadBox from "../components/DownloadBox.jsx";
function Photo() {
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
        gap: "28px",
      }}
    >
      <BlueBox width="500px" height="500px">
        <div style={{display:"flex", height: "100%"}}>
            <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 8px" }}>
       <Camera style={{width: "90%", height:"90%"}}/>
       </div>
       <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column",padding: "0 8px", maxWidth: "200px" }}>
         <h3 className="login-subtitle">Take a pic or upload one! </h3>
         <h3 className="login-subtitle">Make sure your entire fit is in frame.</h3>
         <div
    style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "25px", 
            marginTop: "10px",
        }}
            >
         <CameraBox />
         <DownloadBox/>
    </div>
    </div>
    </div>
        </BlueBox>
    </div>
  );
}

export default Photo;
