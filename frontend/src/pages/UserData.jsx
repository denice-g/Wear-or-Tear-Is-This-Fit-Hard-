import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.png";
import BlueBox from "../components/big_bluebox";
import "../styles/Login.css"; 
import InputBox from "../components/InputBox.jsx";
import EverythingBox from "../components/EverythingBox.jsx";
import Left from "../components/Left.jsx";

function UserData() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError("");
    setLoading(true);

    if (!username || !password || !firstName || !lastName || !email){
      setError("Please enter all information needed.")
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/register", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          username: username,
          password: password

        }),
      });

      const data = await response.json();

      if (response.ok){
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("firstname", firstName);
        localStorage.setItem("lastname", lastName);
        localStorage.setItem("email", email);

        navigate("/photo");
      } else {
        setError(data.detail || "Sign up failed")
      }
    } catch (err){
      setError("Network error. Please check your connection and try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = () => {
    if (email.key === "Enter" && !loading) {
      handleSignUp();
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
        <h2 className="login-title" style={{ marginTop: "10px" }}>WEAR or TEAR </h2>
        <div className=" loginform" style={{ marginTop: "10px" }}>
            <InputBox type="firstname" placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <InputBox  type="lastname" placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <InputBox type="email" placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <InputBox  type="username" placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <InputBox type="password"  placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
        </div>
          
        <div
            style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <div style={{ marginRight: "150px" }}> 
                <Left />
            </div>
            <EverythingBox
                label="Sign"
                onClick={handleSignUp} 
            />
            </div>
    </div>
        
    </BlueBox>
    </div>
  );
}

export default UserData;
