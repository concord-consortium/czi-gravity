export enum SysObject {
  bottle = "bottle",
  earth = "earth",
  paperClip = "paperClip",
  human = "human",
  chair = "chair",
  backpack = "backpack",
  bowlingBall = "bowlingBall",
  flourBag =  "flourBag",
  soccer = "soccer",
  kite = "kite",
  worldTradeCtr = "worldTradeCtr",
  schoolbus = "schoolbus",
  venus = "venus",
  null= "null",
}

export interface IRow {
  object1: SysObject;
  object2: SysObject;
  object3: SysObject;
}

export interface IInteractiveState {
  rows: IRow[];
}

export const Modes = [ "forces-unknown", "earth", "venus", "vanilla" ] as const;
export type Mode = typeof Modes[number];
