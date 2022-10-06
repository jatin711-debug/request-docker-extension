import axios from 'axios';

export const requestStates = [
    {type:"POST"},
    {type:"GET"},
    {type:"DELETE"},
    {type:"PUT"}
]

export const createHttpRequest = async (method: string, url: string, data:Object={},headers:any="",params:Object={}) => {
    console.log(method + " "+url+" "+" Params:: "+JSON.stringify(params)+" Body::"+JSON.stringify(data))
    console.log(headers);
    const response:any = axios({
        method,
        url,
        headers:headers,
        data,
    });
    return response;
}

export const validateRequest = (url:String) => {
    if(url.length <= 1 || url === undefined || url === null || url.trim() === ""){
        return false
    }
    return true;
}