import Image from "next/image";
import useWindowSize from "../hooks/useWindowSize";
import Web3Mobile from "../assets/image-web-3-mobile.jpg";
import Web3Desktop from "../assets/image-web-3-desktop.jpg";

export default function MainTopicImage() {
  return (
    <div className="mainTopic__container mb-2 desktop:mb-0">
      <Image
        alt="The Bright future of Web 3.0"
        src={useWindowSize() >= 768 ? Web3Desktop : Web3Mobile}
      />
    </div>
  );
}
