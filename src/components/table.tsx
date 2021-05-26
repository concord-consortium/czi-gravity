import React from "react";
import { IRow, Mode } from "../types";
import { ObjectSymbol } from "./object-symbol";
import { ForceArrows } from "./force-arrows";
import { ForceValue } from "./force-value";
import "./table.scss";

interface IProps {
  mode: Mode;
  rows: IRow[];
  forceText: string;
}

export const Table: React.FC<IProps> = ({ mode, rows, forceText }) => {

  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            {!(mode==="earth") && <th>System</th>}
            <th>Object 1</th>{mode !== "earth" && <th>Object 2</th>}
            <th>{forceText}</th>
          </tr>
          {
            rows.map((_, idx) => {
              // Reverse order of rows.
              const idxReversed = rows.length - 1 - idx;
              const row = rows[idxReversed];
              return (
                <tr key={idxReversed} data-testid="data-row">
                  {!(mode==="earth") && <td>{ idxReversed + 1 }</td>}
                  <td><ObjectSymbol objectType={row.object1} small={true} /></td>
                  { mode !== "earth" && <td><ObjectSymbol objectType={row.object2} small={true} /></td>}
                  { mode === "earth"
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

