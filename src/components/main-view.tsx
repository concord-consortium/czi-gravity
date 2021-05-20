import React, { useState } from "react";
import { SelectObject } from "./select-object";
import { SysObject, Version } from "../types";
import { ObjectSymbol } from "./object-symbol";
import { ForceArrows } from "./force-arrows";
import "./main-view.scss";
import { getObjectOptions } from "../utils/utils";

interface IProps {
  showForce: boolean;
  version: Version;
  forceText: string;
  saveToTable: (object1: SysObject, object2: SysObject) => void;
  clearTable: () => void;
  handleChangeShowForceState: (state: boolean) => void;
}

}

export const MainView: React.FC<IProps> = ({ version, forceText, saveToTable, clearTable }) => {
  const optionsList = getObjectOptions(version);
console.log(optionsList[0].object);
  const [ object1, setObject1 ] = useState<SysObject>(optionsList[0].object as SysObject);
  const [ object2, setObject2 ] = useState<SysObject>((version==="earth" || version==="vanilla")
                                                        ? SysObject.earth : optionsList[0].object as SysObject);

  const handleSave = () => {
    saveToTable(object1, object2);
    handleChangeShowForceState(true);
  };
  const handleSetObject1 = (value: SysObject) => {
    setObject1(value);
    handleChangeShowForceState(false);
  };
  const handleSetObject2 = (value: SysObject) => {
    setObject2(value);
    handleChangeShowForceState(false);
  };

  const showAlert = () => {
    alert("Click on Calculate forces button to see a representation of the forces between the two objects");
  };

  return (
    <div className="main-view">
      <div className="header">Select two objects:</div>
      <div className="columns">
        <div className="column">
          <div className="object-label" data-testid="object-1">Object 1: <SelectObject value={object1} onChange={handleSetObject1}/></div>
          <ObjectSymbol objectType={object1} />
        </div>
        <div className="column arrows">
          <div className="label">{forceText}</div>
          <ForceArrows object1={object1} object2={object2} />
        </div>
        <div className="column">
          <div className="object-label">Object 2: {version==="earth"? "Earth" : <SelectObject value={object2} onChange={handleSetObject2}/>}</div>
          <ObjectSymbol objectType={object2} />
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleSave} data-testid="save-button">{version === "forces-unknown" ? "Calculate forces" : "Save to table"}</button>
        <button onClick={clearTable} data-testid="clear-table-button">Clear table</button>
      </div>
    </div>
  );
};
