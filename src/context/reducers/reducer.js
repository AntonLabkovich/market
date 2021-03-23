
export const productReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      console.log(action.data)
      const index = state.findIndex((item)=>action.data.id === item.id)
      state[index][action.data.nameField] = action.data.value
      return [...state];
    case "REMOVE_ITEM":
      const newState = state.filter((item)=> item.id !== action.id)
      return [...newState];
    case "ADD_ITEM":
      action.data.id = state.length + 1
      return [...state, action.data];
    default:
      return state;
  }
};