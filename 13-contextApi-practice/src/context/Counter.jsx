import {createContext} from 'react';
import { useState } from 'react';

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  let [count,setCount]= useState(0);
  return(
    <CounterContext.Provider value={{count,setCount}}>
      {props.children}
    </CounterContext.Provider>
  );
};

