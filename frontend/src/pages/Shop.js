import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import API_URL from "./config";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Products:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <React.Fragment>
      <section id="shopheader" className="blogheader">
        <h2>#Stayhome</h2>
        <p>Save more with coupons & upto 70% off!</p>
      </section>

      <section id="product1" className="section-p1">
        <div className="pro-container grid grid-cols-1 md:grid-cols-3 gap-2">
          {currentProducts.map((product) => ( // ✅ Fix: Use currentProducts instead of products
            <div key={product.id} className="pro p-4 border rounded shadow">
              <img
                src={`${API_URL}${product.image_url}`}
                alt={product.name}
                className="w-full h-40 object-cover mb-2"
              />
              <div className="des">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <div className="price-cart">
                  <h4 style={{ color: "#088178" }}>Pkr {product.price}</h4>
                  <Link to="/cart">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="cart"
                      style={{ fontSize: "20px", color: "#088178" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section id="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <Link
            key={index}
            to="#"
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </Link>
        ))}

        {currentPage < totalPages && (
          <Link to="#" onClick={() => handlePageChange(currentPage + 1)}>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        )}
      </section>


    </React.Fragment>
  );
}

export default ShopPage;

