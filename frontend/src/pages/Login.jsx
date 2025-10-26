import React from "react"
import background from "../assets/background.png";
import BlueBox from "../components/big_bluebox";

function Login(){
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
            border: "10px #0077b6"
        }}>
        <BlueBox width="500px" height="600px">
        <h2 style={{textAlign: "left", marginTop:"10px"}}>
            WEAR or TEAR</h2>
      </BlueBox>
    </div>
        
        
    );
}
export default Login;