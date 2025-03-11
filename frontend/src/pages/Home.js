import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import f1 from './images/f1.png';
import f2 from './images/f2.png';
import f3 from './images/f3.png';
import f4 from './images/f4.png';
import f5 from './images/f5.png';
import f6 from './images/f6.png';
import img1 from './images/img1.JPG';
import img2 from './images/img2.JPG';
import img5 from './images/img5.JPG';
import img6 from './images/img6.JPG';
import ShopPage from './Shop';

function MainSection() {
  return (
    <section id="main" style={{ backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod/images/cookie-bouquet-recipe-1557158171.jpg?crop=1xw:0.5625xh;center,top&resize=1200:*)' }}>
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more with coupons & upto 70% off!</p>
      <button>Shop Now</button>
    </section>
  );
}

function FeaturedProductSection() {
  return (
    <section id="feature" className="section-p1">
      <div className="fe-box">
        <img src={f1} alt="" />
        <h6>Free Shipping</h6>
      </div>

      <div className="fe-box">
        <img src={f2} alt="" />
        <h6>Order Online</h6>
      </div>

      <div className="fe-box">
        <img src={f3} alt="" />
        <h6>Save Money</h6>
      </div>

      <div className="fe-box">
        <img src={f4} alt="" />
        <h6>Promotions</h6>
      </div>

      <div className="fe-box">
        <img src={f5} alt="" />
        <h6>Happy Sell</h6>
      </div>

      <div className="fe-box">
        <img src={f6} alt="" />
        <h6>F24/7 Support</h6>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>New Modern Designs</p>
 <ShopPage/>
    </section>
  );
}

function Home() {
  return (
    <div>
      <MainSection />
      <FeaturedProductSection />
      <FeaturedProducts />
    </div>
  );
}

export default Home;
