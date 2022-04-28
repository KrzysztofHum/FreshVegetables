import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} exact />
    </Routes>
  );
}

export default App;
