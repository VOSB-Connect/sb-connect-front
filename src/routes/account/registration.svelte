<script>
    import { goto } from '$app/navigation';

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

<div class="min-h-screen flex flex-col justify-center">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form class="space-y-6" on:submit|preventDefault={ getInformation }>
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Register for HUB Connection</h1>
                <input 
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="Cage Code" 
                    bind:value={ cageCode }
                />

                <input 
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email"
                    bind:value={ email }
                />
                {#if !match} 
                    <p>Email does not match sam.gov email</p>
                {/if}
                <input 
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" 
                    bind:value={ password }
                />

                <button
                    type="submit"
                    class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                >Create Account</button>

                <div class="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the 
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                    </a> and 
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </form>
        <div class="text-white mt-6">
            Already have an account? 
            <a class="no-underline border-b border-blue text-blue" href="account/login">Sign in</a>.
        </div>
    </div>
</div>
