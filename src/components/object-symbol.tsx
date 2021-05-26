import React from "react";
import { SysObject } from "../types";
import bottleSrc from "../assets/bottle.png";
import earthSrc from "../assets/earth.png";
import paperClipSrc from "../assets/paperclip.png";
import humanSrc from "../assets/human.png";
import chairSrc from "../assets/chair.png";
import backpackSrc from "../assets/backpack.png";
import bowlingBallSrc from "../assets/bowling-ball.png";
import flourBagSrc from "../assets/flour-bag.png";
import soccerSrc from "../assets/football.png";
import kiteSrc from "../assets/kite.png";
import worldTradeCtrSrc from "../assets/one-world-trade-center.png";
import schoolbusSrc from "../assets/schoolbus.png";
import venusSrc from "../assets/venus.png";

import "./object-symbol.scss";

const weight: Record<SysObject, string> = {
  bottle: "0.6 kg",
  earth: "6,000,000,000,000,000,000,000,000 kg",
  paperClip: "0.0005 kg",
  human: "average 80 kg",
  chair: "4.5 kg",
  backpack: "10 kg",
  bowlingBall: "5 kg",
  flourBag: "1 kg",
  soccer: "0.43 kg",
  kite: "0.0045 kg",
  worldTradeCtr: "9,200,000,000 kg",
  schoolbus: "6,400 kg",
  venus: "4,900,000,000,000,000,000,000,000 kg",
};

const imgSrc: Record<SysObject, string> = {
  bottle: bottleSrc,
  earth: earthSrc,
  paperClip: paperClipSrc,
  human: humanSrc,
  chair: chairSrc,
  backpack: backpackSrc,
  bowlingBall: bowlingBallSrc,
  flourBag: flourBagSrc,
  soccer: soccerSrc,
  kite: kiteSrc,
  worldTradeCtr: worldTradeCtrSrc,
  schoolbus: schoolbusSrc,
  venus: venusSrc,
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

