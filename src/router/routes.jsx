import { Route, Routes, useLocation } from "react-router";
import { Home, About, NotFound, Clients, Service, Projects, ProjectInner, Contacts, Catalog, Product } from "../pages/index";
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
  {
    id: 2,
    path: "/clients",
    component: Clients
  },
  {
    id: 3,
    path: "/services",
    component: Service
  },
  {
    id: 4,
    path: "/projects",
    component: Projects
  },
  {
    id: 5,
    path: "/projects/:id",
    component: ProjectInner
  },
  {
    id: 6,
    path: "/contacts",
    component: Contacts
  },
  {
    id: 7,
    path: "/catalog/:title",
    component: Catalog
  },
  {
    id: 8,
    path: "/catalog/:title/:name",
    component: Product
  }
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
