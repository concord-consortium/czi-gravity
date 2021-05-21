import React, { useRef, useState } from "react";
import { MainView } from "./main-view";
import { Table } from "./table";
import { SysObject, IInteractiveState } from "../types";
import { useAutoHeight } from "../hooks/use-auto-height";
import { useInteractiveState, useInitMessage } from "@concord-consortium/lara-interactive-api";
import { getMode } from "../utils/utils";
import "./app.scss";

export const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { interactiveState, setInteractiveState } = useInteractiveState<IInteractiveState>();
  const initMsg = useInitMessage();
  const report = initMsg?.mode === "report";
  const mode = getMode();
  const [ showForce, setShowForce ] = useState(false);
  const forceText = mode === "earth" ? "Gravitational force between object and Earth"
                                        : "Strength and Direction of Gravitational Forces";

  useAutoHeight({ container: containerRef.current, disabled: false });

  const saveToTable = (object1: SysObject, object2: SysObject, object3: SysObject) => {
    setInteractiveState(prevState => ({ rows: [...(prevState?.rows || []), {object1, object2, object3}] }));
  };

  const clearTable = () => {
    setInteractiveState({ rows: [] });
    handleChangeShowForceState(false);
  };

  const handleChangeShowForceState = (state: boolean) => {
    setShowForce(state);
  };

  return (
    <div className="app" ref={containerRef}>
      { !report && <MainView forceText={forceText} showForce={showForce} mode={mode} saveToTable={saveToTable} clearTable={clearTable} handleChangeShowForceState={handleChangeShowForceState}/> }
      <Table mode={mode} rows={interactiveState?.rows || []} forceText={forceText}/>
    </div>
  );
};
