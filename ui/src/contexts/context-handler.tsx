import { createContext, useContext, useState } from "react";

interface BodyContextInterface {
  baseUrl: string;
  setBaseUrl: Function;
  bodyVal: string;
  setBodyVal: Function;
  inputHeaders: string;
  setInputHeaders: Function;
}

export const ContextBody = createContext<BodyContextInterface>(null);

export const ContextBodyProvider = ({ children }) => {

  const [baseUrl, setBaseUrl] = useState("http://localhost:3001/");
  const [bodyVal, setBodyVal] = useState(null);
  const [inputHeaders,setInputHeaders]=useState(null);

  return (
    <ContextBody.Provider
      value={{ baseUrl, setBaseUrl, bodyVal, setBodyVal ,setInputHeaders ,inputHeaders}}
    >
      {children}
    </ContextBody.Provider>
  );
};

export const useContextBody = () => useContext(ContextBody);
