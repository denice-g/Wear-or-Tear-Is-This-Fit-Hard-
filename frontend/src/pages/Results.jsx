import React from "react";
import background from "../assets/background.png";
import BlueBox from "../components/big_bluebox";
import WhiteBox from "../components/white_box";
import userPhoto from "../assets/work-outfit.jpg";
import Left from "../components/Left.jsx";

function Results() {
  // Placeholder data
  const dripRating = 8.5;
  const analysis =
    "The outfit shows a great mix of colors and textures. Consider adding accessories to enhance the look.";

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

          {/* White box inside blue box */}
          <WhiteBox width="90%" height="80%">
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "20px",
              }}
            >
              {/* Left side - user photo */}
              <img
                src={userPhoto}
                alt="User Outfit"
                style={{
                  width: "200px",
                  height: "370px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginTop: "30px",
                }}
              />

              {/* Right side - rating + analysis */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginLeft: "20px",
                  flex: 1,
                }}
              >
                <h3 style={{ marginTop: "30px", marginBottom: "10px", fontSize: "24px" }}>Drip Rating: {dripRating}/10</h3>
                <div>
                  <h4>Analysis & Recommendations:</h4>
                  <p style={{ margin: 0 }}>{analysis}</p>
                </div>
              </div>
            </div>
          </WhiteBox>
        </div>
        <div
  style={{
    width: "90%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 15px",
  }}
>
  <Left />
</div>

      </BlueBox>
    </div>
  );
}

export default Results;
