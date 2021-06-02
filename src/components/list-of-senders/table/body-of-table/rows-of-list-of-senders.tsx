import axios from 'axios';
import { apiUrl } from '../../../../app-config';
import { SenderType, TargetEnum } from '../../models';
import TargetInfo from '../../target-info/target-info';

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
        <tr key={`${row.id}`}>
          <td>
            <TargetInfo target={row.target as TargetEnum} />
          </td>
          <td>{row.count_of_days}</td>
          <td>{row.subject}</td>
          <td>{row.last_send_date}</td>
          <td>
            <button type="submit" onClick={() => deleteItem(row.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default RowsOfListOfSenders;
