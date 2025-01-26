import React from 'react'
import { Link, useLocation } from 'react-router'
import notfound from '../../assets/videos/notfound.gif'
const NotFound = () => {
  let route = useLocation();

  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__title">
          404
        </div>
        <img src={notfound} alt="animation" />
        <div className="h1">
          Такой страницы не существует.
        </div>
        {route.pathname.startsWith("/dashboard") ? (
          <Link
            to={"/admin"}
          >
            Главная страница
          </Link>
        ) : (
          <Link
            to={"/"}
          >
            Главная страница
          </Link>
        )}
      </div>
    </section>)
}

export default NotFound