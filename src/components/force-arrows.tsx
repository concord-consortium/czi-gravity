import React from "react";
import { SysObject } from "../types";
import arrowLeftSrc from "../assets/arrowleft.png";
import arrowRightSrc from "../assets/arrowright.png";
import "./force-arrows.scss";

interface IProps {
  object1: SysObject;
  object2: SysObject;
  small?: boolean;
}

const getForce = (mass1: number, mass2: number) => mass1 * mass2;

const weight: Record<SysObject, number> = {
  paperClip: 1,
  bottle: 1.4,
  chair: 1.8,
  human: 2.2,
  earth: 3,
  backpack: 2,
  bowlingBall: 2,
  flourBag: 1.8,
  soccer: 1.3,
  kite: 1,
  worldTradeCtr: 2.7,
  schoolbus: 2.3,
  venus: 3,
};

const maxArrowWidthInPx = 150;
const maxForce = getForce(weight[SysObject.earth], weight[SysObject.earth]);
const arrowAspectRatio = 0.26;

export const ForceArrows: React.FC<IProps> = ({ object1, object2 }) => {
  // size is defined in px, between 0 and maxArrowWidthInPx.
  const width = getForce(weight[object1], weight[object2]) / maxForce * maxArrowWidthInPx;
  const height = width * arrowAspectRatio;
  const style = { width: width.toFixed(0) + "px", height: height.toFixed(0) + "px" };
  return (
    <div className="force-arrows">
      <img src={arrowRightSrc} alt="arrow right" style={style} />
      <img src={arrowLeftSrc} alt="arrow left" style={style} />
    </div>
  );
};
