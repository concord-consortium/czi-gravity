import React from "react";
import { SysObject } from "../types";
import bottleSrc from "../assets/bottle.png";
import earthSrc from "../assets/earth.png";
import paperClipSrc from "../assets/paperclip.png";
import humanSrc from "../assets/human.png";
import chairSrc from "../assets/chair.png";
import "./object-symbol.scss";

const weight: Record<SysObject, string> = {
  bottle: "0.6 kg",
  earth: "6,000,000,000,000,000,000,000,000 kg",
  earthexp: "6.0 x 10^24 kg",
  paperClip: "0.0005 kg",
  human: "average 80 kg",
  chair: "4.5 kg"
};

const imgSrc: Record<SysObject, string> = {
  bottle: bottleSrc,
  earth: earthSrc,
  earthexp: earthSrc,
  paperClip: paperClipSrc,
  human: humanSrc,
  chair: chairSrc
};

interface IProps {
  objectType: SysObject;
  small?: boolean;
}

export const ObjectSymbol: React.FC<IProps> = ({ objectType, small }) => {
  return (
    <div className={`object ${small ? "small" : ""}`}>
      <img src={imgSrc[objectType]} alt={objectType} />
      <div className="weight">
        { weight[objectType] }
      </div>
    </div>
  );
};

