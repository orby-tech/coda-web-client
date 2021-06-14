import axios from 'axios';
import React from 'react';
import { apiUrl } from '../../../../app-config';
import { targetEnum } from '../../../../models';
import RowComponent from '../row/row';

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
  <RowComponent
    target="Target"
    countOfDays="Event date"
    subject="Subject"
    lastSendDate=""
  />
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

  targetEdit = () => {
    const { formValues, errorOnForm } = this.state;
    return (
      <>
        <select
          onChange={(e) => this.targetSelect(e)}
          value={formValues.target}
          required
        >
          <option defaultValue=""> </option>
          <option>{targetEnum.telegram.name}</option>
          <option>{targetEnum.email.name}</option>
        </select>
        {errorOnForm.target ? (
          <span style={{ color: 'red' }}>Please Enter some value</span>
        ) : (
          ''
        )}
      </>
    );
  }

  eventDayEdit = () => {
    const { formValues, errorOnForm } = this.state;

    return (
      <>
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
      </>
    );
  }

  subjectEdit = () => {
    const { formValues, errorOnForm } = this.state;

    return (
      <>
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
      </>
    );
  }

  submitEdit = () => (
    <button type="submit" onClick={() => this.addButton()}> Add </button>
  )

  render = () => (
    <tfoot>
      <HeadersOfForm />
      <RowComponent
        target={this.targetEdit()}
        countOfDays={this.eventDayEdit()}
        subject={this.subjectEdit()}
        lastSendDate=""
        submit={this.submitEdit()}
      />
    </tfoot>
  )
}
