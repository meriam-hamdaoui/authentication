import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Authentication from "./components/auth/Authentication";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Authentication />} />
        {/* <Route path="dashboard" element={<AdminDash />}>
          <Route index element={<BlogDashboard />} />
          <Route path="blog-dashboard" element={<BlogDashboard />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
