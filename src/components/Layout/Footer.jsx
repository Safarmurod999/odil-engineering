import React from 'react'
import { Link, useLocation } from 'react-router'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      <section className="forms" style={{ display: pathname == "/contacts" ? "none" : "" }}>
        <div className="container">
          <form className="forms__form" data-aos="zoom-in">
            <h2 className="forms__title title">
              <span>
                Остались вопросы?
              </span>
            </h2>
            <div className="forms__row">
              <input type="text" className='forms__input' placeholder='Как Вас зовут?' />
              <input type="email" className='forms__input' placeholder='Ваша почта' />
              <input type="tel" className='forms__input' placeholder='Ваш телефон' />
            </div>
            <textarea className='forms__textarea' placeholder='Ваше сообщение'></textarea>
            <button type='submit' className='forms__btn'>Отправить</button>
          </form>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer__left" data-aos="zoom-out">
            <p> &copy; Odil Engineering  2015-2025</p>
            <p>OOO «Odil Engineering»</p>

            <Link to="/pravilo">
              Политика конфиденциальности <br />
              Правила копирования и цитирования
            </Link>
          </div>
          <div className="footer__mid" data-aos="zoom-out">
            Uzbekistan, TASHKENT, UCHTEPA area, <br /> CHILANZAR-26 massif, 36
          </div>

          <div className="footer__right" data-aos="zoom-out">
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
    </>
  )
}

export default Footer