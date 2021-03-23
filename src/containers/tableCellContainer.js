import { useState, useContext } from 'react'
import { Context } from "../context/provider";
import { changeField, removeItem } from "../context/actions/actions"
import { useCheckValue } from '../utils/useCheckValue'

import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import BasicCellTable from "../components/tableCell/basicCellTable";

const TableCellContainer = ({ value, idForChange, nameForChange, type, del }) => {
  const { dispatch } = useContext(Context);

  const valueInput = useCheckValue(value)

  const [itemChange, setItemChange] = useState({flag: false, id: null, nameField: null})

  const onDblClickChangeField = (e, id, nameField) => {
    if(!id || !nameField){
      return
    }
    setItemChange({...itemChange, flag: true, id: id, nameField: nameField})
  }

  const onClickRemoveRow = (e, id) => {
    if(del){
      dispatch(removeItem(id))
    }
  }

  const onClickConfirmChange = () =>{
    const value =  valueInput.value.trim()
    dispatch(changeField({...itemChange, value}))
    setItemChange({...itemChange, flag: false, id: null, nameField: null})
  }

  
  
    
  return (
    <BasicCellTable 
                    onDblClickChangeField = {onDblClickChangeField}
                    onRemove = {onClickRemoveRow}
                    id = {idForChange}
                    nameForChange = {nameForChange}
                    del = {del}>
      { !itemChange.flag && 
        !itemChange.id !== itemChange.id ? 
                                          value :
                                          <div className="cell-input"> 
                                            <TextField id="outlined-basic" 
                                                                        variant="outlined" 
                                                                        className="textField"
                                                                        size="small"
                                                                        value={valueInput.value}
                                                                        onChange={(e)=>{valueInput.onChange(e, type)}}/>
                                            <span className="table_icon">
                                              <FontAwesomeIcon 
                                                          className="iconDelet"
                                                          onClick={valueInput.checked ? onClickConfirmChange : null}
                                                          icon={faCheckCircle} 
                                                          color={valueInput.checked?                          
                                                                                  "green" : 
                                                                                  "red"}/>
                                              </span>
                                          </div>} 
    </BasicCellTable>
  )
}

export default TableCellContainer