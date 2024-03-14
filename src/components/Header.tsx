"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Profile from "../assets/image-avatar.png";
import IconCart from "../assets/icon-cart.svg";
import IconClose from "../assets/icon-close.svg";
import IconMenu from "../assets/icon-menu.svg";
import Logo from "../assets/logo.svg";
import "../styles/header.scss";

export default function Header() {
  const [showMenu, setShowMenu] = useState(true);

  const closeNavBar = () => setShowMenu(!showMenu);
  const showNavbar = () => setShowMenu(window.innerWidth >= 720);

  useEffect(() => {
    const handleResize = () => setShowMenu(window.innerWidth <= 950);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header__container flex justify-center items-center p-6 w-full desktop:flex-col">
      <div className="header__container-content items-center flex justify-between w-full desktop:justify-center">
        <div className="header__container-content-left flex items-center justify-center desktop:me-12">
          {showMenu && (
            <Image
              alt="Open Menu"
              className="me-4 desktop:me-0"
              onClick={showNavbar}
              src={IconMenu}
              width={13}
            />
          )}
          <a href="/">
            <Image alt="Logo" src={Logo} width={100} />
          </a>
        </div>
        {showMenu ||
          (!showMenu && (
            <nav className="absolute h-full left-0 top-0 w-full desktop:relative">
              <ul className="absolute bg-white flex flex-col h-full left-0 top-0 w-64 desktop:flex-row desktop:relative">
                {window.innerWidth <= 950 && (
                  <li>
                    <Image
                      alt="Close"
                      onClick={closeNavBar}
                      src={IconClose}
                      width={13}
                    />
                  </li>
                )}
                <li>
                  <a href="/">Collections</a>
                </li>
                <li>
                  <a href="/">Men</a>
                </li>
                <li>
                  <a href="/">Women</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </nav>
          ))}
        <div className="header__container-content-right flex items-center">
          <Image
            alt="Open Cart"
            className="hover:cursor-pointer"
            src={IconCart}
            width={20}
          />
          <Image
            alt="Profile"
            className="h-5 ms-5 w-5 desktop:h-10 desktop:ms-10 desktop:w-10"
            src={Profile}
          />
        </div>
      </div>
      <div className="header__container-border flex items-center justify-center desktop:me-6 desktop:mt-6"></div>
    </header>
  );
}
