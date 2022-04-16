import { supabase } from "./db"

export async function registeruser(userIntakeForm) {
	const { user, session, error } = await supabase.auth.signUp({
		email: userIntakeForm.email,
		password: userIntakeForm.password
	})

	
}