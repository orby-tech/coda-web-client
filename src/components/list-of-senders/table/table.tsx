import React from "react";
import { SenderType, TargetEnum } from "../models";
import TargetInfo from "../target-info/target-info";
import FooterRow from "./footer-row/footer-row";
import "./table.css";

interface Props {
  rows: SenderType[];
}

const Header = () => {
  return (
    <thead>
      <tr>
        <td className="target-block">Target</td>
        <td>Count of Days</td>
        <td>Subject</td>
        <td>Last send date</td>
      </tr>
    </thead>
  );
};

const RowsOfListOfSenders = (props: Props) => {
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
          </tr>
        );
      })}
    </tbody>
  );
};

const ListOfSendersTable = (props: Props) => {
  console.log(props);
  return (
    <table>
      <Header></Header>
      <RowsOfListOfSenders rows={props.rows}></RowsOfListOfSenders>

      <FooterRow></FooterRow>
    </table>
  );
};

export default ListOfSendersTable;
