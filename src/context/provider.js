import React, { useReducer } from "react";

import initialState from '../assets/data/data'
import { productReducer } from "./reducers/reducer";

export const Context = React.createContext();

function init(initialState) {
  return initialState
}

const Provider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, initialState, init);

  return (
    <Context.Provider value={{ products, dispatch }}>
      { children }
    </Context.Provider>
  );
};

export default Provider;