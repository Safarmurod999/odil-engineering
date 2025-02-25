"use client";
import React, { useEffect, useState } from "react";
import { IoCloseSharp, IoPersonOutline } from "react-icons/io5";
import { TbMessage2Dollar } from "react-icons/tb";
import { FaUniversity } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router";
import logo from "assets/icons/logo.svg";

const adminRoutes = [
  // {
  //   id: 1,
  //   name: "Dashboard",
  //   path: "/admin",
  //   icon: <IoIosStats />,
  // },
  {
    id: 2,
    name: "Users",
    path: "/admin/users",
    icon: <IoPersonOutline />,
  },
  {
    id: 3,
    name: "Categories",
    path: "/admin/categories",
    icon: <BiCategory />,
  },
  {
    id: 4,
    name: "Products",
    path: "/admin/products",
    icon: <TbMessage2Dollar />,
  },
  // {
  //   id: 5,
  //   name: "Education",
  //   path: "/admin/education",
  //   icon: <FaUniversity />,
  // },
];

const Sidebar = ({ toggleSidebar }) => {
  const { pathname } = useLocation();
  const [activeRoute, setActiveRoute] = useState(pathname || 0);
  const dispatch = useDispatch();
  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);
  return (
    <aside
      className={`sidebar
      // ${toggleSidebar ? "toggle-sidebar" : ""}
      `}
    >
      <div className="relative">
        <div className="sidebar__logo">
          <Link to="/" className="text-white">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <IoCloseSharp
          className="sidebar__close"
        // onClick={() => dispatch(handleSidebar())}
        />
      </div>

      <div className="nav">
        {adminRoutes.map((item) => {
          return (
            <Link
              key={item.id}
              className={`nav-item ${activeRoute === item.path ? "active" : ""
                }`}
              to={item.path}
              onClick={() => setActiveRoute(item.path)}
            >
              <span className="icon">{item.icon}</span>
              <span className="nav-item-name">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
