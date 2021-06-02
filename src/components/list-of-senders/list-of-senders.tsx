import axios from 'axios';
import React from 'react';
import { apiUrl } from '../../app-config';
import { SenderType } from './models';
import ListOfSendersTable from './table/table';

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
    this.getListOfSenders();
  }

  getListOfSenders = () => {
    axios
      .get(`${apiUrl}list-of-senders/`)
      .then((res) => this.setState({ rows: res.data as SenderType[] }));
  };

  render = () => {
    const { rows } = this.state;
    return (
      <div>
        <ListOfSendersTable rows={rows} />
      </div>
    );
  };
}

export default ListOfSenders;
