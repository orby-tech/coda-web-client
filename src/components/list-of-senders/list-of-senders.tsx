import axios from 'axios';
import React from 'react';
import { apiUrl } from '../../app-config';
import { SenderType } from '../../models';
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

  render = () => {
    const { rows } = this.state;
    if (!rows.length) {
      return this.renderWithOutData();
    }

    return this.renderWithData();
  };

  private getListOfSenders = () => {
    axios
      .get(`${apiUrl}list-of-senders/`)
      .then((res) => this.setState({ rows: res.data as SenderType[] }));
  };

  private renderWithData = () => {
    const { rows } = this.state;
    return (
      <div date-testid="list-of-senders-component">
        <ListOfSendersTable rows={rows} />
      </div>
    );
  }

  private renderWithOutData = () => (
    <div date-testid="list-of-senders-not-found-error-component">
      Oops. Not founded
    </div>
  );
}

export default ListOfSenders;
