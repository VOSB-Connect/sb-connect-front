// const isProduction = false;
import { dev } from '$app/env'

export const strapiBase = (dev) ? "http://localhost:1337" : process.env.MY_HEROKU_URL ;