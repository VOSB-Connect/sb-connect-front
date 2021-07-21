<script>
    // import { useForm, Hint, HintGroup, validators, minLength } from "svelte-use-form"
    import Cage from '$lib/components/cage.svelte'
    import Verify from '$lib/components/verify.svelte'

    let isCageCodeEmpty = true;
    let userInformation;

</script>

<main>
    {#if isCageCodeEmpty}
        <Cage bind:isCageCodeEmpty={ isCageCodeEmpty } bind:userInformation={ userInformation }/>
    {:else }
        <Verify bind:userInformation={ userInformation }></Verify>
    {/if}


    <!-- {#if message == ""} 
            {#if !didRegister}
                <p>{error}</p>
            {/if}
            <form on:submit|preventDefault={ submitForm }>
                <label for="companyName">Company Name:</label>
                <input type="text" id="companyName" name="companyName" bind:value={ companyName } >

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
        {:else if didRegister}
            <p>Verification email has been sent to {email}. Please check email to varify.</p>
        {/if} -->
</main>


<style>
    label {
        display: block;
    }
</style>

