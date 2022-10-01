import { createContext, useContext, useState } from "react";

interface BodyContextInterface {
  baseUrl: string;
  setBaseUrl: Function;
  bodyVal: string;
  changeBodyVal: Function;
  bodyChangeHandler: Function;
  finalBody:object;
}

export const ContextBody = createContext<BodyContextInterface>(null);

export const ContextBodyProvider = ({ children }) => {
  let finalBody;

  const [baseUrl, setBaseUrl] = useState("");
  const [bodyVal, changeBodyVal] = useState("{}");



  const bodyChangeHandler = () => {
    // event.preventDefault();
    finalBody=JSON.parse(bodyVal)
    // console.log((finalBody));
    changeBodyVal('{}')
    return finalBody
  };

  return (
    <ContextBody.Provider
      value={{ baseUrl, setBaseUrl, bodyVal, changeBodyVal, bodyChangeHandler ,finalBody }}
    >
      {children}
    </ContextBody.Provider>
  );
};

export const useContextBody = () => useContext(ContextBody);
