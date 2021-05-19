import React, { useRef } from "react";
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

  useAutoHeight({ container: containerRef.current, disabled: false });

  const saveToTable = (object1: SysObject, object2: SysObject) => {
    setInteractiveState(prevState => ({ rows: [...(prevState?.rows || []), {object1, object2}] }));
  };

  const clearTable = () => {
    setInteractiveState({ rows: [] });
  };

  return (
    <div className="app" ref={containerRef}>
      { !report && <MainView version={version} saveToTable={saveToTable} clearTable={clearTable} /> }
      <Table version={version} rows={interactiveState?.rows || []} />
    </div>
  );
};

