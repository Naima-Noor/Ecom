import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

function ContactSection() {
  return (
    <div>
      <section id="shopheader" className="aboutheader">
        <h2>#Lets Talk</h2>
        <p>Leave a message. We Would love to hear from you!</p>
      </section>
      <section id="contactdetails" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit our shop or contact us today</h2>
          <h3>Head Office</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faSearchLocation} style={{ fontSize: '24px' }} />
              <p>   Mansehra, Pakistan</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '24px' }} />
              <p>   Naima24@gmail.com</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: '24px' }} />
              <p>   +92 311 98765432</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} style={{ fontSize: '24px' }} />
              <p>   10.00am-5pm Monday-Saturday</p>
            </li>
          </ul>
        </div>
        <div className="map">
          <iframe
            title="myframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13182.521930029974!2d73.19629104689974!3d34.30895959335413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3c7525c27db5%3A0x4c67e1837b4751e6!2sGhazikot%20Twp%20Mansehra%2C%20Mansehra%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1681659953897!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
