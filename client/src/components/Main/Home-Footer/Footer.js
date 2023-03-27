import React from "react";
import './Footer.css'

export default function HomeFooter() {
  return (
    <>
      <div className="footer">
        <div className="mainlogo">
          Sales<span className="itlogo">IT</span>
        </div>
        <ul>
          <li>Privacy policy</li>
          <li>Terms and conditions</li>
          <li>Payment options</li>
        </ul>
        <div className="contact-us">
          <h1>Follow us on:</h1>
          <div className="icons">
            <a href="https://www.linkedin.com/in/erik-todorov-50b60b239/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/todorowwww/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/erik.todorov.2004/">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
