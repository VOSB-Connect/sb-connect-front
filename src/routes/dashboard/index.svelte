<script>
  import SearchResults from '$lib/components/dashboard/searchResults.svelte'
  import Statistics from '$lib/components/dashboard/statistics.svelte'
  import { onMount } from 'svelte'
  import { auth } from '$lib/shared/user-store'
  import { get } from '$lib/utils'
	import SolicitationStore from '$lib/shared/solicitation-store'
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';

  let business;
  let filterType;
  let solicitations;
  let counts = {
    "Solicitation": 0,
    "Presolicitation": 0,
    "Combined Synopsis/Solicitation": 0,
    "Sources Sought": 0,
    "total": 0
  }

  function filterByType(type) {
    console.log(type)
    if(!type) {
      console.log($SolicitationStore)
    } else {
      filterType = $SolicitationStore.filter(solicitation => solicitation.type === type)
    
      if(filterType.length > 0) {
        console.log(filterType)
      }
    }
  }

  
  onMount(async () => {
    if($auth !== null){
      business = $auth.user.organization;
    }
    
    const solicitationsResponse = await get(`solicitations/naicsCode/${ 332410 }`);
    if(solicitationsResponse.ok){
      const data = await solicitationsResponse.json();
      SolicitationStore.setSolicitations(data);
      counts["total"] = $SolicitationStore.length 
      
      $SolicitationStore.forEach(solicitation => {
        counts[solicitation.type]+= 1
      })

     solicitations = filterByType("Solicitation")

      
    }   
  })

</script>

<!-- main content -->
<main class="flex-grow flex flex-col min-h-0 w-screen md:w-10/12"> 
 
  <!-- section content -->
  <section aria-label="main content" class="flex min-h-0 flex-col flex-auto">
    <!--- FIRST ROW CONTAINING THE  STATS CARD STARTS HERE -->
    <Statistics bind:count={ counts } bind:solicitations= { solicitations } />
    <!-- FIRST ROW CONTAINING THE  STATS CARD ENDS HERE -->

    <!-- SECOND ROW CONTAINING THE TEN MOST RECENT CONTRACT OPPORTUNITIES STARTS HERE -->
    <div class="lg:px-5">
      <h1 class="text-center lg:text-left text-xl mb-4">All Contract Opportunities</h1>
      <div class="container-fluid bg-gray-100">
        <section class="border-b-2 w-full bg-white min-h-0 h-auto flex flex-row px-3">
          <div class="font-semibold text-left py-3 px-1 mr-4 flex">NAICs</div>        
          <div class="font-semibold text-left py-3 px-1 w-24 flex-1">Title</div>
          <div class="font-semibold text-left py-3 px-1 flex">Expiration Date</div>
        </section>
        <SearchResults on:showAll={() => filterByType("Solicitation")} />
      </div>
    </div>
  <!-- SECOND ROW CONTAINING THE TEN MOST RECENT CONTRACT OPPORTUNITIES ENDS HERE -->
    </section>

</main>
