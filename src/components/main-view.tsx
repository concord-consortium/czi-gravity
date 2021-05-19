import React, { useState } from "react";
import { SelectObject } from "./select-object";
import { SysObject } from "../types";
import { ObjectSymbol } from "./object-symbol";
import { ForceArrows } from "./force-arrows";
import "./main-view.scss";

interface IProps {
  showForce: boolean;
  version: string;
  saveToTable: (object1: SysObject, object2: SysObject) => void;
  clearTable: () => void;
  handleChangeShowForceState: (state: boolean) => void;
}

export const MainView: React.FC<IProps> = ({ showForce, version, saveToTable, clearTable, handleChangeShowForceState }) => {
  const [ object1, setObject1 ] = useState<SysObject>(SysObject.bottle);
  const [ object2, setObject2 ] = useState<SysObject>(SysObject.earth);

  const handleSave = () => {
    saveToTable(object1, object2);
    handleChangeShowForceState(true);
  };

  const showAlert = () => {
    alert("Click on Calculate forces button to see a representation of the forces between the two objects");
  };

  return (
    <div className="main-view">
      <div className="header">Select two objects:</div>
      <div className="columns">
        <div className="column">
          <div data-testid="object-1">Object 1: <SelectObject value={object1} onChange={setObject1} changeShowForceState={handleChangeShowForceState}/></div>
          <ObjectSymbol objectType={object1} />
        </div>
        <div className="column arrows">
          <div className="label">strength and direction<br/>of gravitational forces</div>
          { version === "forces-unknown" && !showForce
              ? <div className="question-mark" data-testid="question-mark"
                     title="Click on Calculate forces button to see a representation of the forces between the two objects"
                     onClick={showAlert}>
                     ?
                </div>
              : <ForceArrows object1={object1} object2={object2} />
          }
        </div>
        <div className="column">
          <div data-testid="object-2">Object 2: <SelectObject value={object2} onChange={setObject2} changeShowForceState={handleChangeShowForceState}/></div>
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
