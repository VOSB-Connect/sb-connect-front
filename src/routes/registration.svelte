<script>
    let cageCode ='';
    let userInformation = {};

    async function getInformation(){
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
            cageCode: "7RFJ7",
            businessTypeList: [1, 2, 3, 4],
            primaryNaics: "541370", 
            naicsList: [5, 6, 7, 8, 9],
            entityURL: "www.spatialgisservices.com",
            samEmail: "FOUO Only" 
        }

        console.log(userInformation)

    }

</script>

<div class="bg-grey-lighter min-h-screen flex flex-col">
        <form class="mt-8 space-y-6" on:submit|preventDefault={ getInformation }>
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
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
                    placeholder="Email" />

                <input 
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" />
                <!-- <input 
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="confirm_password"
                    placeholder="Confirm Password" /> -->

                <button
                    type="submit"
                    class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
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

            <div class="text-grey-dark mt-6">
                Already have an account? 
                <a class="no-underline border-b border-blue text-blue" href="/login">
                    Sign in
                </a>.
            </div>
        </div>
    </form>
</div>




