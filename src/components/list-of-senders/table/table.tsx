import React from "react";
import { SenderType } from "../models";
import "./table.css";

interface Props {
  rows: SenderType[];
}
const ListOfSendersTable = (props: Props) => {
  console.log(props);
  return (
    <table>
      <thead>
        <tr>
          <td>Target</td>
          <td>Count of Days</td>
          <td> Last send date</td>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, i) => {
          return (
            <tr key={`${row.id}_${i}`}>
              <td>{row.target}</td>
              <td>{row.count_of_days}</td>
              <td>{row.last_send_date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListOfSendersTable;
