import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "./PrivateRouter";

const Approuter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login/:id" element={<PrivateRouter />}>
            <Route path="" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Approuter;
