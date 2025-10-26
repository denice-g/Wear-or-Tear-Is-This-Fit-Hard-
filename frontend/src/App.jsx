import React from "react";
import Login from "./pages/Login.jsx";
import Photo from "./pages/Photo.jsx";
import Welcome from "./pages/Welcome.jsx";
import UserData from "./pages/UserData.jsx";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* {<Photo/>}
      <Photo/> */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<UserData />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
    </div>
  );
}

export default App;
