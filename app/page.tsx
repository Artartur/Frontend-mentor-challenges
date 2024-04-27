"use client";

import New from "./components/New";
import Tranding from "./components/Tranding";
import MainTopic from "./components/MainTopic";
import MainTopicImage from "./components/MainTopicImage";
import "./styles/home.scss";

export default function Home() {
  return (
    <main className="home__container flex flex-col items-center justify-center mt-2">
      <div className="home__container-parent grid grid-cols-1 desktop:grid-rows-3">
        <MainTopicImage />
        <MainTopic />
        <New />
        <Tranding />
      </div>
    </main>
  );
}
