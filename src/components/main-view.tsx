import React, { useState } from "react";
import { SelectObject } from "./select-object";
import { SysObject, Mode } from "../types";
import { ObjectSymbol } from "./object-symbol";
import { ForceArrows } from "./force-arrows";
import "./main-view.scss";
import { getObjectOptions } from "../utils/utils";
import { ForceValue } from "./force-value";

interface IProps {
  showForce: boolean;
  mode: Mode;
  saveToTable: (object1: SysObject, object2: SysObject, object3: SysObject) => void;
  clearTable: () => void;
  handleChangeShowForceState: (state: boolean) => void;
}

export const MainView: React.FC<IProps> = ({ showForce, mode, saveToTable, clearTable, handleChangeShowForceState }) => {
  const optionsList = getObjectOptions(mode);
  const [ object1, setObject1 ] = useState<SysObject>(optionsList[0].object as SysObject);
  const [ object2, setObject2 ] = useState<SysObject>( mode === "venus" ? SysObject.venus : SysObject.earth );
  const object3 = SysObject.earth;
  const forceText = mode === "earth" ? "Gravitational force between object and Earth"
                                     : mode === "venus" ? "Gravitational forces between object and Venus and Earth"
                                                        : "Strength and Direction of Gravitational Forces";

  const handleSave = () => {
    saveToTable(object1, object2, object3);
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

  const headerText = mode === "earth" || mode === "venus" ? "Select Object 1:" : "Select two objects:";

  return (
    <div className="main-view">
      <div className="header">{headerText}</div>
      <div className="columns">
        <div className="column">
          <div className="object-label" data-testid="object-1">Object 1: <SelectObject mode={mode} value={object1} onChange={handleSetObject1}/></div>
          <ObjectSymbol objectType={object1} />
        </div>
        <div className="column">
          <div className="arrows">
            { (mode !== "venus" || !showForce) && <div className="label">{forceText}</div> }
            { mode !== "vanilla" && !showForce
                ? <div className="question-mark" data-testid="question-mark"
                      title="Click on Calculate forces button to see a representation of the forces between the two objects"
                      onClick={showAlert}>
                      ?
                  </div>
                : mode === "venus"
                  ? <>
                    <div className="label">Force between object 1 and Venus:</div>
                    <ForceValue object1={object1} object2={object2} />
                    <div className="label">Force between object 1 and Earth:</div>
                    <ForceValue object1={object1} object2={object3} />
                    </>
                  : mode === "earth"
                    ? <ForceValue object1={object1} object2={object2} />
                    : <ForceArrows object1={object1} object2={object2} />
            }
          </div>
          <div className="buttons">
            <button onClick={handleSave} data-testid="save-button">{ mode !== "vanilla"
                                                                    ? ( mode === "earth" ? "Calculate force" : "Calculate forces" )
                                                                    : "Save to table"}
            </button>
            <button onClick={clearTable} data-testid="clear-table-button">Clear table</button>
          </div>
        </div>
        <div className="column">
          <div className="object-label" data-testid="object-2">Object 2: { mode === "venus"
                                                    ? "Venus"
                                                    : mode === "earth"
                                                      ? "Earth"
                                                      : <SelectObject mode={mode} value={object2} onChange={handleSetObject2}/>}
          </div>
          <ObjectSymbol objectType={object2} />
        </div>
        { mode === "venus" &&
          <div className="column">
            <div className="object-label">Object 3: Earth </div>
            <ObjectSymbol objectType={object3} />
          </div>
        }
      </div>
    </div>
  );
};
