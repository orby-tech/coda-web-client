import { observer } from 'mobx-react';
import styled from 'styled-components';
import { SenderType } from '../../../models';
import RowsOfListOfSenders from './body-of-table/rows-of-list-of-senders';
import FooterRow from './footer-row/footer-row';
import Header from './header/header';

interface Props {
  rows: SenderType[];
}

const Table = styled.table`
  margin: 0 auto;
`;

const ListOfSendersTable = ({ rows }: Props) => (
  <Table>
    <Header />
    <RowsOfListOfSenders rows={rows} />
    <FooterRow />
  </Table>
);

export default observer(ListOfSendersTable);
