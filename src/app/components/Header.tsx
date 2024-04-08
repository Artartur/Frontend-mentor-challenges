"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/shared/logo.svg";
import Menu from "../../assets/shared/icon-hamburger.svg";
import Close from "../../assets/shared/icon-close.svg";
import "../styles/header.scss";

export default function Header() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);

  const openModal = () => setIsShowModal(!isShowModal);

  useEffect(() => {
    const handleResize = () => {
      setShowMenuIcon(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header__container items-center flex justify-center w-full">
      <div className="header__container-content flex items-center justify-between w-full">
        <Image src={Logo} alt="logo" className="ms-5" />

        {showMenuIcon && (
          <Image
            alt="Open the menu to navigate"
            className={
              isShowModal
                ? "absolute top-7 right-5 z-10 cursor-pointer"
                : "me-5 cursor-pointer"
            }
            onClick={openModal}
            src={isShowModal ? Close : Menu}
          />
        )}

        {(isShowModal || !showMenuIcon) && (
          <nav className="nav-text absolute top-0 right-0 h-full tablet:h-20 tablet:flex tablet:justify-center">
            <ul className="mt-20 tablet:flex tablet:items-center tablet:mt-0">
              <li>
                <a href="">
                  <strong>00</strong>HOME
                </a>
              </li>
              <li>
                <a href="">
                  <strong>01</strong>DESTINATION
                </a>
              </li>
              <li>
                <a href="">
                  <strong>02</strong>CREW
                </a>
              </li>
              <li>
                <a href="">
                  <strong>03</strong>TECHNOLOGY
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
