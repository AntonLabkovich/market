import { useState } from 'react'


export function useCheckValue(value) {
  const [currentValue, setCheckValue] = useState({checked: true, value: value})
  const onChange = (e, type) => {
    if(type==="number"){
      if(!isNaN(Number(e.target.value)) && e.target.value.trim()){
        setCheckValue({...currentValue, checked:true, value:e.target.value})
        return {...currentValue, onChange: onChange}
      } else {
        setCheckValue({...currentValue, checked:false, value:e.target.value})
        return {...currentValue, onChange: onChange}
      }
    }else{
      if(!e.target.value.trim()){
        setCheckValue({...currentValue, checked:false, value:e.target.value})
        return {...currentValue, onChange: onChange}
      }else{
        setCheckValue({...currentValue, checked:true, value:e.target.value})
        return {...currentValue, onChange: onChange}
      }
    }
  };
  return {...currentValue, onChange}
}