<script>
    import {faSearch, faPeopleArrows, faFileAlt, faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
    import SidebarItem from '$lib/components/sideBarItem.svelte'
    import Fa from 'svelte-fa'
    import { auth } from '$lib/shared/user-store'
    import { goto } from '$app/navigation'
    
    function handleLogout() {
        $auth = null;
        goto("/", true)
    }
</script>


<nav class="flex flex-col bg-purple-900 w-64 h-screen px-4 tex-gray-900 border border-purple-900">
    <div class="flex flex-wrap mt-8">
      <div class="w-100">
        <span class="font-semibold text-white">Spatial Glass, LLC</span>
        <button class="bg-green-500 text-white p-1 ml-3 rounded-md border border-blue-500 hover:bg-white hover:text-green-500">
          Premium
        </button>
      </div>
    </div>
    <div class="mt-10 mb-4">
      <ul class="ml-4">
        <SidebarItem title="Profile" namedIcon={faCog} route="/dashboard" />
        <SidebarItem title="Search" namedIcon={faSearch} route="/dashboard/search" />
        <SidebarItem title="Partnerships" namedIcon={faPeopleArrows} route="/partners" />
        <SidebarItem title="Contracts" namedIcon={faFileAlt} route="/contracts" />  
        <li class="mb-2 p-2 text-gray-100 flex flex-row  border-gray-300 hover:text-black hover:bg-gray-300 hover:font-bold rounded rounded-lg">
            <span>
                <Fa icon={faSignOutAlt} size="lg" />
            </span>
            <p class="cursor-pointer ml-2" on:click={handleLogout}>Sign out</p>
        </li>
      </ul>
    </div>
  </nav>