import React, { useState } from "react";
import background from "../assets/background.png";
import BlueBox from "../components/big_bluebox";
import WhiteBox from "../components/white_box";

function Preferences() {
  const [fit, setFit] = useState("");
  const [color, setColor] = useState("");
  const [style, setStyle] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fit, color, style, zip });
  };

  // Helper component for pill-style options
  const PillOption = ({ value, selected, onClick }) => (
    <div
      onClick={() => onClick(value)}
      style={{
        padding: "8px 16px",
        borderRadius: "20px",
        cursor: "pointer",
        backgroundColor: selected ? "#0077b6" : "#e0e0e0",
        color: selected ? "white" : "black",
        marginRight: "10px",
        userSelect: "none",
        fontWeight: "normal",
        textAlign: "center",
      }}
    >
      {value}
    </div>
  );

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
        fontFamily: "'Pixelify Sans', sans-serif",
      }}
    >
      <BlueBox width="500px" height="600px">
        <div
          style={{
            width: "90%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ textAlign: "left", width: "100%", marginTop: "10px" }}>
            WEAR or TEAR
          </h2>

          <WhiteBox width="90%" height="80%">
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                padding: "20px",
                gap: "15px",
              }}
            >
              {/* Fit */}
            <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
            <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
                Fit:
            </label>
            <div style={{ display: "flex" }}>
                {["Fitted", "Loose", "Baggy"].map((option) => (
                <PillOption
                    key={option}
                    value={option}
                    selected={fit === option}
                    onClick={setFit}
                />
                ))}
            </div>
            </div>

            {/* Color Palette */}
            <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
            <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
                Color Palette:
            </label>
            <div style={{ display: "flex" }}>
                {["Monochrome", "Neutrals", "Colorful"].map((option) => (
                <PillOption
                    key={option}
                    value={option}
                    selected={color === option}
                    onClick={setColor}
                />
                ))}
            </div>
            </div>

            {/* Style */}
            <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
            <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
                Style:
            </label>
            <div style={{ display: "flex" }}>
                {["Casual", "Business", "Formal"].map((option) => (
                <PillOption
                    key={option}
                    value={option}
                    selected={style === option}
                    onClick={setStyle}
                />
                ))}
            </div>
            </div>


              {/* Zip Code */}
<div style={{ width: "100%", display: "flex", flexDirection: "column", marginTop: "10px" }}>
  <label>Zip Code:</label>
  <input
    type="text"
    value={zip}
    onChange={(e) => setZip(e.target.value)}
    placeholder="Enter your zip code"
    style={{
      width: "50%",       // adjust width as you like
      padding: "5px",
      borderRadius: "5px",
      marginTop: "5px",
    }}
  />
</div>


              <button
                type="submit"
                style={{
                  marginTop: "20px",
                  padding: "10px",
                  backgroundColor: "#0077b6",
                  color: "white",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Save Preferences
              </button>
            </form>
          </WhiteBox>
        </div>
      </BlueBox>
    </div>
  );
}

export default Preferences;
