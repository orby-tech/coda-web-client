import { inject, observer } from 'mobx-react';
import React from 'react';
import { SenderType } from '../../models';
import { Stores } from '../../stores/main-store';
import ListOfSendersTable from './table/table';

interface Props extends Stores {}

const ListOfSenders = ({ mainStore }:Props) => {
  if (!mainStore || (mainStore && !mainStore.rows.length)) {
    return noDataComponent();
  }

  return dataComponent(mainStore.rows);
};

export default inject('mainStore')(observer(ListOfSenders));

const dataComponent = (rows: SenderType[]) => (
  <div date-testid="list-of-senders-component">
    <ListOfSendersTable rows={rows} />
  </div>
);

const noDataComponent = () => (
  <div date-testid="list-of-senders-not-found-error-component">
    Oops. Not founded
  </div>
);
