import './basicBodyTable.scss';
import TableBody from '@material-ui/core/TableBody';

function BasicBodyTable({ children }) {
  return (
    <TableBody>
      { children }
    </TableBody>
  );
}

export default BasicBodyTable;
