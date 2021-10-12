<script>
  import DashboardStatistics from '$lib/components/dashboard/statistics.svelte'
  import Charts from '$lib/components/dashboard/charts.svelte'
</script>

<!-- main content -->
<main class="flex-grow flex flex-col min-h-0 border-t"> 
  <!-- content navigation -->
  <DashboardStatistics />
  <!-- section content -->
  <section aria-label="main content" class="flex min-h-0 flex-col flex-auto border-l">
    <Charts />
  </section>
</main>
