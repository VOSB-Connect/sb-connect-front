<script>
    import Sidebar from '$lib/components/sidebar.svelte'
    import DashboardTopNav from '$lib/components/dashboard/topNav.svelte'
    import ProtectedLayout from '$lib/components/layouts/ProtectedLayout.svelte'
</script>
<svelte:head>
  <title>CAPTR Labs</title>
</svelte:head>
<ProtectedLayout>
    <div class="h-screen w-full flex overflow-auto antialiased text-gray-800 bg-white">
        <!-- section body side nav -->
        <Sidebar />
        <div class="flex-1 flex flex-col">
            <!-- section body top nav -->
	        <DashboardTopNav />
            <slot />
        </div>
    </div>
</ProtectedLayout>