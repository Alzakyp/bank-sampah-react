import axios from "axios";

export const fetchProducts = async () => {
  try {
    const apiSkills = await axios.get(
      "http://127.0.0.1:8000/api/products/"
    );
    return apiSkills.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductTypes = async (productIds) => {
  try {
    const uniqueProductTypeIds = [...new Set(productIds)];
    const productTypesData = {};

    for (const typeId of uniqueProductTypeIds) {
      const typeData = await axios.get(
        `http://127.0.0.1:8000/api/typeproduct/${typeId}`
      );
      productTypesData[typeId] = typeData.data.data;
    }

    return productTypesData;
  } catch (error) {
    console.error("Error fetching product types:", error);
    return {};
  }
};

export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`http://127.0.0.1:8000/api/products/${productId}`);
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    return false;
  }
};
