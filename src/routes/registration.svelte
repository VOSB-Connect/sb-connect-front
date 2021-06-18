<script>
    import { useForm, Hint, HintGroup, validators, minLength } from "svelte-use-form"

    let email = "sample@example.com";
    let password = "abc123";
    let duns = "1234";
    let message = "";
    let error;

    // const form = useForm()

    const submitForm = async() => {
        try {
            const submit = await fetch("./api/form", {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password,
                    duns,
                })
            })
            const data = await submit.json()
            message = data
        } catch (err) {
            error = err
        }    
    }


</script>

<main>
        {#if !message && !error} 
            <form on:submit|preventDefault={ submitForm }> 
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" bind:value={ email }>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" bind:value={ password }>

                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password">
                
                <label for="duns-number">DUNS #</label>
                <input type="text" id="duns-number" name="duns-number" bind:value={ duns }>

                <input type="submit" value="Register"> 
            </form>
        {:else if message}
            <p>Verification email has been sent to {email}. Please check email to varify.</p>
        {:else if error} 
            <p>{error}</p>
        {/if}
</main>


<style>
    label {
        display: block;
    }
</style>

