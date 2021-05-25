import React from "react";
import { SysObject } from "../types";

import "./force-value.scss";

interface IProps {
  object1: SysObject;
  object2: SysObject;
}

export const ForceValue: React.FC<IProps> = ({ object1, object2 }) => {
  const force: Partial<Record<SysObject, string>> = {
    backpack:  object2 === "venus" ? "80" : "98",
    bowlingBall: object2 === "venus" ? "44" : "49",
    flourBag: object2 === "venus" ? "9" :  "10",
    soccer:  "4.231",
    kite: "0.0441",
    worldTradeCtr: "90,220,000",
    schoolbus: "62,763",
  };
  return (
    <div className="force-value" data-testid="force-value">{force[object1]} N</div>
  );
};
