export enum SysObject {
  bottle = "bottle",
  earth = "earth",
  paperClip = "paperClip",
  human = "human",
  chair = "chair",
  backpack = "backpack",
  bowlingBall = "bowlingBall",
  flourBag=  "flourBag",
  soccer = "soccer",
  kite = "kite",
  worldTradeCtr = "worldTradeCtr",
  schoolbus = "schoolbus",
  venus = "venus",
}

export interface IRow {
  object1: SysObject;
  object2: SysObject;
}

export interface IInteractiveState {
  rows: IRow[];
}

export const Versions = [ "forces-unknown", "earth", "venus", "vanilla" ] as const;
export type Version = typeof Versions[number];
