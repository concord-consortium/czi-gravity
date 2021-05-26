import React from "react";
import { SysObject } from "../types";

import "./force-value.scss";

interface IProps {
  object1: SysObject;
  object2?: SysObject;
}

const force: Partial<Record<SysObject, string>> = {
  backpack:  "98",
  bowlingBall: "98",
  flourBag: "98",
  soccer:  "4.231",
  kite: "0.0441",
  worldTradeCtr: "90,220,000",
  schoolbus: "62,763",
};

export const ForceValue: React.FC<IProps> = ({ object1 }) => {
  return (
    <div className="force-value" data-testid="force-value">{force[object1]} N</div>
  );
};
