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

<form on:submit|preventDefault={ login }>
    <input id="email" bind:value={ email } type="email" name="email">
    <input id="password" bind:value={ password } type="password" name="password">
    <button type="submit">Login</button>
</form>