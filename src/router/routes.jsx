import { Route, Routes, useLocation } from "react-router";
import { Home, About, NotFound, Clients, Service, Projects, ProjectInner, Contacts, Catalog, Product, Login, Users, AddUsers, EditUsers, Categories, AddCategories, EditCategories, Products, AddProducts, EditProducts, Media, AddMedia, EditMedia, Project, AddProject, EditProject } from "../pages/index";
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
    component: Users,
  },
  {
    id: 1,
    path: "/admin/users",
    component: Users,
  },
  {
    id: 2,
    path: "/admin/users/create",
    component: AddUsers,
  },
  {
    id: 3,
    path: "/admin/users/edit/:id",
    component: EditUsers,
  },
  {
    id: 4,
    path: "/admin/categories",
    component: Categories,
  },
  {
    id: 5,
    path: "/admin/categories/create",
    component: AddCategories,
  },
  {
    id: 6,
    path: "/admin/categories/edit/:id",
    component: EditCategories,
  },
  {
    id: 7,
    path: "/admin/products",
    component: Products,
  },
  {
    id: 8,
    path: "/admin/products/create",
    component: AddProducts,
  },
  {
    id: 9,
    path: "/admin/products/edit/:id",
    component: EditProducts,
  },
  {
    id: 10,
    path: "/admin/media",
    component: Media,
  },
  {
    id: 11,
    path: "/admin/media/create",
    component: AddMedia,
  },
  {
    id: 12,
    path: "/admin/media/edit/:id",
    component: EditMedia,
  },
  ,
  {
    id: 13,
    path: "/admin/project",
    component: Project,
  },
  {
    id: 14,
    path: "/admin/project/create",
    component: AddProject,
  },
  {
    id: 15,
    path: "/admin/project/edit/:id",
    component: EditProject,
  },
];
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
