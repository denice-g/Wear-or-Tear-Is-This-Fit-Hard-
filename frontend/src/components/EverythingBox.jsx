import React from "react";

function EverythingBox({ label = "Click Me", onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "250px",
        height: "50px",
        backgroundColor: "#95CEED",
        borderRadius: "20px",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        border: "2px solid #8abbd8",
      }}
    >
      <span
        style={{
          fontFamily: "'Pixelify Sans', sans-serif",
          fontSize: "18px",
          color: "black",
          fontWeight: 700,
        }}
      >
        {label}
      </span>
    </button>
  );
}

export default EverythingBox;
