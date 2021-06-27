import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import ListOfSenders from './components/list-of-senders/list-of-senders';

const AppStyled = styled.div`
  width: 100%;
`;

const AppComponent = () => (
  <AppStyled data-testid="app-component">
    <ListOfSenders />
  </AppStyled>
);

const App = inject('mainStore')(observer(AppComponent));

export default App;
