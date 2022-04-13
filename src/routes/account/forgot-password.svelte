<script>
    import { goto } from '$app/navigation';
    import { post } from '$lib/utils';
    
    let email = ""

    async function handleResetEmail() {
        try {
            const passwordRequest = await post("auth/forgot-password", { 
                email
            })

            if(passwordRequest.ok){
                console.log(passwordRequest)
                goto('/reset')
            } else {
                error = passwordRequest.message[0].messages[0].message;
            }        
        } catch (err) {
            console.error(err)
        }     
    }
</script>

<div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset Your Password</h2>
        <p class="mt-2 text-center text-sm text-gray-600">Fear not. We'll email you instructions to reset your password. Please enter the email adddress you used to register your account.</p>
        <form class="mt-8 space-y-6" method="POST">
            <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" bind:value={ email } name="email" type="email" autocomplete="email" required class="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Email address">
            </div>
            <hr />
            <div class="flex flex-row w-full justify-start items-center gap-x-2">
                <button type="submit" on:click|preventDefault={ handleResetEmail } class="group relative w-50 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                </button>
                <a href="/account/login" class="font-medium text-indigo-600 hover:text-indigo-500">Return to login</a>
            </div>
        </form>
    </div>
</div>