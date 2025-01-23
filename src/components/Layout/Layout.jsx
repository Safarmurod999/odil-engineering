import Header from "./Header"
import Footer from "./Footer"
import { useEffect } from "react"
import { useLocation } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Layout = ({ children }) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Layout