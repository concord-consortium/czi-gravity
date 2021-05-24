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
  kite: 1.01,
  soccer: 1.35,
  bottle: 1.4,
  flourBag: 1.45,
  chair: 1.8,
  bowlingBall: 1.801,
  backpack: 1.85,
  human: 2.2,
  schoolbus: 2.4,
  worldTradeCtr: 2.75,
  venus: 2.9,
  earth: 3,
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
    <div className="force-arrows" data-testid="force-arrows">
      <img src={arrowRightSrc} alt="arrow right" style={style} />
      <img src={arrowLeftSrc} alt="arrow left" style={style} />
    </div>
  );
};
