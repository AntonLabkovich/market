export const CHANGE_FIELD = "CHANGE_FIELD";
export const REMOVE_ITEM = "REMOVE_ITEM"
export const ADD_ITEM = "ADD_ITEM"


export const changeField = data => {
  return ({
    type: CHANGE_FIELD,
    data
  });
}

export const removeItem = id => {
  return ({
    type: REMOVE_ITEM,
    id
  });
}

export const addItem = data => {
  return ({
    type: ADD_ITEM,
    data
  });
}

