import React, { useRef, useState } from "react";
import { MainView } from "./main-view";
import { Table } from "./table";
import { SysObject, IInteractiveState } from "../types";
import { useAutoHeight } from "../hooks/use-auto-height";
import { useInteractiveState, useInitMessage } from "@concord-consortium/lara-interactive-api";
import { getVersion } from "../utils/utils";
import "./app.scss";

export const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { interactiveState, setInteractiveState } = useInteractiveState<IInteractiveState>();
  const initMsg = useInitMessage();
  const report = initMsg?.mode === "report";
  const version = getVersion();
  const [ showForce, setShowForce ] = useState(false);

  useAutoHeight({ container: containerRef.current, disabled: false });

  const saveToTable = (object1: SysObject, object2: SysObject) => {
    setInteractiveState(prevState => ({ rows: [...(prevState?.rows || []), {object1, object2}] }));
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
      { !report && <MainView showForce={showForce} version={version} saveToTable={saveToTable} clearTable={clearTable} handleChangeShowForceState={handleChangeShowForceState}/> }
      <Table rows={interactiveState?.rows || []} />
    </div>
  );
};

