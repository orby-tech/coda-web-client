import axios from 'axios';
import { apiUrl } from '../../../../app-config';
import { SenderType } from '../../../../models';
import TargetInfoComponent from '../../target-info/target-info';
import RowComponent from '../row/row';

interface Props {
  rows: SenderType[];
}
const RowsOfListOfSenders = ({ rows }: Props) => {
  const deleteItem = (id: string) => {
    axios.post(`${apiUrl}list-of-senders/delete/`, { id });
  };
  return (
    <tbody>
      {rows.map((row) => (
        <RowComponent
          key={`${row.id}`}
          target={<TargetInfoComponent targetName={row.target} />}
          countOfDays={row.countOfDays}
          subject={row.subject}
          lastSendDate={row.lastSendDate}
          submit={<button type="submit" onClick={() => deleteItem(row.id)}>Delete</button>}
        />
      ))}
    </tbody>
  );
};

export default RowsOfListOfSenders;
