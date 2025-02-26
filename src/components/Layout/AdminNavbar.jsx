import { useEffect, useRef, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import ThemeSwitcher from "./ThemeSwitcher";
const AdminNavbar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={`admin-navbar ${toggleSidebar ? "navbar-toggle" : ""}`}>
      <div
        className="cursor-pointer admin-toggle"
        onClick={() => dispatch(handleSidebar())}
      >
        <IoMenuSharp />
      </div>
      <div className="admin-navbar--right">
        <div className="admin-navbar--theme">
          <ThemeSwitcher />
        </div>
        <div className="admin-dropdown">
          <div className="admin-avatar" onClick={toggleMenu}>
            <img
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="avatar"
            />
          </div>
          <div
            ref={menuRef}
            className={`admin-avatar-menu ${isOpen ? "toggle" : ""}`}
          >
            <ul>
              <li onClick={() => setIsOpen(false)}>
                <Link to={"/dashboard/profile"}>Profil</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link to={"/dashboard/settings"}>Sozlamalar</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link to={"/"}>Akkauntdan chiqish</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
