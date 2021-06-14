/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { inject, observer } from 'mobx-react';
import './App.css';

import ListOfSenders from './components/list-of-senders/list-of-senders';

const App = () => (
  <div className="App" data-testid="app-component">
    <ListOfSenders />
  </div>
);

export default inject('mainStore')(observer(App));
