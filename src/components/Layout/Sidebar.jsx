"use client";
import React, { useEffect, useState } from "react";
import { IoCloseSharp, IoPersonOutline } from "react-icons/io5";
import { TbMessage2Dollar } from "react-icons/tb";
import { FaVideo } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router";
import logo from "assets/icons/logo.svg";
import { FaRegMessage, FaRProject } from "react-icons/fa6";
import { MdOutlinePeople } from "react-icons/md";

const adminRoutes = [
  // {
  //   id: 1,
  //   name: "Dashboard",
  //   path: "/admin",
  //   icon: <IoIosStats />,
  // },
  {
    id: 2,
    name: "Foydalanuvchilar",
    path: "/admin/users",
    icon: <IoPersonOutline />,
  },
  {
    id: 3,
    name: "Kategoriyalar",
    path: "/admin/categories",
    icon: <BiCategory />,
  },
  {
    id: 4,
    name: "Mahsulotlar",
    path: "/admin/products",
    icon: <TbMessage2Dollar />,
  },
  {
    id: 5,
    name: "Media",
    path: "/admin/media",
    icon: <FaVideo />,
  },
  {
    id: 6,
    name: "Proyektlar",
    path: "/admin/project",
    icon: <FaRProject />,
  },
  {
    id: 7,
    name: "Murojaatlar",
    path: "/admin/leads",
    icon: <MdOutlinePeople />,
  },
  {
    id: 8,
    name: "Fikrlar",
    path: "/admin/testimonials",
    icon: <FaRegMessage />,
  },
  {
    id: 9,
    name: "Mijozlar",
    path: "/admin/clients",
    icon: <IoPersonOutline />,
  }
];

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
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
          <Link aria-label="logo" to="/" className="text-white">
            <img src={logo} alt="logo" />
          </Link>
        </div>

      </div>

      <div className="nav">
        {adminRoutes.map((item) => {
          return (
            <Link
              aria-label="sidebar-link"
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
