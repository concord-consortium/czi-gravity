import React from "react";
import { SysObject } from "../types";

interface IProps {
  value: SysObject;
  onChange?: (value: SysObject) => void;
  changeShowForceState?: (state: boolean) => void;
}

export const SelectObject: React.FC<IProps> = ({ value, onChange, changeShowForceState }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as SysObject);
    changeShowForceState?.(false);
  };

  return (
    <select onChange={handleChange} value={value} data-testid="object-selection">
      <option value={SysObject.bottle}>Water Bottle</option>
      <option value={SysObject.earth}>Earth</option>
      <option value={SysObject.paperClip}>Paper Clip</option>
      <option value={SysObject.human}>Human</option>
      <option value={SysObject.chair}>Chair</option>
    </select>
  );
};
