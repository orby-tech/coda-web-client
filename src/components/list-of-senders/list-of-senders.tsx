import axios from "axios";
import React from "react";
import { api_url } from "../../app-config";
import { SenderType } from "./models";
import ListOfSendersTable from "./table/table";

interface Props {}

interface State {
  rows: SenderType[];
}

class ListOfSenders extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      rows: [],
    };
  }
  componentDidMount() {
    this.get_list_of_senders();
  }
  get_list_of_senders = () => {
    axios
      .get(api_url + "list-of-senders/")
      .then((res) => this.setState({ rows: res.data as SenderType[] }));
  };
  render = () => {
    return (
      <div>
        <ListOfSendersTable rows={this.state.rows}></ListOfSendersTable>
      </div>
    );
  };
}

export default ListOfSenders;
