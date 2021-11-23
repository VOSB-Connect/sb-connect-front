<script>
  import { onMount } from 'svelte'
  import { faFileAlt, faTachometerAlt, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
  import SidebarItem from '$lib/components/sideBarItem.svelte'
  import Fa from 'svelte-fa'
  import { auth } from '$lib/shared/user-store'
    
  function handleLogout() {
      $auth = null;
      window.location.href = "/"
  }

  let business = {
    legalName: "",
    dbaName: "",
    entityId: null,
  }

  onMount(async () => {
    if($auth !== null){
      const entity = $auth.user.entity;
      business.legalName = entity.entityRegistration.legalBusinessName;
      business.dbaName = entity.entityRegistration.dbaName;
      business.entityId = entity.id; 
    }
  })
</script>


<nav class="hidden lg:flex flex-col bg-purple-900 w-64 h-screen px-4 tex-gray-900 border border-purple-900">
    <div class="flex flex-wrap mt-8">
      <div class="w-100">
        <span class="font-semibold text-white">{business.dbaName}</span>
       
      </div>
    </div>
    <div class="mt-10 mb-4">
      <ul class="ml-4">
        <SidebarItem title="Discover" namedIcon={faTachometerAlt} route="/dashboard" />
        <SidebarItem title="My Solicitations" namedIcon={faFileAlt} route="/dashboard/solicitations" />
        <SidebarItem title="Profile" namedIcon={faUser} route="/dashboard/profile" />
        <li class="mb-2 p-2 text-gray-100 flex flex-row  border-gray-300 hover:text-black hover:bg-gray-300 hover:font-bold rounded">
            <span>
                <Fa icon={faSignOutAlt} size="lg" />
            </span>
            <p on:click={handleLogout} class="ml-2 cursor-pointer">Sign out</p>
        </li>
      </ul>
    </div>
    <div class="mt-auto flex mb-3 items-center justify-between">
      <p class="text-white">Platform Status:</p>
      <p class="text-green-500 p-1 ml-3 border-green-500">Premium</p>
    </div>
  </nav>