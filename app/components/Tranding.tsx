import Image from "next/image";

import GamingGrowth from "../assets/image-gaming-growth.jpg";
import RetroPcs from "../assets/image-retro-pcs.jpg";
import TopLaptops from "../assets/image-top-laptops.jpg";

export default function Tranding() {
  return (
    <div className="tranding__container flex flex-col desktop:flex-row desktop:mt-3">
    <div className="tranding__container-topics flex mb-5 desktop:mb-0 desktop:me-3">
      <Image
        className="me-5"
        src={RetroPcs}
        alt="Reviving Retro Pcs"
        width={200}
        height={100}
      />
      <span>
        <h2 className="mb-1">01</h2>
        <h3 className="mb-1">Reviving Retro Pcs</h3>
        <p className="text-wrap">
          What happens when old PCs are given modern upgrades?
        </p>
      </span>
    </div>
    <div className="tranding__container-topics flex mb-5 desktop:mb-0 desktop:me-6">
      <Image
        className="me-5"
        src={TopLaptops}
        alt="top 10 laptops of 2022"
        width={160}
        height={100}
      />
      <span>
        <h2 className="mb-1">02</h2>
        <h3 className="mb-1">Top 10 laptops of 2022</h3>
        <p className="text-wrap">
          Our best picks of various needs and budgets.
        </p>
      </span>
    </div>
    <div className="tranding__container-topics flex mb-10 desktop:mb-0">
      <Image
        className="me-5"
        src={GamingGrowth}
        alt="The Growth of Gaming"
        width={185}
        height={100}
      />
      <span>
        <h2 className="mb-1">03</h2>
        <h3 className="mb-1">The Growth of Gaming</h3>
        <p className="text-wrap">
          How the pandemic has sparked fresh opportunities.
        </p>
      </span>
    </div>
  </div>
  );
}
