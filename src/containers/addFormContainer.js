import { Context } from "../context/provider";
import { useContext, useState } from 'react'
import { useInput } from '../utils/useInput'
import { addItem } from '../context/actions/actions'


import AddForm from '../modules/addForm/addForm';

export const rowHeader = {
  name: "Название товара",
  count: "Количество",
  price: "Цена"
}

const AddFormContainer = () => {
  const { dispatch } = useContext(Context);

  let name = useInput('')
  let count = useInput('')
  let price = useInput('')

  const onClickAdd = () => {
    let newProduct = {}
    if(name.value.trim() && count.value.trim() && price.value.trim() && !isNaN(Number(count.value)) && !isNaN(Number(price.value))){
      newProduct.name = name.value.trim()
      newProduct.count = count.value.trim()
      newProduct.price = price.value.trim()
      dispatch(addItem(newProduct))
      price.onChange(null,'')
      count.onChange(null,'')
      name.onChange(null,'')
    }
  }

  return (
    <AddForm name={name} count={count} price={price} onClickAdd = {onClickAdd} rowHeader={rowHeader}/>
  )
}

export default AddFormContainer