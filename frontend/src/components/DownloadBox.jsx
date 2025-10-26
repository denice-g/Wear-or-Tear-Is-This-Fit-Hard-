import React from "react";
import Download from "../assets/Download.png";


function DownloadBox(){ 
  return (
      <button 
      onClick={()=>{}}
      style={{
            width: "120px",
            height:"70px",
            backgroundColor: "#95CEED ", 
            borderRadius: "20px",
            cursor: "pointer",
            alignItems: "center",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            display:"flex",
            border: "2px solid #8abbd8", 
            }}
          >
        <img
          src={Download}
          alt="littlecamera"
          style={{ width: "100%", height: "100%", objectFit: "contain",borderRadius: "inherit"}}/>   
    </button>

  );
}

export default DownloadBox;
