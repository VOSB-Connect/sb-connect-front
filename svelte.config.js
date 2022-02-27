import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-netlify"
/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter()
	},

    preprocess: [preprocess({
        "postcss": true
    })]
};

export default config;
// Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
const mode = process.env.NODE_ENV;
const dev = mode === "development";
process.env.TAILWIND_MODE = dev ? "watch" : "build";
