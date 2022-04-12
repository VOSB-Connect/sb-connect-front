<script context="module">
    export async function load(ctx) {
        //If ctx.page, sveltekit is out of date
        let url = ctx.url.search;

        return {
            props: { url }
        };
    }
</script>

<script>
    import { post } from '$lib/utils'
    import { goto } from '$app/navigation'

    export let url;

    let urlCode = url.split('=');
    let [query, code] = urlCode;

    let password = "";
    let passwordConfirmation = "";
    console.log(code)
    async function handleResetPassword() {
        if(password !== passwordConfirmation) {
            return 'Password does not match'
        }

        try {
            const passwordRequest = await post("auth/reset-password", {  
                code: code,
                password,
                passwordConfirmation
            })

            if(passwordRequest.ok){
                console.log(passwordRequest)
                goto('/account/login')
            } else {
                console.log(passwordRequest)
                error = passwordRequest;
            }        
        } catch (err) {
            console.error(err)
        }     
    }
</script>

<div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Enter New Password</h2>
        <form class="mt-8 space-y-6" method="POST">
            <div>
                <label for="password" class="sr-only">New Password</label>
                <input id="password" bind:value={ password } name="password" type="password" autocomplete="email" required class="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="New Password">
            </div>
            <div>
                <label for="confirm-password" class="sr-only">Confirm Password</label>
                <input id="confirm-password" bind:value={ passwordConfirmation } name="password" type="password" autocomplete="email" required class="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Confirm Password">
            </div>
            <div class="flex flex-row w-full justify-start items-center gap-x-2">
                <button type="submit" on:click|preventDefault={ handleResetPassword } class="group relative w-50 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                </button>
            </div>
        </form>
    </div>
</div>