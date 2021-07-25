<script>
    import {faSearch, faPeopleArrows, faFileAlt, faCog} from '@fortawesome/free-solid-svg-icons'
    import SidebarItem from './sidebarItem.svelte'
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
        <SidebarItem title="Profile" namedIcon={faCog} route="/profile" />
        <SidebarItem title="Search" namedIcon={faSearch} route="/search" />
        <SidebarItem title="Partnerships" namedIcon={faPeopleArrows} route="/partners" />
        <SidebarItem title="Contracts" namedIcon={faFileAlt} route="/contracts" />
      </ul>
    </div>
  </nav>