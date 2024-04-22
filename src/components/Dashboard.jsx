import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { ProductProvider } from "../ProductContext/ProductContext";
import Sidebar, { SidebarItem } from "../components/Sidebar";

import Home from "../components/Home";
import ProductIndex from "../components/products/ProductIndex"; // Ganti ProductIndex dengan Home
import ProductCreate from "../components/products/ProductCreate";
import ProductEdit from "../components/products/ProductEdit";

export default function Dashboard() {
  return (
    <ProductProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar>
          <Link to="/">
            <SidebarItem text="Home" />
          </Link>
          <Link to="/dashboard/products">
            <SidebarItem text="Products" />
          </Link>
          <Link to="/products">
            <SidebarItem text="Tipe Produk" />
          </Link>
         
        </Sidebar>
        {/* Main content */}
        <div className="flex-grow bg-slate-200">
          <div className="max-w-7xl mx-auto min-h-screen">
            <Routes>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/dashboard/products" element={<ProductIndex />} />
              <Route path="/products/create" element={<ProductCreate />} />
              <Route path="/products/:id/edit" element={<ProductEdit />} />
            </Routes>
          </div>
        </div>
      </div>
    </ProductProvider>
  )
}
