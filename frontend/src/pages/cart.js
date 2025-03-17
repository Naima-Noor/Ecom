import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5000/api/products/";

const CartSection = () => {
  const { id } = useParams(); // Get Product ID
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);

    const initialQuantities = savedCart.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, []);

  useEffect(() => {
    if (id) {
      fetch(`${API_URL}${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCart((prevCart) => {
            const updatedCart = [...prevCart, data];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
          });
          setQuantities((prevQuantities) => ({ ...prevQuantities, [data.id]: 1 }));
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id]);

  const handleQuantityChange = (productId, value) => {
    const newQuantity = Math.max(1, parseInt(value) || 1);
    setQuantities((prevQuantities) => ({ ...prevQuantities, [productId]: newQuantity }));
  };

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * (quantities[product.id] || 1);
  }, 0);

  return (
    <div >
      <section id="shopheader" className="cartheader" >
        <h2>#Hello Cart</h2>
        <p>Leave a message. We Would love to hear from you!</p>
      </section>
      <div style={{ paddingBottom: '20px' }}></div>
      <section>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f8f8f8', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '10px', textAlign: 'center' }}>Remove</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Image</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Product</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Price</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Quantity</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ textAlign: 'center', padding: '10px' }}>
                  <button
                    onClick={() => {
                      const newCart = cart.filter((_, i) => i !== index);
                      setCart(newCart);
                      localStorage.setItem("cart", JSON.stringify(newCart));
                    }}
                    style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', color: 'red' }}
                  >
                    ❌
                  </button>
                </td>
                <td style={{ textAlign: 'center', padding: '10px' }}>
                  <img
                    src={`http://localhost:5000${product.image_url}`}
                    alt={product.name}
                    style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }}
                  />
                </td>
                <td style={{ textAlign: 'center', padding: '10px', fontWeight: 'bold' }}>{product.name}</td>
                <td style={{ textAlign: 'center', padding: '10px', color: '#333' }}>Pkr {product.price}</td>
                <td style={{ textAlign: 'center', padding: '10px' }}>
                  <input
                    type="number"
                    value={quantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    style={{ width: '50px', textAlign: 'center', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                  />
                </td>
                <td style={{ textAlign: 'center', padding: '10px', fontWeight: 'bold' }}>Pkr {product.price * (quantities[product.id] || 1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* <div style={{ textAlign: 'left', marginTop: '20px', fontSize: '16px', fontWeight: 'bold' }}>
        Total: Pkr {totalPrice}
      </div> */}
      <section id="cartadd" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupons</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>

        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>Pkr {totalPrice}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>Pkr {totalPrice}</strong>
              </td>
            </tr>
          </table>
          <Link to="/checkout">
            <button className="normal">Proceed to checkout</button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CartSection;
