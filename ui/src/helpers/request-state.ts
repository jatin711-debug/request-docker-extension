import axios from 'axios';

export const requestStates = [
    {type:"POST"},
    {type:"GET"},
    {type:"DELETE"},
    {type:"PUT"}
]

export const createHttpRequest = async (method: string, url: string, data:Object={}) =>{
    console.log(method + " "+url+" "+JSON.stringify(data));
    const response:any = axios({
        method,
        url,
        data:JSON.stringify(data),
        headers:{

        }
    });
    return response;
}

export const validateRequest = (url:String) =>{
    if(url.length <= 1 || url === undefined || url === null || url.trim() === ""){
        return false
    }
    return true;
}