import React from "react";
import { IRow } from "../types";
import { ObjectSymbol } from "./object-symbol";
import { ForceArrows } from "./force-arrows";
import "./table.scss";

interface IProps {
  version: string;
  rows: IRow[];
}

export const Table: React.FC<IProps> = ({ rows }) => {
  return (
    <div className="table">
      <table>
        <tbody>
          <tr><th>System</th><th>Object 1</th><th>Object 2</th><th>Strength and Direction of Gravitational Forces</th></tr>
          {
            rows.map((_, idx) => {
              // Reverse order of rows.
              const idxReversed = rows.length - 1 - idx;
              const row = rows[idxReversed];
              return (
                <tr key={idxReversed}>
                  <td>{ idxReversed + 1 }</td>
                  <td><ObjectSymbol objectType={row.object1} small={true} /></td>
                  <td><ObjectSymbol objectType={row.object2} small={true} /></td>
                  <td><ForceArrows object1={row.object1} object2={row.object2} small={true} /></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

