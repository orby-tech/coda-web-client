import { SenderType } from '../models';
import RowsOfListOfSenders from './body-of-table/rows-of-list-of-senders';
import FooterRow from './footer-row/footer-row';
import Header from './header/header';
import './table.css';

interface Props {
  rows: SenderType[];
}

const ListOfSendersTable = ({ rows }: Props) => (
  <table>
    <Header />
    <RowsOfListOfSenders rows={rows} />
    <FooterRow />
  </table>
);

export default ListOfSendersTable;
