import axios from "axios";
import React from "react";
import { api_url } from "../../../../app-config";
import { SenderType, TargetEnum } from "../../models";
import TargetInfo from "../../target-info/target-info";

interface Props {
  rows: SenderType[];
}
const RowsOfListOfSenders = (props: Props) => {
  const deleteItem = (id: string) => {
    axios
      .post(api_url + "list-of-senders/delete/", { id: id })
  };
  return (
    <tbody>
      {props.rows.map((row, i) => {
        return (
          <tr key={`${row.id}_${i}`}>
            <td>
              <TargetInfo target={row.target as TargetEnum}></TargetInfo>
            </td>
            <td>{row.count_of_days}</td>
            <td>{row.subject}</td>
            <td>{row.last_send_date}</td>
            <td>
              <button onClick={() => deleteItem(row.id)}>Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default RowsOfListOfSenders;
