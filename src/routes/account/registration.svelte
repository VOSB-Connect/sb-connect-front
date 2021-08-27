<script>
    import { goto } from '$app/navigation';
    import {faInfo} from '@fortawesome/free-solid-svg-icons'
    import Fa from "svelte-fa"

    let cageCode = "";
    let email = "";
    let password = "";
    let userInformation = {}
    let message = "";
    let didRegister = true
    let confirmed = false;
    let match = true;
    let error;

    
    async function submitForm(userInformation) {
        try {

            const registrationHeaders = new Headers();
            registrationHeaders.append("Content-Type", "application/json")
            const registrationInfo = JSON.stringify({
              username: userInformation.cageCode,
              email,
              password,
              confirmed,    
              ...userInformation,
            });
            const requestOptions = {
                method: "POST",
                headers: registrationHeaders,
                body: registrationInfo,
                redirect: 'follow'
            };
            
            const register = await fetch("http://localhost:1337/auth/local/register", requestOptions);
            
            if(register.ok){
                const registerResponse = await register.json()
                didRegister = true;
                console.log(registerResponse)
                goto('/activation')
            } else {
                const failedResponse = await register.json()
                didRegister = false;
                error = failedResponse.message[0].messages[0].message;
            }
            
        } catch (err) {
            error = err
            console.error(err)
        }    
    }

    function getInformation(){
        // let response = await fetch(`https://api.sam.gov/entity-information/v1/entities?api_key=r3cYNK8ZhHkddQ6mX6Km8PqZG8JBqKqhWWWyLmlL&cageCode=${ cageCode }`)
        // let data = await response.json()
            
        // const { entityData } = data;

        // userInformation = {
        //     legalBusinessName: entityData[0].entityRegistration.legalBusinessName,
        //     duns: entityData[0].entityRegistration.ueiDUNS,
        //     cageCode: entityData[0].entityRegistration.cageCode,
        //     businessTypeList: entityData[0].coreData.businessTypes.businessTypeList,
        //     primaryNaics: entityData[0].assertions.goodsAndServices.primaryNaics, 
        //     naicsList: entityData[0].assertions.goodsAndServices.naicsList,
        //     entityURL: entityData[0].coreData.entityInformation.entityURL,
        //     samEmail: entityData[0].pointsOfContact.governmentBusinessPOC.email
        // }
        userInformation = {
            legalBusinessName: "Spatialgis, L.L.C",
            duns: "080446911",
            cageCode: "78209",
            businessTypeList: [1, 2, 3, 4],
            primaryNaics: "541370", 
            naicsList: [5, 6, 7, 8, 9],
            entityURL: "www.spatialgisservices.com",
            samEmail: "bp_ct2009@yahoo.com" 
        }

        if(email === userInformation.samEmail) {
            submitForm(userInformation);
        }else {
            match = false;
        }

    }

</script>

<div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <a href="/" class="link pointer">
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        </a>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
        <p class="mt-2 text-center text-sm text-gray-600">Already have an account? <a href="/account/login" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a></p>
        <form class="mt-8 space-y-6" on:submit|preventDefault={ getInformation }>
            {#if !match} 
                <div class=" rounded flex items-center gap-x-2 bg-red-700 text-white text-sm font-bold p-3" role="alert">
                    <Fa icon={faInfo} size="md" /> <p>Email does not match sam.gov email</p>
                </div>           
            {/if}
            <div>
                <label for="cageCode" class="sr-only">Cage Code</label>
                <input type="text" class="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" name="cageCode" placeholder="Cage Code" bind:value={ cageCode } />
            </div>
            <div>
                <label for="email" class="sr-only">Email address</label>
                <input type="email" class="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" name="email" placeholder="Email" bind:value={ email } />
            </div>
            <div>
                <label for="password" class="sr-only">Password</label>
                <input type="password" class="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" name="password" placeholder="Password" bind:value={ password } />
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
