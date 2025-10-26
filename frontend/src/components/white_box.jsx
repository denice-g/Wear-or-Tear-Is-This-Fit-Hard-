import React from "react"

const WhiteBox=({children,width ="600px", height="600px" })=>{
    return (
        <div
        style={{
            width,
            height,
            background: "#FFFFFF", 
            borderRadius: "20px",
            alignItems:"center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            display:"flex",}}
            
            >{children}</div>

    );
};

export default WhiteBox;