import { createClient } from '@supabase/supabase-js'
import { readable } from 'svelte/store'

export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export const supabaseAuth = readable(supabase.auth.user(), set => {
	supabase.auth.onAuthStateChange( (event, session) => set(session))
})


// TODO: add custom queries/inserts/updates/deletes here
