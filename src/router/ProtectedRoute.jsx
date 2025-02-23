import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectAuthData } from "../store/selectors/auth";
import ScrollToTop from "./ScrollToTop";
const ProtectedRoute = () => {
    const { isAuthenticated } = useSelector(selectAuthData);
    return (
        <ScrollToTop>
            {
                isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />
            }
        </ScrollToTop>
    )
};

export default ProtectedRoute;