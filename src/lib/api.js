// const isProduction = false;

export const strapiBase = import.meta.env.VITE_NODE_ENV == "dev"
	? 'http://localhost:1337'
	: 'https://sb-connect-back-strapi.herokuapp.com/';