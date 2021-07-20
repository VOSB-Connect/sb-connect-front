<script>
    // import { useForm, Hint, HintGroup, validators, minLength } from "svelte-use-form"
    import Cage from '$lib/components/cage.svelte'

    // let companyName = "testCompany";
    // let email = "sample@example.com";
    // let password = "abc123";
    // let cage = "12345";
    // let message = "";
    // let didRegister = true
    // let confirmed = true;
    // let error;
    let cageCode;
    

    async function getInformation(){
        // let response = await fetch(`https://api.sam.gov/entity-information/v1/entities?api_key=r3cYNK8ZhHkddQ6mX6Km8PqZG8JBqKqhWWWyLmlL&cageCode=${ cageCode }`)
        // let data = await response.json()
        // data.then(console.log)
        console.log(cageCode)
    }


    // const submitForm = async() => {
    //     try {

    //         const registrationHeaders = new Headers();
    //         registrationHeaders.append("Content-Type", "application/json")
    //         const registrationInfo = JSON.stringify({
    //                 email,
    //                 companyName,
    //                 password,
    //                 username: cage,
    //                 confirmed
    //         });
    //         const requestOptions = {
    //             method: "POST",
    //             headers: registrationHeaders,
    //             body: registrationInfo,
    //             redirect: 'follow'
    //         };
            
    //         const register = await fetch("http://localhost:1337/auth/local/register", requestOptions);
            
    //         if(register.ok){
    //             const registerResponse = await register.json()
    //             didRegister = true;
    //             console.log(registerResponse)
    //         } else {
    //             const failedResponse = await register.json()
    //             didRegister = false;
    //             error = failedResponse.message[0].messages[0].message;
    //         }
            
    //     } catch (err) {
    //         error = err
    //     }    
    // }


</script>

<main>

    <Cage getInformation={ getInformation } code={ cageCode }></Cage>




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

