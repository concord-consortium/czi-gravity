import React, { useState } from "react";
import { MainView } from "./main-view";
import { Table } from "./table";
import { SysObject, Row } from "../types";
import "./app.scss";

export const App: React.FC = () => {
  const [rows, setRows ] = useState<Row[]>([]);

  const saveToTable = (object1: SysObject, object2: SysObject) => {
    setRows([...rows, {object1, object2} ]);
  };

  const clearTable = () => {
    setRows([]);
  };

  return (
    <div className="app">
      <MainView saveToTable={saveToTable} clearTable={clearTable} />
      <Table rows={rows} />
    </div>
  );
};

