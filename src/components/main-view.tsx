import React, { useState } from "react";
import { SelectObject } from "./select-object";
import { SysObject } from "../types";
import { ObjectSymbol } from "./object-symbol";
import { ForceArrows } from "./force-arrows";
import "./main-view.scss";

interface IProps {
  version: string;
  saveToTable: (object1: SysObject, object2: SysObject) => void;
  clearTable: () => void;
}

export const MainView: React.FC<IProps> = ({ saveToTable, clearTable, version }) => {
  const [ object1, setObject1 ] = useState<SysObject>(SysObject.bottle);
  const [ object2, setObject2 ] = useState<SysObject>(SysObject.earth);

  const handleSave = () => {
    saveToTable(object1, object2);
  };

  return (
    <div className="main-view">
      <div className="header">Select two objects:</div>
      <div className="columns">
        <div className="column">
          <div>Object 1: <SelectObject version={version} value={object1} onChange={setObject1}/></div>
          <ObjectSymbol objectType={object1} />
        </div>
        <div className="column arrows">
          <div className="label">strength and direction<br/>of gravitational forces</div>
          <ForceArrows object1={object1} object2={object2} />
        </div>
        <div className="column">
          <div>Object 2: <SelectObject version={version} value={object2} onChange={setObject2}/></div>
          <ObjectSymbol objectType={object2} />
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleSave}>Save to table</button>
        <button onClick={clearTable}>Clear table</button>
      </div>
    </div>
  );
};
