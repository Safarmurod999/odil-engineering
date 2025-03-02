import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import logo from "../../assets/icons/logo.svg"
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";
import ThemeSwitcher from './ThemeSwitcher';
import { useLanguage } from 'utils/context';

const navLinks = [
    {
        id: 0,
        title_ru: 'Конвейеры',
        title_uz: 'Konveyerlar',
        title_en: 'Conveyors',
        to: '/'
    },
    {
        id: 1,
        title_ru: 'О компании',
        title_uz: 'Kompaniya haqida',
        title_en: 'About Us',
        to: '/about'
    },
    {
        id: 2,
        title_ru: 'Клиенты',
        title_uz: 'Mijozlar',
        title_en: 'Clients',
        to: '/clients'
    },
    {
        id: 3,
        title_uz: 'Servis',
        title_ru: 'Сервис',
        title_en: 'Service',
        to: '/services'
    },
    {
        id: 4,
        title_ru: 'Проекты',
        title_uz: 'Loyihalar',
        title_en: 'Projects',
        to: '/projects'
    },
    {
        id: 6,
        title_ru: 'Контакты',
        title_uz: 'Aloqa',
        title_en: 'Contacts',
        to: '/contacts'
    }
]
const Header = () => {
    const route = useLocation();
    const { lang, setLang } = useLanguage();
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
                                <div onClick={() => { setLang('ru'); localStorage.setItem('lang', JSON.stringify('ru')); setActiveLang(false) }}>ru</div>
                                <div onClick={() => { setLang('uz'); localStorage.setItem('lang', JSON.stringify('uz')); setActiveLang(false) }}>uz</div>
                                <div onClick={() => { setLang('en'); localStorage.setItem('lang', JSON.stringify('en')); setActiveLang(false) }}>en</div>
                            </div>
                        </div>
                        <div className="navbar__contacts">
                            <a href="tel:8 495 150 55 27">+998 95 150 55 27</a>
                            <a href="tel:8 800 500-83-24">+998 90 500-83-24</a>
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
                                        <Link to={item.to}>{item["title_" + lang]}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="navbar__contacts navbar__bottom-contacts">
                        <a href="tel:8 495 150 55 27">+998 95 150 55 27</a>
                        <a href="tel:8 800 500-83-24">+998 90 500-83-24</a>
                        <a href="mailto:info@odil-engineering.uz">info@odil-engineering.uz</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header