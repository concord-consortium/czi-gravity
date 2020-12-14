import React, { useState } from "react";
import { SelectObject } from "./select-object";
import { SysObject } from "../types";
import { ObjectSymbol } from "./object-symbol";
import { ForceArrows } from "./force-arrows";
import "./main-view.scss";

interface IProps {
  saveToTable: (object1: SysObject, object2: SysObject) => void;
  clearTable: () => void;
}

export const MainView: React.FC<IProps> = ({ saveToTable, clearTable }) => {
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
          <SelectObject value={object1} onChange={setObject1}/>
          <ObjectSymbol objectType={object1} />
        </div>
        <div className="column arrows">
         <ForceArrows object1={object1} object2={object2} />
        </div>
        <div className="column">
          <SelectObject value={object2} onChange={setObject2}/>
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
