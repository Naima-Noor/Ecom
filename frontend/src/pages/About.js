
import React from 'react';

const About = () => {
  return (
    <React.Fragment>
      <section id="shopheader" className="aboutheader">
        <h2>#KnowUs</h2>
        <p>“Remember the carefree days of childhood, when you didn’t feel guilty about eating mountains of cereal with questionable nutrition?”</p>
      </section>

      <section id="abouthead" className="section-p1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacdySB9K4cE2YoVRnNjdqZ5FZ8DRIwBXuzQ&usqp=CAU" alt="" />
        <div>
          <h2>About Us</h2>
          <p>Welcome to our ecommerce website! We are a dedicated team of professionals committed to providing you with an exceptional online shopping experience. Our website offers a wide range of products from various categories, all of which are carefully curated to ensure that you receive only the highest quality items. Our goal is to make your shopping experience as seamless and enjoyable as possible, from browsing our extensive selection to placing your order and receiving your products. We take pride in providing excellent customer service and are always here to help with any questions or concerns you may have. Thank you for choosing our website for your shopping needs, and we look forward to serving you</p>
          <p>Empowering the world to design</p>
          <br /><br />
          <p>Thanks for visiting and knowing about us. We are sure your experience with us would be great.</p>
        </div>
      </section>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GQjuEygcS3A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default About;
