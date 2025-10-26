import React from "react";
import { useNavigate } from "react-router-dom";
import Rarrow from "../assets/Rarrow.png";


function Right({to}){ 
  const navigate = useNavigate();
  return (
      <button 
      onClick={()=>navigate(to)}
      style={{
            width: "45px",
            height:"45px",
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
          src={Rarrow}
          alt="Rarrow"
          style={{ width: "100%", height: "100%", objectFit: "cover",borderRadius: "inherit"}}/>   
    </button>

  );
}

export default Right;
