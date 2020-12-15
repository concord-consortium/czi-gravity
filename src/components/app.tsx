import React, { useRef } from "react";
import { MainView } from "./main-view";
import { Table } from "./table";
import { SysObject, IInteractiveState } from "../types";
import { useAutoHeight } from "../hooks/use-auto-height";
import { useInteractiveState } from "@concord-consortium/lara-interactive-api";
import "./app.scss";

export const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { interactiveState, setInteractiveState } = useInteractiveState<IInteractiveState>();

  useAutoHeight({ container: containerRef.current, disabled: false });

  const saveToTable = (object1: SysObject, object2: SysObject) => {
    setInteractiveState(prevState => ({ rows: [...(prevState?.rows || []), {object1, object2}] }));
  };

  const clearTable = () => {
    setInteractiveState({ rows: [] });
  };

  return (
    <div className="app" ref={containerRef}>
      <MainView saveToTable={saveToTable} clearTable={clearTable} />
      <Table rows={interactiveState?.rows || []} />
    </div>
  );
};

