import React from 'react'
import "./footer.css";

const footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Balu</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.facebook.com/" className="footer__social-icon" target="#">
        <i class="bx bxl-facebook"></i>
        </a>

        <a href="https://www.instagram.com/" className="footer__social-icon" target="#">
        <i class="bx bxl-instagram"></i>
        </a>

        <a href="https://www.twitter.com/" className="footer__social-icon" target="/">
        <i class="bx bxl-twitter"></i>
        </a>
            </div>

            <span className="footer__copy">&#160; insiderscoding. All rights reserved</span>
        </div>
    </footer>
  )
}

export default footer