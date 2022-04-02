<script>
  import { onMount } from 'svelte'
  import { faFileAlt, faTachometerAlt, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
  import SidebarItem from '$lib/components/sideBarItem.svelte'
  import Fa from 'svelte-fa'
  import { auth } from '$lib/stores/user-store'
    
  function handleLogout() {
      $auth = null;
      window.location.href = "/"
  }
  
  let displayMenu = false;
  let business = {
    legalName: "",
    entityId: null,
  }

  onMount(async () => {
    if($auth !== null){
      const organization = $auth.user.organization;
      business.legalName = organization.legalBusinessName;
      business.entityId = organization.id; 
    }
  })

</script>


<nav aria-label="top bar" class="flex flex-col lg:hidden justify-between bg-white h-12">
    <!-- top bar left -->
	<button class="z-20 text-gray-500 w-10 h-32 flex flex-col items-center justify-center gap-y-1 mt-1 ml-2 mb-2 py-3"
		on:click={ () => displayMenu = !displayMenu }>
		<span class="sr-only">Open main menu</span>
		<span aria-hidden="true" class="block h-0.5 w-5 bg-current"></span>
		<span aria-hidden="true" class="block h-0.5 w-5 bg-current"></span>
		<span aria-hidden="true" class="block h-0.5 w-5 bg-current"></span>
	</button>
	<div class="z-10 bg-purple-900 { displayMenu ? "translate-x-0" : "-translate-x-full" } ease-in duration-300">
		
		<div class="my-4 px-2">
			<div class="w-100 ml-4 py-3">
        		<span class="font-semibold text-white">{ business.legalName }</span>
			</div>
			<div class="w-full bg-green-600 text-transparent h-0.5" />
			<ul>
				<SidebarItem title="Discover" namedIcon={ faTachometerAlt } route="/dashboard" />
				<SidebarItem title="My Solicitations" namedIcon={ faFileAlt } route="/dashboard/solicitations" />
				<SidebarItem title="Profile" namedIcon={ faUser } route="/dashboard/profile" />
				<li class="mb-2 p-2 text-gray-100 flex flex-row  border-gray-300 hover:text-black hover:bg-gray-300 hover:font-bold rounded">
					<span>
						<Fa icon={ faSignOutAlt } size="lg" />
					</span>
					<p on:click={ handleLogout } class="ml-2 cursor-pointer">Sign out</p>
				</li>
			</ul>
		</div>
	</div>
</nav>