// const isProduction = false;
import { dev } from '$app/env'

export const strapiBase = (process.env.NODE_ENV ==="production") ? process.env.MY_HEROKU_URL : "http://localhost:1337";