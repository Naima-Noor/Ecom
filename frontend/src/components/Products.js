import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ products, currentProducts, handlePageChange, totalPages, currentPage }) => {
  return (
    <>
      <section id="product1" className="section-p1">
        <div className="pro-container grid grid-cols-1 md:grid-cols-3 gap-2">
          {currentProducts.map((product) => (
            <div key={product.id} className="pro p-4 border rounded shadow">
              <img
                src={`http://localhost:5001${product.image_url}`}
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

      {/* Pagination Section */}
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
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        )}
      </section>
    </>
  );
};

export default Product;
