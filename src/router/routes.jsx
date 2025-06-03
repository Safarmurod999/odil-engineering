import { Route, Routes, useLocation } from "react-router";
import { landingRoutes,adminRoutes } from "./data";
import {
  NotFound,
  Login,
} from "../pages/index";
import { Layout } from "../components/Layout/index"
import ProtectedRoute from "./ProtectedRoute";

const RouterApp = () => {
  const route = useLocation();

  return (
    <>
      <Routes>
        {landingRoutes.map((route, index) => {
          const RouteComponent = route.component;
          return (
            <Route
              key={index}
              index={route.path == "/"}
              path={route.path}
              element={
                <Layout>
                  <RouteComponent />
                </Layout>
              }
            />
          );
        })}
        <Route
          element={<ProtectedRoute />}
        >
          {adminRoutes.map((route, index) => {
            const RouteComponent = route.component;
            return (
              <Route
                key={index}
                index={route.path == "/admin" && true}
                path={route.path}
                element={
                  <Layout>
                    <RouteComponent />
                  </Layout>
                }
              />
            );
          })}
        </Route>
        <Route path={"/auth/login"} element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
};

export default RouterApp;
