<script>
  import SearchResults from '$lib/components/dashboard/searchResults.svelte'
  import Statistics from '$lib/components/dashboard/statistics.svelte'
  import { onMount } from 'svelte'
  import { auth } from '$lib/stores/user-store'
  import { get } from '$lib/utils'
	import { SolicitationStore } from '$lib/stores/solicitation-store'

  let business;
  let solicitationsData = {
    "Solicitation": {
      count: 0,
      bgColor: "bg-green-500",
      items: []
    },
    "Presolicitation": {
      count: 0,
      bgColor: "bg-red-600",
      items: []
    },
    "Combined": {
      count: 0,
      bgColor: "bg-purple-600",
      items: []
    },
    "Sources Sought": {
      count: 0,
      bgColor: "bg-yellow-500",
      items: []
    },
    "Total": {
      count: 0,
      bgColor: "",
      items: []
    }
  }

  let solicitationType = "Total"
  
  onMount(async () => {
    if($auth !== null){
      business = $auth.user.organization;
    }

    const solicitationsResponse = await get(`solicitations/naicsCode/${ business.primaryNaics }`, true);

    // const solicitationsResponse = await get(`solicitations/naicsCode/${ 335311 }`);
    if(solicitationsResponse.ok){
      const data = await solicitationsResponse.json();
      SolicitationStore.setSolicitations(data);

      solicitationsData["Total"].count = $SolicitationStore.length;
      solicitationsData["Total"].items = [...$SolicitationStore]
  
      $SolicitationStore.map(solicitation => {
        if(solicitation.baseType.startsWith("Solicit")){
          solicitationsData["Solicitation"].count += 1
          solicitationsData["Solicitation"].items = [...solicitationsData["Solicitation"].items, solicitation ]
        }
        if(solicitation.baseType.startsWith("Pre")){
          solicitationsData["Presolicitation"].count += 1
          solicitationsData["Presolicitation"].items = [...solicitationsData["Presolicitation"].items, solicitation ]
        }
        if(solicitation.baseType.startsWith("Combined")){
          solicitationsData["Combined"].count += 1
          solicitation.baseType = "Combined";
          solicitationsData["Combined"].items = [...solicitationsData["Combined"].items, solicitation ]
        }
        if(solicitation.baseType.startsWith("Sources")){
          solicitationsData["Sources Sought"].count += 1
          solicitationsData["Sources Sought"].items = [...solicitationsData["Sources Sought"].items, solicitation ]
        }  
      })
      
    }
  })

</script>

<!-- main content -->
<main class="flex-grow flex flex-col min-h-0 w-screen md:w-10/12"> 
 
  <!-- section content -->
  <section aria-label="main content" class="flex min-h-0 flex-col flex-auto">
    <!--- FIRST ROW CONTAINING THE  STATS CARD STARTS HERE -->
    <Statistics {solicitationsData} bind:solicitationType={solicitationType} />
    <!-- FIRST ROW CONTAINING THE  STATS CARD ENDS HERE -->

    <!-- SECOND ROW CONTAINING THE TEN MOST RECENT CONTRACT OPPORTUNITIES STARTS HERE -->
    <div class="lg:px-5">
      <h1 class="text-center lg:text-left text-xl mb-4">All Contract Opportunities</h1>
      <div class="container-fluid bg-gray-100">
        <section class="border-b-2 w-full bg-white min-h-0 h-auto hidden md:flex flex-row gap-x-2 px-2">
          <div class="font-semibold text-left py-3 px-1 w-1/12">NAICs</div>        
          <div class="font-semibold text-left py-3 px-1 w-8/12">Title</div>
          <div class="font-semibold text-center py-3 px-1 w-2/12">Type</div>
          <div class="font-semibold text-center py-3 px-1 w-1/12">POP</div>
        </section>
        <SearchResults {solicitationsData} {solicitationType} />
      </div>
    </div>
  <!-- SECOND ROW CONTAINING THE TEN MOST RECENT CONTRACT OPPORTUNITIES ENDS HERE -->
    </section>

</main>
