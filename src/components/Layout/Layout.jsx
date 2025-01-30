import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import { useLocation } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from "next-themes";
import i18n from "../../utils/i18n";


const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const [lang, setLang] = useState(JSON.parse(localStorage.getItem('lang')) || 'ru');

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <main>
            <ThemeProvider>
                <Header lang={lang} setLang={setLang}/>
                {children}
                <Footer />
            </ThemeProvider>
        </main>
    )
}

export default Layout