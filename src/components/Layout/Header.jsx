import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import logo from "../../assets/icons/logo.svg"
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";
import ThemeSwitcher from './ThemeSwitcher';

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
    // {
    //     id: 5,
    //     title: 'Поставщикам',
    //     to: '/suppliers'
    // },
    {
        id: 6,
        title: 'Контакты',
        to: '/contacts'
    }
]
const Header = ({ lang, setLang }) => {
    const route = useLocation();

    const [toggleNav, setToggleNav] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeLang, setActiveLang] = useState(false);
    useEffect(() => {
        setToggleNav(false)
    }, [route])
    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > 70 && toggleNav === false) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    };
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [lastScrollY]);
    return (
        <nav className={`navbar ${!show ? 'shrink' : ''}`} >
            <div className="container">
                <div className="navbar__top">
                    <div className="navbar__logo">
                        <Link to={'/'} >
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className='navbar__btns'>
                        <ThemeSwitcher />
                        <div className="navbar__lang">
                            <button className='navbar__lang-btn' onClick={() => setActiveLang(true)}>{lang}</button>
                            <div className={`navbar__lang-list ${activeLang ? 'active' : ''}`}>
                                <div onClick={() => { setLang('ru');localStorage.setItem('lang',JSON.stringify('ru')); setActiveLang(false) }}>ru</div>
                                <div onClick={() => { setLang('uz');localStorage.setItem('lang',JSON.stringify('uz')); setActiveLang(false) }}>uz</div>
                                <div onClick={() => { setLang('en');localStorage.setItem('lang',JSON.stringify('en')); setActiveLang(false) }}>en</div>
                            </div>
                        </div>
                        <div className="navbar__contacts">
                            <a href="tel:8 495 150 55 27"> 95 150 55 27 (Ташкент)</a>
                            <a href="tel:8 800 500-83-24"> 90 500-83-24 (бесплатно)</a>
                            <a href="mailto:info@odil-engineering.uz">info@odil-engineering.uz</a>
                        </div>
                        <button className="navbar__toggle" onClick={() => setToggleNav(!toggleNav)}>

                            {
                                toggleNav ? <RiCloseLargeFill /> : <RiMenu3Fill />
                            }

                        </button>
                    </div>
                </div>

            </div>
            <div className={`navbar__bottom ${toggleNav ? 'active' : ''}`}>
                <div className="container">
                    <ul className={`navbar__menu`}>
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

                    <div className="navbar__contacts navbar__bottom-contacts">
                        <a href="tel:8 495 150 55 27"> 95 150 55 27 (Ташкент)</a>
                        <a href="tel:8 800 500-83-24"> 90 500-83-24 (бесплатно)</a>
                        <a href="mailto:info@odil-engineering.uz">info@odil-engineering.uz</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header