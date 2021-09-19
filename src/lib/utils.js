import {strapiBase} from '$lib/api'
export async function post(endpoint, body){
   let customError = false

   try{
    let headers = {}
    headers['Content-Type'] = 'application/json',
    body = JSON.stringify(body || {})
    const token = sessionStorage.getItem("auth");
    if(token) headers['Authorization'] = 'Bearer ' + token;

    const response = await fetch(`${strapiBase}/${endpoint}`, { method: 'POST', body, headers})
    if(!response.ok){
        try {
            const data = await response.json();
            return data;
        } catch(err){
            console.error(err);
        }    
    }
    try { 
        return response;
    } catch(err){
        console.error(err);
        throw err;
    }
   }catch(err){
    console.error(err);
    throw customError ? err : {id: '', message: 'An unknown error occured'}
   }
}