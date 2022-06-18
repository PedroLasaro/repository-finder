import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repositories from "./Pages/Repositories";
import Home from "./Pages/Home";

export default function Routers() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/Repositories" element={<Repositories></Repositories>} />
          </Routes>
        </BrowserRouter>
    )
}