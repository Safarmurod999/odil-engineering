import { useEffect, useState } from "react"
import { useLocation } from "react-router";
import { ThemeProvider } from "next-themes";
import Header from "./Header"
import Footer from "./Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import i18n from "../../utils/i18n";
import AdminNavbar from "./AdminNavbar";
import { Toaster } from "sonner";
import Sidebar from "./Sidebar";


const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const [lang, setLang] = useState(JSON.parse(localStorage.getItem('lang')) || 'ru');
    // const { toggleSidebar } = useSelector((state) => state.state);

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
        <ThemeProvider>
            {
                location.pathname.startsWith('/admin') ? (
                    <>
                        <div className="admin-layout">
                            <Sidebar
                            // toggleSidebar={toggleSidebar}
                            />
                            <main
                            //  className={`min-h-full ${toggleSidebar ? "admin-content" : ""}`}
                            >
                                <AdminNavbar
                                // toggleSidebar={toggleSidebar} 
                                />
                                {children}
                            </main>
                            <Toaster />

                        </div>
                    </>
                ) : (
                    <>
                        <main>
                            <Header lang={lang} setLang={setLang} />
                            {children}
                            <Footer />
                        </main>

                    </>
                )
            }
        </ThemeProvider>
    )
}

export default Layout