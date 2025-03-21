import React, { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "./config";
function UploadProducts() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null, // Store the image file
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/products`);

      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please select an image.");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("image", formData.image);

    try {
      await axios.post(`${API_URL}/api/products`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product added successfully!");
      fetchProducts();
      setFormData({ name: "", description: "", price: "", image: null });
    } catch (error) {
      console.error("Error adding product:", error.response?.data || error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form className="mb-4 p-4 border rounded shadow" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 mb-2 border rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="w-full p-2 mb-2 border rounded"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-2 mb-2 border rounded"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 mb-2 border rounded"
          onChange={handleFileChange}
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Add Product
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <section id="product1" className="section-p1">
        <div className="pro-container grid grid-cols-1 md:grid-cols-3 gap-2">
          {products.map((product) => (
            <div key={product.id} className="pro p-4 border rounded shadow">
              <img
                src={`http://localhost:5000${product.image_url}`}
                alt={product.name}
                className="w-full h-40 object-cover mb-2"
              />
              <div className="des">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <div className="price-cart">
                  <h4 style={{ color: "#088178" }}>Pkr {product.price}</h4>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}

export default UploadProducts;
