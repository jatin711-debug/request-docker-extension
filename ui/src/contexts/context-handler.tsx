import { createContext, useContext, useState } from "react";

interface BodyContextInterface{
    baseUrl:string;
    setBaseUrl:Function
}
export const ContextBody = createContext<BodyContextInterface>(null);

export const ContextBodyProvider = ({children})=> {
    const [baseUrl,setBaseUrl] = useState("");
    return (
        <ContextBody.Provider value={{baseUrl,setBaseUrl}}>
            {children}
        </ContextBody.Provider>
    );
}

export const useContextBody = ()=> useContext(ContextBody);