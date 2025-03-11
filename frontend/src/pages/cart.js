import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './images/img1.JPG';
import img2 from './images/img2.JPG';
import img3 from './images/img3.JPG';



const CartSection = () => {
  return (
    <div>
      <section id="shopheader" className="cartheader">
        <h2>#Hello Cart</h2>
        <p>Leave a message. We Would love to hear from you!</p>
      </section>

      <section id="cart" className="section-p1">
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <Link to="#">
                  <i className="far fa-times-circle"></i>
                </Link>
              </td>
              <td>
                <img src={img1} alt="" />
              </td>
              <td>Crocket Dress</td>
              <td>Pkr 780</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>Pkr 780</td>
            </tr>

            <tr>
              <td>
                <Link to="#">
                  <i className="far fa-times-circle"></i>
                </Link>
              </td>
              <td>
              <img src={img2} alt="" />
              </td>
              <td>Crocket Dress</td>
              <td>Pkr 780</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>Pkr 780</td>
            </tr>

            <tr>
              <td>
                <Link to="#">
                  <i className="far fa-times-circle"></i>
                </Link>
              </td>
              <td>
              <img src={img3} alt="" />
              </td>
              <td>Crocket Dress</td>
              <td>Pkr 780</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>Pkr 780</td>
            </tr>
          </tbody>
        </table>
      </section>

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
              <td>Pkr 1560</td>
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
                <strong>Pkr 1560</strong>
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
