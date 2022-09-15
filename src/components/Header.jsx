import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const menuItems = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Team",
    link: "/team",
  },
  {
    id: 4,
    name: "Works",
    link: "/works",
  },
  {
    id: 5,
    name: "Pricing",
    link: "/pricing",
  },
  {
    id: 6,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 7,
    name: "Contact",
    link: "/contact",
  },
];
const Header = () => {
  return (
    <header className="">
      <div className="container flex justify-between items-center py-6">
        {/* logo */}
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="flex space-x-4">
          {/* menu items */}
          <ul className="flex justify-between items-center space-x-4 capitalize text-base font-semibold">
            {menuItems.map((menu) => {
              const { id, name, link } = menu;
              return (
                <li>
                  <NavLink
                    key={id}
                    to={link}
                    className="smooth-transition hover:text-primary">
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {/* social icon */}
          <ul className="flex justify-between items-center space-x-2">
            <li>
              <a
                className="flex justify-center items-center p-2 rounded-full hover:bg-primary hover:text-white"
                href="https://www.facebook.com/"
                target="blank">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                className="flex justify-center items-center p-2 rounded-full hover:bg-secondary hover:text-white"
                href="https://www.twitter.com/"
                target="blank">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                className="flex justify-center items-center p-2 rounded-full hover:bg-pink-400 hover:text-white"
                href="https://www.linkedin.com/"
                target="blank">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
