<script>
    import Item from '$lib/components/item.svelte'
    export let userInformation;

    let companyName = "testCompany";
    let email = "sample@example.com";
    let password = "abc123";
    let cage = "12345";
    let message = "";
    let didRegister = true
    let confirmed = true;
    let error;

  
    const submitForm = async() => {
        try {

            const registrationHeaders = new Headers();
            registrationHeaders.append("Content-Type", "application/json")
            const registrationInfo = JSON.stringify({
                    email,
                    companyName,
                    password,
                    username: cage,
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

<div class="bg-white shadow overflow-hidden sm:rounded-lg">
  <form action="">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Verify Information
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Verify that all information is correct. If not hit cancel and re-enter cage code.
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <Item title="Company Name"  userItem={ userInformation.legalBusinessName } />
        <Item title="Duns" userItem={ userInformation.duns } />
        <Item title="Cage Code" userItem={ userInformation.cageCode }/>
        <Item title="Primary Naics" userItem={ userInformation.primaryNaics } />
        <Item title="Company Website" userItem={ userInformation.entityURL } />
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Attachments
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          
          </dd>
        </div>
      </dl>
    </div>
  </form>
  </div>
