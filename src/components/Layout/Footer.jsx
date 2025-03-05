import React from 'react'
import { Link, useLocation } from 'react-router'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createLead } from 'store/slices/leadsSlice';
import { get } from 'lodash';
import { toast } from 'sonner';

const Footer = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(createLead(values)).then((res) => {
      if (res.error) {
        toast.error("Ma'lumotlar to'g'ri kiritilmagan")
      } else {
        toast.success("Muvaffaqiyatli yuborildi")
      }
    });
    resetForm();
  }
  const { handleChange, handleSubmit, values, resetForm } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
    onSubmit,
    enableReinitialize: true
  });

  return (
    <>
      <section className="forms" style={{ display: pathname == "/contacts" ? "none" : "" }}>
        <div className="container">
          <form className="forms__form" data-aos="zoom-in" onSubmit={handleSubmit}>
            <h2 className="forms__title title">
              <span>
                {t('questions')}
              </span>
            </h2>
            <div className="forms__row">
              <input type="text" className='forms__input' name='name' value={get(values, "name", "")} onChange={handleChange} placeholder={t('your_name')} />
              <input type="email" className='forms__input' name='email' value={get(values, "email", "")} onChange={handleChange} placeholder={t('your_email')} />
              <input type="tel" className='forms__input' name='phone' value={get(values, "phone", "")} onChange={handleChange} placeholder={t('your_phone')} />
            </div>
            <textarea className='forms__textarea' name='message' value={get(values, "message", "")} onChange={handleChange} placeholder={t('your_message')}></textarea>
            <button type='submit' aria-label='form-submit' className='forms__btn'>{t('send')}</button>
          </form>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer__left" data-aos="zoom-out">
            <p> &copy; Odil Engineering  2015-2025</p>
            <p>OOO «Odil Engineering»</p>
            <Link aria-label='pravilo' to="/pravilo">
              {t('politics')}
            </Link>
          </div>
          <div className="footer__mid" data-aos="zoom-out">
            {t('our_address')}
          </div>
          <div className="footer__right" data-aos="zoom-out">
            <p><a href="tel:+ 998 77 338 84 48">{t('our_phone')} + 998 77 338 84 48</a></p>
            <p>Email:
              <Link aria-label='email' to="mailto:info@odil-engineering.uz">
                info@odil-engineering.uz
              </Link>
            </p>
            <ul className="social-links">
              <li>
                <Link aria-label='facebook' to="https://www.facebook.com/odilengineering">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link aria-label='instagram' to="https://www.instagram.com/odilengineering">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link aria-label='youtube' to="https://www.youtube.com/odilengineering">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <span>Developed by :</span> <a aria-label='safarmurod' target='_blank' href="https://t.me/UrinovSafarmurod">O'rinov Safarmurod</a> <span>and</span> <a aria-label='sardor' target='_blank' href="https://t.me/vahhobov">Vahhobov Sardor</a>
        </div>
      </footer>
    </>
  )
}

export default Footer