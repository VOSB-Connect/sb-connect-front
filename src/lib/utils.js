import {strapiBase} from '$lib/api'

export async function post(endpoint, body){
   let customError = false

   try{
    let headers = {}
     headers['Content-Type'] = 'application/json'
     body = JSON.stringify(body || {});
    
    const token = window.sessionStorage.getItem("auth");
    if(token.length > 2){
        // This is needed for post requests that require a jwt token.
        const authToken = JSON.parse(token).jwt;
        headers['Authorization'] = `Bearer ${authToken}`;
    } 
    
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

export async function publicPost(endpoint, body){
    let customError = false
 
    try{
     let headers = {}
     headers['Content-Type'] = 'application/json'
     body = JSON.stringify(body || {})
      
     
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
 

export async function get(endpoint) {
    let customError = false;
    try {
        let headers = {};
        headers['Content-Type'] = 'application/json';

        const token = window.sessionStorage.getItem("auth");
        if (Object.keys(token).length !== 0) {
            const authToken = JSON.parse(token).jwt;
            headers['Authorization'] = `Bearer ${authToken}`;
        } 
        const response = await fetch(`${strapiBase}/${endpoint}`, { method: 'GET', headers });
        if(!response.ok){
            try {
                const data = await response.json();
                return data;
            } catch (err) {
                console.error(err);
            } 
        }
        try {
            return response;
        } catch (err) {
            console.error(err);
            throw err;
        }
    } catch (error) {
        console.error(error);
		throw customError ? error : { id: '', message: 'An unknown error occured' };
    }
}

export async function getPublic(endpoint) {
    let customError = false;
    try {
        let headers = {}
        headers['Content-Type'] = 'application/json';
        
        const response = await fetch(`${strapiBase}/${endpoint}`, { method: 'GET', headers });
        if(!response.ok){
            try {
                return await response.json();
            } catch (err) {
                console.error(err);
            } 
        }
        try {
            return response;
        } catch (err) {
            console.error(err);
            throw err;
        }
    } catch (error) {
        console.error(error);
		throw customError ? error : { id: '', message: 'An unknown error occured' };
    }
}

export function formatDate(isoString){
    const date = new Intl.DateTimeFormat("en", {
        timeStyle: "short",
        dateStyle: "short"
    }).format(new Date(isoString));

    return date
}