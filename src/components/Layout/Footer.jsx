import React from 'react'
import { Link } from 'react-router'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__left">
          <p> &copy; Odil Engineering  2015-2025</p>
          <p>OOO «Odil Engineering»</p>

          <Link to="/pravilo">
            Политика конфиденциальности <br />
            Правила копирования и цитирования
          </Link>
        </div>
        <div className="footer__mid">
          Uzbekistan, TASHKENT, UCHTEPA area, <br /> CHILANZAR-26 massif, 36
        </div>

        <div className="footer__right">
          <p><a href="tel:+998712000000">Телефон: +998 71 200 00 00</a></p>
          <p>Email:
            <Link to="mailto:info@odil-engineering.uz">
              info@odil-engineering.uz
            </Link>
          </p>
          <ul className="social-links">
            <li>
              <Link to="https://www.facebook.com/odilengineering">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/odilengineering">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/odilengineering">
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer