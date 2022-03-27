import {strapiBase} from '$lib/api'

export async function post(endpoint, body, requiresAuth = false){
    let headers = {}
        headers['Content-Type'] = 'application/json'
        body = JSON.stringify(body || {});
    
    if (requiresAuth){
         const token = window.sessionStorage.getItem("auth");
         if(token.length > 2) {
             // This is needed for post requests that require a jwt token.
             const authToken = JSON.parse(token).jwt;
             headers['Authorization'] = `Bearer ${authToken}`;
        } 
    }
    
    try {
        const request = await fetch(`${strapiBase}/${endpoint}`, { method: 'POST', body, headers})
        return request;
    }catch(err){
        throw new Error(err.message)
    }
}

export async function get(endpoint, requiresAuth = false) {
    let headers = {};
        headers['Content-Type'] = 'application/json';

    if(requiresAuth)
    {
        const token = window.sessionStorage.getItem("auth");
        if (Object.keys(token).length !== 0) {
            const authToken = JSON.parse(token).jwt;
            headers['Authorization'] = `Bearer ${authToken}`;
        } 
    }
    
    try {
        const request = await fetch(`${strapiBase}/${endpoint}`, { method: 'GET', headers });    
        return request;
    } catch (err) {
        throw new Error(err.message)
    } 
}

export async function del(endpoint, requiresAuth = false) {
    let headers = {};
        headers['Content-Type'] = 'application/json';
    
    if (requiresAuth) {
        const token = window.sessionStorage.getItem('auth');
        if (Object.keys(token).length !== 0) {
            const authToken = JSON.parse(token).jwt;
            headers['Authorization'] = `Bearer ${authToken}`;
        }
    } 
    
    try {
        const request = await fetch(`${strapiBase}/${endpoint}`, { method: 'DELETE', headers });
        if (request.ok) return request;
    } catch (err) {
        throw new Error(err.message);
    }
}

export async function put(endpoint, body, requiresAuth = false) {
        
    let headers = {};
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(body || {})
    
    if (requiresAuth) {
        const token = window.sessionStorage.getItem('auth');
        if (Object.keys(token).length !== 0) {
            const authToken = JSON.parse(token).jwt;
            headers['Authorization'] = `Bearer ${authToken}`;
        }
    } 

    try {
        const request = await fetch(`${strapiBase}/${endpoint}`, { method: 'PUT', body, headers });
        if (request.ok) return request;
    } catch (err) {
        throw new Error(err.message);
    } 
}

export function formatDate(isoString){
    if (isoString === null) return "--";

    const date = new Intl.DateTimeFormat("en", {
        timeStyle: "short",
        dateStyle: "short"
    }).format(new Date(isoString));

    return date
}