import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";

const Approuter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id" element={<MovieDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Approuter;
