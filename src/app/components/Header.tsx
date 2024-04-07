"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/shared/logo.svg";
import Menu from "../../assets/shared/icon-hamburger.svg";
import Close from "../../assets/shared/icon-close.svg";
import "../styles/header.scss";

export default function Header() {
  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => setIsShowModal(!isShowModal);

  return (
    <header className="header__container items-center flex h-20 justify-center w-full">
      <div className="flex items-center justify-between w-full">
        <Image alt="logo" className="ms-5" src={Logo} />
        <Image
          alt="close"
          className={
            isShowModal
              ? "absolute cursor-pointer right-5 z-10"
              : "cursor-pointer me-5"
          }
          src={isShowModal ? Close : Menu}
          onClick={openModal}
        />
      </div>

      {isShowModal && (
        <nav>
          <div className="nav-text absolute h-screen right-0 top-0 w-60">
            <ul className="absolute h-screen right-0 top-0 w-60">
              <li>
                <a href="#">
                  <strong>00</strong> HOME
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>01</strong> DESTINATION
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>02</strong> CREW
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>03</strong> TECHNOLOGY
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
