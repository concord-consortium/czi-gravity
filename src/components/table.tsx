import React from "react";
import { IRow, Mode } from "../types";
import { ObjectSymbol } from "./object-symbol";
import { ForceArrows } from "./force-arrows";
import { ForceValue } from "./force-value";
import "./table.scss";

interface IProps {
  mode: Mode;
  rows: IRow[];
}

export const Table: React.FC<IProps> = ({ mode, rows }) => {
  const forceHeader = mode === "earth" ? "Gravitational force between object and Earth"
                                       : mode === "venus" ? "Gravitational forces between object and Venus"
                                                          : "Strength and Direction of Gravitational Forces";
  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            { !( mode === "earth" || mode === "venus" ) && <th>System</th>}
            <th>Object 1</th>
            { mode === "venus" ? <th>Gravitational force between object and Venus</th>
                               : mode !== "earth" && <th>Object 2</th>}
            { mode === "venus" ? <th>Gravitational force between object and Earth</th>
                               : <th>{forceHeader}</th> }
          </tr>
          {
            rows.map((_, idx) => {
              // Reverse order of rows.
              const idxReversed = rows.length - 1 - idx;
              const row = rows[idxReversed];
              return (
                <tr key={idxReversed} data-testid="data-row">
                  { !( mode==="earth" || mode === "venus" ) && <td>{ idxReversed + 1 }</td>}
                  <td><ObjectSymbol objectType={row.object1} small={true} /></td>
                  { !( mode==="earth" || mode === "venus" ) && <td><ObjectSymbol objectType={row.object2} small={true} /></td>}
                  { mode === "venus"
                    ? <>
                        <td><ForceValue object1={row.object1} object2={row.object2} /></td>
                        <td><ForceValue object1={row.object1} object2={row.object3} /></td>
                      </>
                    : mode === "earth"
                        ? <td><ForceValue object1={row.object1} object2={row.object2} /></td>
                        : <td><ForceArrows object1={row.object1} object2={row.object2} small={true} /></td>
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
