import React from 'react'
import { Link, useLocation } from 'react-router'
import notfound from '../../assets/videos/notfound.gif'
import { useTranslation } from 'react-i18next';
const NotFound = () => {
  let route = useLocation();
  const {t} = useTranslation()
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__title">
          404
        </div>
        <img src={notfound} alt="animation" />
        <div className="h1">
          
        </div>
        {route.pathname.startsWith("/dashboard") ? (
          <Link
            to={"/admin"}
          >
            {t('main_page')}
          </Link>
        ) : (
          <Link
            to={"/"}
          >
            {t('main_page')}
          </Link>
        )}
      </div>
    </section>)
}

export default NotFound