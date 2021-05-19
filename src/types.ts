export enum SysObject {
  bottle = "bottle",
  earth = "earth",
  earthexp = "earthexp",
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
