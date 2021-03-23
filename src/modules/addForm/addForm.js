import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


import './addForm.scss';





function AddForm({ name, count, price, onClickAdd, rowHeader }) {

  
  return (
    <TableRow>
      <TableCell>
        <TextField label={rowHeader.name} variant="outlined" value={name.value} onChange={(e)=>name.onChange(e,'')}/>
      </TableCell>
      <TableCell>
        <TextField label={rowHeader.count} variant="outlined" value={count.value} onChange={(e)=>count.onChange(e,'')}/>
      </TableCell>
      <TableCell>
        <TextField label={rowHeader.price} variant="outlined" value={price.value} onChange={(e)=>price.onChange(e,'')}/>
      </TableCell>
      <TableCell>
        <div className="add_button" onClick={onClickAdd}>
          <FontAwesomeIcon icon={faCheckCircle}  color = "green"/>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default AddForm;
