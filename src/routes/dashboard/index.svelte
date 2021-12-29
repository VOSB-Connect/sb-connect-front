<script>
  import SearchResults from '$lib/components/dashboard/searchResults.svelte'
  import SolicitationsWidget from '$lib/components/dashboard/solicitationsWidget.svelte';
</script>

<!-- main content -->
<main class="flex-grow flex flex-col min-h-0 w-screen md:w-10/12"> 

  <!-- section content -->
  <section aria-label="main content" class="flex min-h-0 flex-col flex-auto">
    <!--- FIRST ROW CONTAINING THE  STATS CARD STARTS HERE -->
    <SolicitationsWidget />
  <!-- FIRST ROW CONTAINING THE  STATS CARD ENDS HERE -->

  <!-- SECOND ROW CONTAINING THE TEN MOST RECENT CONTRACT OPPORTUNITIES STARTS HERE -->
    <div class="lg:px-5">
      <h1 class="text-center lg:text-left text-xl mb-4">Ten Most Recent Contract Opportunities</h1>
      <div class="container bg-gray-100">
        <section class="border-b-2 w-full bg-white min-h-0 h-auto flex flex-row px-3">
          <div class="font-semibold text-left py-3 px-1 mr-4 flex">NAICs</div>        
          <div class="font-semibold text-left py-3 px-1 w-24 flex-1">Title</div>
          <div class="font-semibold text-left py-3 px-1 flex">Expiration Date</div>
        </section>
        <SearchResults />
      </div>
    </div>
  <!-- SECOND ROW CONTAINING THE TEN MOST RECENT CONTRACT OPPORTUNITIES ENDS HERE -->
    </section>

</main>
