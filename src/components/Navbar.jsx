import React from 'react';
import LogoImage from "../image/IMG_3998 2.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex justify-between items-start p-12 bg-white text-green-400">
  <div>
    <img src={LogoImage} alt="Logo" style={{ width: '359px', height: 'auto' }} />
  </div>
  <div className="relative">
    <input
      type="text"
      placeholder="Search Plant"
      className="bg-green-100 border border-green-400 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-green-500"
      list="plants"
      style={{ width: '840px' }}
    />
    <datalist id="plants">
      <option value="Cactus" />
      <option value="Fern" />
      <option value="Rose" />
      <option value="Tulip" />
      {/* Tambahkan opsi lain sesuai dengan kebutuhan */}
    </datalist>
  </div>
  <div className="flex space-x-4">
    <Link to="/" className="hover:text-gray-300">Home</Link>
    <Link to="/about" className="hover:text-gray-300">About</Link>
    <Link to="/catalog" className="hover:text-gray-300">Catalog</Link>
  </div>
  
</div>

  );
}
