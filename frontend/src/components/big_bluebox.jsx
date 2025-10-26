import React from "react"

const BlueBox = ({ children, width = "600px", height = "600px" }) => {
  return (
    <div
      style={{
        width,
        height,
        background: "linear-gradient(to bottom right, #B9DFE8, #EDFEFF)", 
        borderRadius: "20px",
        alignItems: "center",         // added
        justifyContent: "center",
        flexDirection: "column",      // added
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};

export default BlueBox;
