import React from "react";
import { Row } from "../types";
import { ObjectSymbol } from "./object-symbol";
import { ForceArrows } from "./force-arrows";
import "./table.scss";

interface IProps {
  rows: Row[];
}

export const Table: React.FC<IProps> = ({ rows }) => {
  return (
    <div className="table">
      <table>
        <tbody>
          <tr><th>System</th><th>Object 1</th><th>Object 2</th><th>Strength and Direction of Gravitational Force</th></tr>
          {
            rows.map((row, idx) =>
              <tr key={idx}>
                <td>{ idx + 1 }</td>
                <td><ObjectSymbol objectType={row.object1} small={true} /></td>
                <td><ObjectSymbol objectType={row.object2} small={true} /></td>
                <td><ForceArrows object1={row.object1} object2={row.object2} small={true} /></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

