import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Login from "./pages/Login.jsx";
import UserData from "./pages/UserData.jsx";
import WhatDo from "./pages/WhatDo.jsx";
import Photo from "./pages/Photo.jsx";
import Results from "./pages/Results.jsx";
import FitDiary from "./pages/FitDiary.jsx";
import Preferences from "./pages/Preferences.jsx";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userdata" element={<UserData />} />
      <Route path="/whatdo" element={<WhatDo />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/results" element={<Results />} />
      <Route path="/fitdiary" element={<FitDiary />} />
      <Route path="/preferences" element={<Preferences />} />
    </Routes>
  );
}

export default App;

