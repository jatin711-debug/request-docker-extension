import { createContext, useContext, useState } from "react";

interface BodyContextInterface{
    baseUrl:string;
    setBaseUrl:Function
}
interface BodyContextInterface{
    bodyVal:string;
    changeBodyVal:Function
}
export const ContextBody = createContext<BodyContextInterface>(null);

export const ContextBodyProvider = ({children})=> {
    const [baseUrl,setBaseUrl] = useState("");
  const [bodyVal, changeBodyVal] = useState('');

    
    return (
        <ContextBody.Provider value={{baseUrl,setBaseUrl,bodyVal,changeBodyVal}}>
            {children}
        </ContextBody.Provider>
    );
}

export const useContextBody = ()=> useContext(ContextBody);