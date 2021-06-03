import axios from 'axios';
import React from 'react';
import { apiUrl } from '../../../../app-config';
import { TargetEnum } from '../../../../models';

interface ErrorOnForm {
  target: boolean;
  date: boolean;
  subject: boolean;
}
interface Props {}

interface State {
  formValues: {
    target: string;
    date: string;
    subject: string;
  };
  errorOnForm: ErrorOnForm;
}

const HeadersOfForm = () => (
  <>
    <tr>
      <td>{/* <h3>You can add new sendler:</h3> */}</td>
    </tr>
    <tr>
      <td>Target</td>
      <td>Event date</td>
      <td>Subject</td>
      <td />
    </tr>
  </>
);

export default class FooterRow extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      formValues: {
        target: '',
        date: '',
        subject: '',
      },
      errorOnForm: {
        target: false,
        date: false,
        subject: false,
      },
    };
  }

  targetSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { formValues } = this.state;
    this.setState({
      formValues: {
        ...formValues,
        target: e.target.value,
      },
    });
  };

  dateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { formValues } = this.state;
    this.setState({
      formValues: {
        ...formValues,
        date: e.target.value,
      },
    });
  };

  subjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { formValues } = this.state;

    this.setState({
      formValues: {
        ...formValues,
        subject: e.target.value,
      },
    });
  };

  private checkFrom = (): ErrorOnForm => {
    const errorOnForm = {
      target: false,
      date: false,
      subject: false,
    };
    const { formValues } = this.state;

    if (!formValues.target) {
      errorOnForm.target = true;
    }
    if (!formValues.date) {
      errorOnForm.date = true;
    }
    if (!formValues.subject) {
      errorOnForm.subject = true;
    }
    return errorOnForm;
  };

  private setDefaultValueOfState = (): void => {
    this.setState({
      formValues: {
        target: '',
        date: '',
        subject: '',
      },
      errorOnForm: {
        target: false,
        date: false,
        subject: false,
      },
    });
  };

  private sendNewItemValues = (): void => {
    const { formValues } = this.state;

    axios.post(`${apiUrl}list-of-senders/add/`, formValues);
  };

  addButton = () => {
    const errorOnForm = this.checkFrom();

    if (errorOnForm.target || errorOnForm.date || errorOnForm.subject) {
      this.setState({ errorOnForm });
      return;
    }

    this.sendNewItemValues();

    this.setDefaultValueOfState();
  };

  render() {
    const { formValues, errorOnForm } = this.state;

    return (
      <tfoot>
        <HeadersOfForm />
        <tr>
          <td>
            <select
              onChange={(e) => this.targetSelect(e)}
              value={formValues.target}
              required
            >
              <option defaultValue=""> </option>
              <option>{TargetEnum.telegram}</option>
              <option>{TargetEnum.email}</option>
            </select>
            {errorOnForm.target ? (
              <span style={{ color: 'red' }}>Please Enter some value</span>
            ) : (
              ''
            )}
          </td>
          <td>
            <input
              type="date"
              value={formValues.date}
              onChange={(e) => this.dateChange(e)}
              required
            />
            {errorOnForm.date ? (
              <span style={{ color: 'red' }}>Please Enter some value</span>
            ) : (
              ''
            )}
          </td>
          <td>
            <input
              type="text"
              value={formValues.subject}
              onChange={(e) => this.subjectChange(e)}
              required
            />
            {errorOnForm.subject ? (
              <span style={{ color: 'red' }}>Please Enter some value</span>
            ) : (
              ''
            )}
          </td>
          <td>
            <button type="submit" onClick={() => this.addButton()}> Add </button>
          </td>
        </tr>
      </tfoot>
    );
  }
}
