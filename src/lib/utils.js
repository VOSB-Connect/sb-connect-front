import {browser} from '$app/env'
import {strapiBase} from '$lib/api'
function browserGet(key){
    if(browser){
        const item = localStorage.getItem(key);
        return item && JSON.parse(item)
    } 
    return null
}

export function browserSet(key, value){
    browser && localStorage.setItem(key, value)
}

export async function post(endpoint, body){
   let customError = false

   try{
    let headers = {}
    headers['Content-Type'] = 'application/json',
    body = JSON.stringify(body || {})
    const token = browserGet('jwt');
    if(token) headers['Authorization'] = 'Bearer ' + token;

    const response = await fetch(`${strapiBase}/${endpoint}`, { method: 'POST', body, headers})
    if(!response.ok){
        try {
            const data = await response.json();
            return data;
            // const error = data.message[0].messages[0];
            // customError = true;
            // throw { id: error.id, message: error.message }
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