import { persist, sessionStorage } from "@macfja/svelte-persistent-store"
import { writable } from "svelte/store"

export let auth = persist(writable({}), sessionStorage(), "auth");