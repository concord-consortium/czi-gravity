import React, { useState } from "react";
import { SelectObject } from "./select-object";
import { SysObject, Version } from "../types";
import { ObjectSymbol } from "./object-symbol";
import { ForceArrows } from "./force-arrows";
import "./main-view.scss";
import { getObjectOptions } from "../utils/utils";

interface IProps {
  version: Version;
  forceText: string;
  saveToTable: (object1: SysObject, object2: SysObject) => void;
  clearTable: () => void;
}

export const MainView: React.FC<IProps> = ({ version, forceText, saveToTable, clearTable }) => {
  const optionsList = getObjectOptions(version);
console.log(optionsList[0].object);
  const [ object1, setObject1 ] = useState<SysObject>(optionsList[0].object as SysObject);
  const [ object2, setObject2 ] = useState<SysObject>((version==="earth" || version==="vanilla")
                                                        ? SysObject.earth : optionsList[0].object as SysObject);

  const handleSave = () => {
    saveToTable(object1, object2);
  };

  return (
    <div className="main-view">
      <div className="header">Select two objects:</div>
      <div className="columns">
        <div className="column">
          <div className="object-label">Object 1: <SelectObject version={version} value={object1} onChange={setObject1}/></div>
          <ObjectSymbol objectType={object1} />
        </div>
        <div className="column arrows">
          <div className="label">{forceText}</div>
          <ForceArrows object1={object1} object2={object2} />
        </div>
        <div className="column">
          <div className="object-label">Object 2: {version==="earth"? "Earth" : <SelectObject version={version} value={object2} onChange={setObject2}/>}</div>
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
