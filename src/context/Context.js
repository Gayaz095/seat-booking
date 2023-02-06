import React, { createContext, useState} from "react";

export const AmountContext = createContext();

  const AmountContextProvider = (props) => {
  const [price, setPrice] = useState('');

  const updatePrice = (newPrice) => {
  setPrice(newPrice);
  };

  return (
    <AmountContext.Provider value={{ price, updatePrice }}>
    {props.children}
    </AmountContext.Provider>
  )
};

export default AmountContextProvider;
