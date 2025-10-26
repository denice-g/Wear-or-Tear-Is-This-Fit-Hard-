import React from "react";
import background from "../assets/background.png";
import BlueBox from "../components/big_bluebox";
import WhiteBox from "../components/white_box";

// Placeholder outfit data
import outfit1 from "../assets/work-outfit.jpg";
import outfit2 from "../assets/winter_casual.jpg";
import outfit3 from "../assets/summer_casual.jpg";

const outfits = [
  { photo: outfit1, drip: 7 },
  { photo: outfit2, drip: 9 },
  { photo: outfit3, drip: 8 },
];

function FitDiary({ firstName }) {
  const averageDrip =
    outfits.reduce((sum, outfit) => sum + outfit.drip, 0) / outfits.length;

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
      {/* Blue Box with original proportions */}
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
          {/* Top header on BlueBox */}
          <h2 style={{ textAlign: "left", width: "100%", marginTop: "10px" }}>
            WEAR or TEAR
          </h2>

          {/* WhiteBox containing diary title and gallery */}
          <WhiteBox width="90%" height="80%">
            <div
              style={{
                padding: "20px",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Name's Fit Diary heading */}
              <h3 style={{ textAlign: "center", marginBottom: "15px", fontWeight: "normal", fontSize: "22px" }}>
                My Fit Diary
              </h3>

              {/* Average Drip */}
              <h4 style={{ marginBottom: "10px", textAlign: "center", fontWeight: "normal" }}>
                Average Drip Score: {averageDrip.toFixed(1)}/10
              </h4>

              {/* Outfit Gallery */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                  overflowY: "auto",
                  paddingTop: "5px",
                }}
              >
                {outfits.map((outfit, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={outfit.photo}
                      alt={`Outfit ${index + 1}`}
                      style={{
                        width: "120px",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        marginBottom: "5px",
                      }}
                    />
                    <p style={{ margin: 0 }}>Drip: {outfit.drip}/10</p>
                  </div>
                ))}
              </div>
            </div>
          </WhiteBox>
        </div>
      </BlueBox>
    </div>
  );
}

export default FitDiary;
