import { useRef, useState } from "react";
import Webcam from "react-webcam";

const Camera = ({ style }) => {
  const photo = useRef(null);
  const [im, setImage] = useState(null);

  const capture = () => {
    const image = photo.current.getScreenshot();
    setImage(image);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {!im ? (
        <Webcam
          ref={photo}
          screenshotFormat="image/png"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <img
          src={im}
          alt="Captured"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}

      <div style={{ marginTop: "6px" }} />
      {!im ? (
        <button
          onClick={capture}
          style={{
            padding: "10px 15px",
            fontSize: "15px",
            borderRadius: "12px",
            cursor: "pointer",
            backgroundColor: "#95CEED",
            border: "2px solid #8abbd8",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            color: "#070707ff",
            fontFamily: "'Pixelify Sans', sans-serif", 
          }}
        >
          Take a Pic
        </button>
      ) : (
        <button
          onClick={() => setImage(null)}
          style={{
            padding: "10px 15px",
            fontSize: "15px",
            borderRadius: "12px",
            cursor: "pointer",
            backgroundColor: "#95CEED",
            border: "2px solid #8abbd8",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            color: "#070707ff",
            fontFamily: "'Pixelify Sans', sans-serif",
          }}
        >
          Retake
        </button>
      )}
    </div>
  );
};

export default Camera;
