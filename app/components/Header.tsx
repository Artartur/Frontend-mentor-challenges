"use client";

import "../styles/header.scss";
import Image from "next/image";
import Avatar from "../assets/image-avatar.png";
import Cart from "../assets/icon-cart.svg";
import Close from "../assets/icon-close.svg";
import Logo from "../assets/logo.svg";
import Menu from "../assets/icon-menu.svg";
import { useState } from "react";
import RoutesList from "./RoutesList";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header__container flex h-14 justify-center w-full desktop:h-20">
      <div className="header__container-content border-none flex items-center justify-between w-full">
        <div className="header__container-content-left flex items-center">
          <Image
            alt="Open navbar to navigate in the site"
            className={
              showMenu
                ? "cursor-pointer absolute left-6 top-5 z-20 dekstop:hidden desktop:relative"
                : "cursor-pointer mx-5 desktop:hidden desktop:me-0"
            }
            onClick={() => setShowMenu(!showMenu)}
            src={showMenu ? Close : Menu}
            width={18}
          />
          <Image alt="Logo" className="desktop:me-16" src={Logo} width={130} />

          {showMenu && (
            <nav className="header__container-content-left-showMenu absolute h-screen left-0 top-0 w-screen desktop:hidden">
              <RoutesList className="absolute top-0 flex flex-col h-screen left-0 w-3/5" />
            </nav>
          )}

          <nav className="header__container-content-left-navbar hidden desktop:flex desktop:items-center">
            <RoutesList className="flex" />
          </nav>
        </div>

        <div className="flex items-center">
          <Image
            alt="Shopping cart icon"
            className="cursor-pointer"
            src={Cart}
            width={22}
          />
          <Image
            alt="User avatar"
            className="avatar mx-5 cursor-pointer"
            src={Avatar}
            width={28}
          />
        </div>
      </div>
    </header>
  );
}
