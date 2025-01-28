import Header from "./Header"
import Footer from "./Footer"
import { useEffect } from "react"
import { useLocation } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from "next-themes";


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
            <ThemeProvider>
                <Header />
                {children}
                <Footer />
            </ThemeProvider>
        </main>
    )
}

export default Layout