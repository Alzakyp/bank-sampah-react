import React, { useState, useEffect } from 'react';
import { fetchProducts, fetchProductTypes, deleteProduct } from "../services/productService";
import ProductCreate from "./ProductCreate";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Sidebar from '../Sidebar';

const ProductIndex = () => {
  const [products, setProducts] = useState([]);
  const [productTypes, setProductTypes] = useState({});
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol modal

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchData = async () => {
      setIsLoading(true);
      const productsData = await fetchProducts();
      setProducts(productsData);
      const productTypeIds = productsData.map((product) => product.id_type);
      const productTypesData = await fetchProductTypes(productTypeIds);
      setProductTypes(productTypesData);
      setIsLoading(false);
  };

  useEffect(() => {
      const fetchDataEffect = async () => {
          await fetchData();
      };
      fetchDataEffect();
  }, []);

  const handleDelete = async (productId) => {
    const isSuccess = await deleteProduct(productId);
    if (isSuccess) {
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
      Swal.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success"
      });
    }
  };

  const filteredProducts = products.filter((product) =>
      product.nama.toLowerCase().includes(searchKeyword.toLowerCase())
  );
    return (
      <div className="mt-17">
        <div className="flex justify-between m-2 py-6 px-2 items-center">
        <button onClick={openModal} className="px-4 py-2 bg-yellow-500 hover:bg-yellow-700 text-black rounded-md">Tambah Produk</button>
        {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal}>&times;</button>
            <ProductCreate closeModal={closeModal} />
          </div>
        </div>
      )}  
          <input
            type="text"
            placeholder="Search"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded-md mr-1"
          /> 
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-green-400 text-center">
            <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-green-400">
              <tr>
                <th scope="col" className="px-6 py-3 bg-green-400 text-white">
                  id
                </th>
                <th scope="col" className="px-6 py-3 bg-green-400 text-white">
                  name
                </th>
                <th scope="col" className="px-6 py-3 bg-green-400 text-white">
                  price
                </th>
                <th scope="col" className="px-6 py-3 bg-green-400 text-white">
                  type
                </th>
                <th scope="col" className="px-6 py-3 bg-green-400 text-white">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 bg-green-400 text-white">
                  image
                </th>
                <th scope="col" className="px-6 py-3 bg-green-400 text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <tr key={product.id} className="bg-white uppercase border-b dark:bg-white-800 dark:border-gray-700 text-black">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{product.nama}</td>
                    <td className="px-6 py-4">{product.harga}</td>
                    <td className="px-6 py-4">
                      {productTypes[product.id_type]?.name}
                    </td>
                    <td className="px-6 py-4">{product.deskripsi}</td>
                    <td className="px-6 py-4">
                      <img src={"http://127.0.0.1:8000/" + product.gambar} alt="" width={50} height={90}/>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleDelete(product.id)} className="bg-red-500 hover:bg-red-700 text-white font-medium py-1 px-3 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M2 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H2V5zm14 3H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-1 7H5a1 1 0 0 1-1-1V11h12v3a1 1 0 0 1-1 1z"/>
                        </svg>
                        Delete
                      </button>
                      <Link to={`/products/edit/${product.id}`} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M2 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H2V5zm14 3H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-1 7H5a1 1 0 0 1-1-1V11h12v3a1 1 0 0 1-1 1z"/>
                        </svg>
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    Product not found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
       
      </div>
    );
};

export default ProductIndex;
