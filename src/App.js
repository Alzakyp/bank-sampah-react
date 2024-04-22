import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import ProductIndex from "./components/products/ProductIndex"
import ProductCreate from "./components/products/ProductCreate";
import ProductEdit from "./components/products/ProductEdit";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/dashboard/products" element={<ProductIndex />} />
        <Route path="/products/create" element={<ProductCreate />} />
        {/* <Route path="/products/:id/edit" element={<ProductEdit />} /> */}
      </Routes>
    </div>
  );
}

export default App;
