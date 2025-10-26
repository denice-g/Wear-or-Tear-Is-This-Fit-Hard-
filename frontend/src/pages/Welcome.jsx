import React from "react";
import background from "../assets/background.png";
import BlueBox from "../components/big_bluebox.jsx";
import WhiteBox from "../components/white_box.jsx";
import EverythingBox from "../components/EverythingBox.jsx";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login')
  };

  const handleClickSignup = () => {
    navigate('/signup')
  };

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
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            paddingTop: 50,
            boxSizing: "border-box",
          }}
        >
          <WhiteBox width="400px" height="250px" style={{ border: "2px solid #8abbd8" }}>
            <div style={{ textAlign: "center" }}>
                <h2 style={{ fontFamily: "'Pixelify Sans', sans-serif", fontSize: 42, fontWeight: 700, marginBottom: "30px" }}>
                WEAR or TEAR
                </h2>
                <p style={{ fontFamily: "'Pixelify Sans', sans-serif", fontSize: 18 }}>
                Is your fit as hard as you think it is?
                </p>
                <p style={{ fontFamily: "'Pixelify Sans', sans-serif", fontSize: 18 }}>
                 Find out now!
                </p>
            </div>
        </WhiteBox>


          <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center", width: "250px" }}>
            <EverythingBox label="Login" onClick={handleClickLogin} />
            <EverythingBox label="Sign Up" onClick={handleClickSignup} />
          </div>
        </div>
      </BlueBox>
    </div>
  );
}

export default Welcome;
