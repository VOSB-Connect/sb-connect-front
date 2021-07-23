<script>
    import Item from '$lib/components/item.svelte'
    export let userInformation;

    let legalBusinessName;
    let duns;
    let cageCode;
    let primaryNaics;
    let businessTypeList;
    let naicsList;
    let entityURL;
    let email = "";
    let password = "";
    let message = "";
    let didRegister = true
    let confirmed = true;
    let error;

  
    const submitForm = async() => {
        try {

            const registrationHeaders = new Headers();
            registrationHeaders.append("Content-Type", "application/json")
            const registrationInfo = JSON.stringify({
                    legalBusinessName,
                    duns,
                    username: cageCode,
                    entityURL,
                    primaryNaics,
                    email,
                    password,
                    businessTypeList,
                    naicsList,
                    confirmed
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
            } else {
                const failedResponse = await register.json()
                didRegister = false;
                error = failedResponse.message[0].messages[0].message;
            }
            
        } catch (err) {
            error = err
        }    
    }
</script>
{#if message == ""} 
{#if !didRegister}
    <p>{error}</p>
{/if}
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <form on:click|preventDefault={ submitForm }>
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Verify Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          Verify that all information is correct. If not, hit cancel and re-enter cage code.
        </p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div>
            <Item title="Company Name"  userItem={ userInformation.legalBusinessName } bindValue={ legalBusinessName } />
            <Item title="Duns" userItem={ userInformation.duns } bindValue={ duns } />
            <Item title="Cage Code" userItem={ userInformation.cageCode } bindValue={ cageCode } />
            <Item title="Primary Naics" userItem={ userInformation.primaryNaics } bindValue={ primaryNaics } />
            <Item title="Company Website" userItem={ userInformation.entityURL } bindValue={ entityURL } />
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Email
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div class="col-span-6 sm:col-span-4">
                  <input name="email-address" id="email-address" bind:value={ email } type="text" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter Email">
                </div>
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Password
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div class="col-span-6 sm:col-span-4">
                  <input  name="password" id="password" bind:value={ password } type="password"class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter Password">
                </div>
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Confirm Password
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div class="col-span-6 sm:col-span-4">
                  <input type="password" name="confirm-password" id="confirm-password" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter Password">
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </form>
    </div>
  {:else if didRegister}
  <p>Verification email has been sent to {email}. Please check email to varify.</p>
{/if} 
