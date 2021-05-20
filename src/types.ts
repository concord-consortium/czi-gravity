export enum SysObject {
  bottle = "bottle",
  earth = "earth",
  paperClip = "paperClip",
  human = "human",
  chair = "chair"
}

export interface IRow {
  object1: SysObject;
  object2: SysObject;
}

export interface IInteractiveState {
  rows: IRow[];
}

export const Versions = [ "forces-unknown", "earth", "venus", undefined ] as const;
export type Version = typeof Versions[number];

