import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5000/api/products/";



const CartSection = () => {
  
    // <div>
    //   <section id="shopheader" className="cartheader">
    //     <h2>#Hello Cart</h2>
    //     <p>Leave a message. We Would love to hear from you!</p>
    //   </section>

    //   <section id="cart" className="section-p1">
    //     <table style={{ width: '100%' }}>
    //       <thead>
    //         <tr>
    //           <td>Remove</td>
    //           <td>Image</td>
    //           <td>Product</td>
    //           <td>Price</td>
    //           <td>Quantity</td>
    //           <td>Subtotal</td>
    //         </tr>
    //       </thead>

    //       <tbody>
    //         <tr>
    //           <td>
    //             <Link to="#">
    //               <i className="far fa-times-circle"></i>
    //             </Link>
    //           </td>
    //           <td>
    //             <img src={img1} alt="" />
    //           </td>
    //           <td>Crocket Dress</td>
    //           <td>Pkr 780</td>
    //           <td>
    //             <input type="number" value="1" />
    //           </td>
    //           <td>Pkr 780</td>
    //         </tr>

    //         <tr>
    //           <td>
    //             <Link to="#">
    //               <i className="far fa-times-circle"></i>
    //             </Link>
    //           </td>
    //           <td>
    //           <img src={img2} alt="" />
    //           </td>
    //           <td>Crocket Dress</td>
    //           <td>Pkr 780</td>
    //           <td>
    //             <input type="number" value="1" />
    //           </td>
    //           <td>Pkr 780</td>
    //         </tr>

    //         <tr>
    //           <td>
    //             <Link to="#">
    //               <i className="far fa-times-circle"></i>
    //             </Link>
    //           </td>
    //           <td>
    //           <img src={img3} alt="" />
    //           </td>
    //           <td>Crocket Dress</td>
    //           <td>Pkr 780</td>
    //           <td>
    //             <input type="number" value="1" />
    //           </td>
    //           <td>Pkr 780</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </section>

    //   <section id="cartadd" className="section-p1">
    //     <div id="coupon">
    //       <h3>Apply Coupons</h3>
    //       <div>
    //         <input type="text" placeholder="Enter Your Coupon" />
    //         <button className="normal">Apply</button>
    //       </div>
    //     </div>

    //     <div id="subtotal">
    //       <h3>Cart Total</h3>
    //       <table>
    //         <tr>
    //           <td>Cart Subtotal</td>
    //           <td>Pkr 1560</td>
    //         </tr>
    //         <tr>
    //           <td>Shipping</td>
    //           <td>Free</td>
    //         </tr>
    //         <tr>
    //           <td>
    //             <strong>Total</strong>
    //           </td>
    //           <td>
    //             <strong>Pkr 1560</strong>
    //           </td>
    //         </tr>
    //       </table>
    //       <Link to="/checkout">
    //         <button className="normal">Proceed to checkout</button>
    //       </Link>
    //     </div>
    //   </section>
    // </div>
    const { id } = useParams(); // Get Product ID
    const [cart, setCart] = useState([]);
  
    // 🛒 Load cart from Local Storage when component mounts
    useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
    }, []);
  
    // 🆕 Fetch product and add to cart
    useEffect(() => {
      if (id) {
        fetch(`${API_URL}${id}`)
          .then((res) => res.json())
          .then((data) => {
            setCart((prevCart) => {
              const updatedCart = [...prevCart, data];
              localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save in Local Storage
              return updatedCart;
            });
          })
          .catch((error) => console.error("Error fetching product:", error));
      }
    }, [id]);
  
    return (
      <div>
      <section id="shopheader" className="cartheader">
           <h2>#Hello Cart</h2>
         <p>Leave a message. We Would love to hear from you!</p>
        </section>
  
        <section id="cart" className="section-p1">
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <td >Remove</td>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr key={index}>
                  <td>
                    <button style={{border:'0px', paddingRight:'2px'}}
                      onClick={() => {
                        const newCart = cart.filter((_, i) => i !== index);
                        setCart(newCart);
                        localStorage.setItem("cart", JSON.stringify(newCart));
                      }}
                    >
                      ❌
                    </button>
                  </td>
                  <td>
                    <img
                      src={`http://localhost:5000${product.image_url}`}
                      alt={product.name}
                      style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>Pkr {product.price}</td>
                  <td>
                    <input type="number" defaultValue="1" />
                  </td>
                  <td>Pkr {product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  };

export default CartSection;
