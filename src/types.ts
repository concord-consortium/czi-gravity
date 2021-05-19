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
