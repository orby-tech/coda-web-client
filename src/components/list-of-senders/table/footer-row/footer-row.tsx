import axios from "axios";
import React from "react";
import { api_url } from "../../../../app-config";
import { TargetEnum } from "../../models";

interface Props {}

interface State {
  target: string;
  date: string;
  subject: string;
  errorOnForm: {
    target: boolean;
    date: boolean;
    subject: boolean;
  };
}

const HeadersOfFrom = () => {
  return (
    <>
      <tr>
        <td>{/* <h3>You can add new sendler:</h3> */}</td>
      </tr>
      <tr>
        <td>Target</td>
        <td>Event date</td>
        <td>Subject</td>
        <td></td>
      </tr>
    </>
  );
};

export default class FooterRow extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      target: "",
      date: "",
      subject: "",
      errorOnForm: {
        target: false,
        date: false,
        subject: false,
      },
    };
  }

  targetSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ target: e.target.value });
  };

  dateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: e.target.value });
  };

  subjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ subject: e.target.value });
  };

  addButton = () => {
    console.log(this.state);
    axios
      .post(api_url + "list-of-senders/add/", this.state)
      .then((e) => console.log(e));
  };

  render() {
    return (
      <tfoot>
        <HeadersOfFrom></HeadersOfFrom>
        <tr>
          <td>
            <select onChange={(e) => this.targetSelect(e)} required>
              <option defaultValue=""> </option>
              <option>{TargetEnum.telegram}</option>
              <option>{TargetEnum.email}</option>
            </select>
            {this.state.errorOnForm.target ? (
              <span style={{ color: "red" }}>Please Enter some value</span>
            ) : (
              ""
            )}
          </td>
          <td>
            <input type="date" onChange={(e) => this.dateChange(e)} required />
            {this.state.errorOnForm.date ? (
              <span style={{ color: "red" }}>Please Enter some value</span>
            ) : (
              ""
            )}
          </td>
          <td>
            <input
              type="text"
              onChange={(e) => this.subjectChange(e)}
              required
            />
            {this.state.errorOnForm.subject ? (
              <span style={{ color: "red" }}>Please Enter some value</span>
            ) : (
              ""
            )}
          </td>
          <td>
            <button onClick={(e) => this.addButton()}> Add </button>
          </td>
        </tr>
      </tfoot>
    );
  }
}
