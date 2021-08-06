<script>
    import Sidebar from '$lib/components/sidebar.svelte'
	import DashboardTopNav from '$lib/components/dashboard/topNav.svelte'
	import DashboardStatistics from '$lib/components/dashboard/statistics.svelte'
	import DashboardSearchResults from '$lib/components/dashboard/searchResults.svelte'
</script>

<div class="h-full w-full flex overflow-hidden antialiased text-gray-800 bg-white">
    <!-- section body side nav -->
    <Sidebar />
  
	<div class="flex-1 flex flex-col">
      <!-- section body top nav -->
      <DashboardTopNav />
  
	  <!-- main content -->
	  <main class="flex-grow flex flex-col min-h-0 border-t"> 
			<!-- content navigation -->
			<DashboardStatistics />
			<!-- section content -->
			<section aria-label="main content" class="flex min-h-0 flex-col flex-auto border-l">
				<!-- section body header -->

				<DashboardSearchResults title="HUB Connection" />
			</section>
		</main>
    </div>
</div>