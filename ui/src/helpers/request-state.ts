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