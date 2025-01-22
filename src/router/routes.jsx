import { Route, Routes, useLocation } from "react-router";
import { Home, About, NotFound } from "../pages/index";
import { Layout } from "../components/Layout/index"
import ProtectedRoute from "./ProtectedRoute";
const landingRoutes = [
  {
    id: 0,
    path: "/",
    component: Home,
  },
  {
    id: 1,
    path: "/about",
    component: About,
  },
];

const adminRoutes = [
  {
    id: 0,
    path: "/admin/",
    component: Home,
  },
  {
    id: 1,
    path: "/admin/about",
    component: About,
  },
];
const RouterApp = () => {
  const route = useLocation();

  return (
    <>
      {/* {route.pathname == "/login" ? (
        <Routes>
          <Route path={"/login"} element={<Login />} />
        </Routes>
      ) : route.pathname == "/register" ? (
        <Routes>
          <Route path={"/register"} element={<Register />} />
        </Routes>
      ) : */}
      {
        // !route.pathname.startsWith("/dashboard") ? (
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

          <Route path="*" element={<NotFound />} />
        </Routes>
        // ) : (
        //   <Routes>
        //     <Route
        //       element={<ProtectedRoute />}
        //     >
        //       {adminRoutes.map((route, index) => {
        //         const RouteComponent = route.component;
        //         return (
        //           <Route
        //             key={index}
        //             index={route.path == "/dashboard" && true}
        //             path={route.path}
        //             element={
        //               <Layout>
        //                 <RouteComponent />
        //               </Layout>
        //             }
        //           />
        //         );
        //       })}
        //     </Route>
        //   </Routes>
        // )
      }
    </>
  );
};

export default RouterApp;
