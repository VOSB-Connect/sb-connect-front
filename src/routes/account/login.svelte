<script>
    import { goto } from '$app/navigation'

    let email = "";
    let password = "";
    
async function login() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "identifier": email,
        "password": password
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const loginResponse = await fetch("http://localhost:1337/auth/local", requestOptions)
      if(loginResponse.ok){
        const data = await loginResponse.json();
        sessionStorage.setItem("token", data.jwt);
        console.log(data)
        goto("/dashboard")
        return data;
      } else {
        const failedResponse = await login.json()
        error = failedResponse.message[0].messages[0].message;
    }
}
</script>

<div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
        <p class="mt-2 text-center text-sm text-gray-600">Don't have an account? <a href="/account/registration" class="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
        <form class="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" value="true">
            <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" bind:value={ email } name="email" type="email" autocomplete="email" required class="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Email address">
            </div>
            <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" bind:value={ password } name="password" type="password" autocomplete="current-password" class="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Password">
            </div>            
            <div class="flex items-center justify-end">                
                <div class="text-sm">
                    <a href="/account/password-reset" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                </div>
            </div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
            </button>
        </form>
    </div>
</div>