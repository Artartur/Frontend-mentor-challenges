"use client";

import Image from "next/image";
import Logo from "../assets/logo.svg";
import Menu from "../assets/icon-menu.svg";
import CloseMenu from "../assets/icon-menu-close.svg";
import "../styles/header.scss";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header__container flex items-center p-3 desktop:mb-6">
      <div className="header__container-content flex items-center justify-between w-full desktop:justify-around">
        <Link className="ms-2 desktop:me-12" href="/">
          <Image src={Logo} alt="logo" width={40} />
        </Link>
        <nav>
          <div
            className={
              !showMenu
                ? ""
                : "showMenu absolute h-screen right-0 top-0 w-screen z-10"
            }
          >
            <Image
              className={
                !showMenu
                  ? "me-2 mt-2 desktop:hidden"
                  : "absolute right-5 top-4 z-20"
              }
              src={showMenu ? CloseMenu : Menu}
              alt="open menu to navigate"
              width={!showMenu ? 40 : 20}
              onClick={() => setShowMenu(!showMenu)}
            />

            {showMenu && (
              <Navbar className="showMenu__navbar absolute bg-white flex flex-col h-screen right-0 top-0 w-3/5 z-10" />
            )}
          </div>

          <Navbar className="hidden desktop:flex" />
        </nav>
      </div>
    </header>
  );
}
