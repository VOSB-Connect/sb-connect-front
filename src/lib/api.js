// const isProduction = false;
import { dev } from '$app/env'

export const strapiBase = (dev) ? "http://localhost:1337" : "https://sb-connect-back-strapi.herokuapp.com" ;