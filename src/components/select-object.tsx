import React from "react";
import { SysObject, Mode } from "../types";
import { getObjectOptions } from "../utils/utils";

interface IProps {
  mode: Mode;
  value: SysObject;
  onChange?: (value: SysObject) => void;
}

export const SelectObject: React.FC<IProps> = ({ mode, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as SysObject);
  };
  const optionsList = getObjectOptions(mode);
  return (
    <select data-testid="object-selection" onChange={handleChange} value={value}>
      { optionsList.map((option: any, i: number) => {
          return <option value={option.object} key={option.object}>{option.text}</option>;
       })
      }
    </select>
  );
};
