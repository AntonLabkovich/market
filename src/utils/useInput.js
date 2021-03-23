import { useState } from 'react'

export function useInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  const onChange = (e,value='') => {
    if(e){
      setValue(e.target.value)
    }else{
      setValue(value)
    }
    
  }

  return {
    value, onChange
  }
} 