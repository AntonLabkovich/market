import { Context } from "../context/provider";
import { useContext, useState } from 'react'

import { getSum } from '../utils/useGetSummary'

import ShowSum from "../components/showSum/showSum";



const ShowSumContainer = () => {
  const { products } = useContext(Context);
  
  const sum = getSum(products)

  return (
    <ShowSum>
      Cумма всех продуктов <span>{sum}</span>
    </ShowSum>
  )
}

export default ShowSumContainer