import React from "react";
import { SysObject, Version } from "../types";
import { getObjectOptions } from "../utils/utils";

interface IProps {
  version: Version;
  value: SysObject;
  onChange?: (value: SysObject) => void;
}

export const SelectObject: React.FC<IProps> = ({ version, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as SysObject);
  };
  const optionsList = getObjectOptions(version);
  return (
    <select onChange={handleChange} value={value}>
      { optionsList.map((option: any, i: number) => {
          return <option value={option.object} key={option.object}>{option.text}</option>;
       })
      }
    </select>
  );
};
