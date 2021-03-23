import { useContext } from "react";

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


import { Context } from "../../context/provider";
import BasicHeadTable from "../../components/tableHead/basicHeadTable";

import './basicTabel.scss';
import BasicRowTable from "../../components/tableRow/basicRowTabel";
import BasicBodyTable from "../../components/tableBody/basicBodyTabel";
import BasicCellTable from "../../components/tableCell/basicCellTable"
import TableCellContainer from "../../containers/tableCellContainer"
import AddFormContainer from "../../containers/addFormContainer";

const rowHeader = {
  name: "Название товара",
  count: "Количество",
  price: "Цена"
}

const typeInput = {
  string: "string",
  number: "number"
}

function BasicTabel() {
  const valuesTabelHead = Object.keys(rowHeader)

  const { products } = useContext(Context);
  console.log(products)
  return (
    <TableContainer component={Paper} className="container">
      <Table>
        <BasicHeadTable>
          <BasicRowTable>
            {valuesTabelHead.map((item,i) => 
                                            <BasicCellTable 
                                                            onDblClickChangeField = {null}
                                                            onRemove = {null} key={i}>
                                              {rowHeader[item]}
                                            </BasicCellTable>)}
            <BasicCellTable>Удалить</BasicCellTable>
          </BasicRowTable>
        </BasicHeadTable>
        <BasicBodyTable>
          {products.map((item,i) => 
          <BasicRowTable key={item.id}>
            <TableCellContainer idForChange={item.id} nameForChange={valuesTabelHead[0]} value={item.name} type={typeInput.string}/>
            <TableCellContainer idForChange={item.id} nameForChange={valuesTabelHead[1]} value={item.count} type={typeInput.number}/>
            <TableCellContainer idForChange={item.id} nameForChange={valuesTabelHead[2]} value={item.price} type={typeInput.number}/>
            <TableCellContainer del={true} idForChange={item.id} value={<FontAwesomeIcon  icon={faTimesCircle} color= "red"/>} />
          </BasicRowTable>)}
          <AddFormContainer/>
        </BasicBodyTable>
        
      </Table>
    </TableContainer>
  );
}

export default BasicTabel;
