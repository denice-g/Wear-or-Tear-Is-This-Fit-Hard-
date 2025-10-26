import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import background from "../assets/background.png";
import BlueBox from "../components/big_bluebox";
import "../styles/Login.css"; 
import InputBox from "../components/InputBox.jsx";
<<<<<<< HEAD
import Left from "../components/Left.jsx";
=======
>>>>>>> 2d619bcd0ed706e5571100cf2e0e7ab8469fb0a7
import EverythingBox from "../components/EverythingBox.jsx";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError("");
        setLoading(true);

        if (!username || !password){
            setError("Please enter both username and password.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
            });

            const data = await response.json();

            if (response.ok){
                localStorage.setItem("username", username);
                localStorage.setItem("isLoggedIn", "true");

                navigate("/photo");
            } else {
                setError(data.detail || "Login failed")
            }
        } catch (err){
            setError("Network error. Please check you connection and try again.");
            console.error("Login error:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSignup = () => {
        navigate("/signup");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !loading){
            handleLogin();
        }
    };

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
      }}
    >
      <BlueBox width="500px" height="500px">
    <div className= "loginner">
        <h2 className="login-title">WEAR or TEAR</h2>
        <div className=" loginform">
            <InputBox placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <InputBox type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
            />

        </div>
        <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <EverythingBox
<<<<<<< HEAD
              label="LOGIN"
              onClick={() => console.log("Login clicked")}
=======
              label="Login"
              onClick={handleLogin}
              disabled={loading}
>>>>>>> 2d619bcd0ed706e5571100cf2e0e7ab8469fb0a7
            />
          </div>
        <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <EverythingBox
              label="SIGN IN"
              onClick={() => console.log("Login clicked")}
            />
        </div>
    </div>
   

    <div
      style={{
        width: "80%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "10px 15px",
        marginBottom: "-50px", 
      }}
    >
      <Left />
    </div>

    </BlueBox>
        
    </div>
  );
}

export default Login;
