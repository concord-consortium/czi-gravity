import React from "react";
import { SysObject } from "../types";

interface IProps {
  version: string;
  value: SysObject;
  onChange?: (value: SysObject) => void;
}

export const SelectObject: React.FC<IProps> = ({ version, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as SysObject);
  };

  return (
    <select onChange={handleChange} value={value}>
      <option value={SysObject.bottle}>Water Bottle</option>
      <option value={SysObject.earth}>Earth</option>
      {version==="exponential" && <option value={SysObject.earthexp}>Earth (exponential)</option>}
      <option value={SysObject.paperClip}>Paper Clip</option>
      <option value={SysObject.human}>Human</option>
      <option value={SysObject.chair}>Chair</option>
    </select>
  );
};
