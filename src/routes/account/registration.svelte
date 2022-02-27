<script>
    import { goto } from '$app/navigation';
    import { getPublic, publicPost } from '$lib/utils';
    import ListError from '$lib/ListError.svelte';
    import { auth } from '$lib/shared/user-store';




    let cageCode = "", email = "", password = "";
    let confirmed = false;
    let match = true;
    let error = null;

    
    async function handleRegistration(organizationId) {
        try {
            const registrationResponse = await publicPost("auth/local/register", { 
                username: cageCode, 
                organization: organizationId,
                email,
                password
            })

            if(registrationResponse.ok){
                const registerResponse = await registrationResponse.json()
                console.log(registerResponse)
                $auth = registerResponse;
                goto('/activation')
            } else {
                console.log(registrationResponse)
                error = registrationResponse.message[0].messages[0].message;
            }        
        } catch (err) {
            console.error(err)
        }    
    }




    async function handleOrganizationInformation() {
        try {
            let validationRequest = await getPublic(`user/${cageCode}/${email}`)
            if(validationRequest.ok){
                let validationResponse = await validationRequest.json();
                if(!validationResponse.matchedUsers) {
                    let registerOrganizationRequest = await publicPost('organizations', { cageCode });
                    if(registerOrganizationRequest.ok) {
                        let organization = await registerOrganizationRequest.json()
                        console.log(organization)
                        handleRegistration(organization.id)
                    } 
                } else { 
                    error = validationResponse.error
                }
            } else {
                error = validationRequest.message[0].messages[0].message;
                console.log(error)
            }        
        } catch (err) {
            console.error(err)
        }    

    }
    
    $:cageCode = cageCode.toUpperCase()

</script> 


<div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <a href="/" class="link pointer">
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        </a>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
        <p class="mt-2 text-center text-sm text-gray-600">Already have an account? <a href="/account/login" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a></p>
        <form class="mt-8 space-y-6" on:submit|preventDefault={ handleOrganizationInformation }>
    
            {#if error}  
                <ListError error={error} />
            {/if}

            <div>
                <label for="cageCode" class="sr-only">Cage Code</label>
                <input type="text" bind:value={ cageCode } name="cageCode" placeholder="Cage Code" required
                    class="rounded relative block w-full px-3 py-2 border uppercase border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label for="email" class="sr-only">Email address</label>
                <input type="email" bind:value={ email } name="email" placeholder="Email" 
                    class="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label for="password" class="sr-only">Password</label>
                <input type="password" bind:value={ password } name="password" placeholder="Password" 
                    class="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create Account
            </button>
            <div class="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the 
                <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">Terms of Service</a>
                and 
                <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">Privacy Policy</a>
            </div>
        </form>
    </div>
</div>
