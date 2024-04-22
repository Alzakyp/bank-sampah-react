import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export const ProductCreate = ({ closeModal, onProductSubmit }) => {
  const [formData, setFormData] = useState({
    nama: '',
    harga: '',
    id_type: '',
    deskripsi: '',
    gambar: '',
  });

  const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    const getProductTypes = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/typeproduct");
        if (response.data && Array.isArray(response.data.data)) {
          const productTypesArray = response.data.data;
          setProductTypes(productTypesArray);
        } else {
          console.error('Error fetching product types: Invalid response structure');
        }
      } catch (error) {
        console.error('Error fetching product types:', error);
      }
    };

    getProductTypes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileInput = document.querySelector('#gambar');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('nama', formData.nama);
      formDataToSend.append('harga', formData.harga);
      formDataToSend.append('id_type', parseInt(formData.id_type));
      formDataToSend.append('deskripsi', formData.deskripsi);
      formDataToSend.append('gambar', fileInput.files[0]);

      const response = await axios.post('http://127.0.0.1:8000/api/products/', formDataToSend);
      console.log(response.data);
      setFormData({
        nama: '',
        harga: '',
        id_type: '',
        deskripsi: '',
        gambar: '',
      });
      closeModal();
      onProductSubmit();

      Swal.fire({
        title: "Success!",
        text: "Your product has been added.",
        icon: "success"
      });
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center bg-black bg-opacity-50">
      <div className="w-full md:w-3/4 p-6 bg-white rounded-lg shadow-lg md:space-x-4">
        <div className="flex justify-between mb-6 px-4">
          <h2 className="text-2xl font-bold mb-4">Form Tambah Produk</h2>
          <button onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama Produk :</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="mt-1 px-3 py-2 block w-full border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="harga" className="block text-sm font-medium text-gray-700">Harga Produk:</label>
            <input
              type="text"
              id="harga"
              name="harga"
              value={formData.harga}
              onChange={handleChange}
              required
              className="mt-1 px-3 py-2 block w-full border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="id_type" className="block text-sm font-medium text-gray-700">Tipe Produk:</label>
            <select
              id="id_type"
              name="id_type"
              value={formData.id_type}
              onChange={handleChange}
              required
              className="mt-1 px-3 py-2 block w-full border rounded-md focus:outline-none focus:border-indigo-500"
            >
              <option value="" disabled>Masukkan Type Produk</option>
              {productTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700">Deskripsi Produk:</label>
            <textarea
              id="deskripsi"
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              required
              className="mt-1 px-3 py-2 block w-full border rounded-md focus:outline-none focus:border-indigo-500"
              rows={4}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gambar" className="block text-sm font-medium text-gray-700">Gambar:</label>
            <input
              type="file"
              id="gambar"
              name="gambar"
              onChange={handleChange}
              required
              className="mt-1 px-3 py-2 block w-full border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-start">
            <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md">
              Submit
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default ProductCreate;
