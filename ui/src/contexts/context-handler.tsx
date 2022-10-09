import { createContext, useContext, useState } from "react";

interface BodyContextInterface {
  baseUrl: string;
  setBaseUrl: Function;
  bodyValue: string;
  setBodyValue: Function;
  inputHeaders: string;
  setInputHeaders: Function;
}

export const ContextBody = createContext<BodyContextInterface>(null);

export const ContextBodyProvider = ({ children }) => {

  const [baseUrl, setBaseUrl] = useState("");
  const [bodyValue, setBodyValue] = useState(null);
  const [inputHeaders,setInputHeaders]=useState(null);

  return (
    <ContextBody.Provider
      value={{ baseUrl, setBaseUrl, bodyValue, setBodyValue ,setInputHeaders ,inputHeaders}}
    >
      {children}
    </ContextBody.Provider>
  );
};

export const useContextBody = () => useContext(ContextBody);
