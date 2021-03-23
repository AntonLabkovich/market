import './basicHeadTable.scss';
import TableHead from '@material-ui/core/TableHead';

function BasicHeadTable({ children }) {
  return (
    <TableHead>
      { children }
    </TableHead>
  );
}

export default BasicHeadTable;
