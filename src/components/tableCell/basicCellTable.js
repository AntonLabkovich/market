import './basicCellTable.scss';
import TableCell from '@material-ui/core/TableCell';

function BasicCellTable({ children, onDblClickChangeField, id, nameForChange, del, onRemove }) {
  return (
    <TableCell 
              className="table-cell" 
              onClick = {onRemove?(e)=>{onRemove(e, id, del)}:null} 
              onDoubleClick={onDblClickChangeField?(e)=>{onDblClickChangeField(e, id, nameForChange)}:null}>
      { children }
    </TableCell>
  );
}

export default BasicCellTable;
