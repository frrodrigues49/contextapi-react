import React, { createContext, useContext, useState } from "react";

// TODO: recebendo o create context
export const CountContext = createContext();

// TODO: criando o provider
export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// TODO: criando o hook para para retornar os estados
export function useCount() {
  const context = useContext(CountContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { count, setCount } = context;

  return { count, setCount };
}
