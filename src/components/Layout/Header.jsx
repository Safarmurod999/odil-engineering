import React from 'react'
import { Link, useLocation } from 'react-router'
import logo from "../../assets/icons/logo.svg"

const navLinks = [
    {
        id: 0,
        title: 'Конвейеры',
        to: '/'
    },
    {
        id: 1,
        title: 'О компании',
        to: '/about'
    },
    {
        id: 2,
        title: 'Клиенты',
        to: '/clients'
    },
    {
        id: 3,
        title: 'Сервис',
        to: '/services'
    },
    {
        id: 4,
        title: 'Проекты',
        to: '/projects'
    },
    {
        id: 5,
        title: 'Поставщикам',
        to: '/suppliers'
    },
    {
        id: 6,
        title: 'Контакты',
        to: '/contacts'
    }
]
const Header = () => {
    const route = useLocation();
    console.log(route.pathname);

    return (
        <nav className='navbar'>
            <div className="container">
                <div className="navbar__top">
                    <div className="navbar__logo">
                        <Link to={'/'} >
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="navbar__contacts">
                        <a href="tel:8 495 150 55 27"> 95 150 55 27 (Ташкент)</a>
                        <a href="tel:8 800 500-83-24"> 90 500-83-24 (бесплатно)</a>
                        <a href="mailto:info@odil-engineering.uz">info@odil-engineering.uz</a>
                    </div>
                </div>

            </div>
            <div className="navbar__bottom">
                <div className="container">
                    <ul className="navbar__menu">
                        {
                            navLinks.map((item) => {
                                return (
                                    <li key={item.id} className={`navbar__menu-item ${route.pathname == item.to ? 'active' : ''}`}>
                                        <Link to={item.to}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header