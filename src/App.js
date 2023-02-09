import React from "react";
import BootstrapCard from "./Image"
import Form from "./Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<BootstrapCard />} />
    <Route path="/form" element={<Form />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}
