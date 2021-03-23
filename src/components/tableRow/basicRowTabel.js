import './basicRowTable.scss';
import TableRow from '@material-ui/core/TableRow';

function BasicRowTable({ children }) {
  return (
    <TableRow>
      { children }
    </TableRow>
  );
}

export default BasicRowTable;