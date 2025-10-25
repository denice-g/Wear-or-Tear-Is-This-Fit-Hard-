import { useRef, useState } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const photo = useRef(null);
  const [im, setImage] = useState(null);

  const capture = () => {
    const image = photo.current.getScreenshot();
    setImage(image);
  };

  return (
    <div className="container">
      {!im ? (
        <Webcam
          ref={photo}
          height={1000}
          width={600}
          screenshotFormat="image/png"
        />
      ) : (
        <img
          src={im}
          alt="Worked"
          width={600}
          height={600}
        />
      )}

      <div style={{ marginTop: "10px" }} />
      {!im ? (
        <button onClick={capture}>Take a Pic</button>
      ) : (
        <button onClick={() => setImage(null)}>You didn't slay. Retake</button>
      )}
    </div>
  );
};

export default Camera;
