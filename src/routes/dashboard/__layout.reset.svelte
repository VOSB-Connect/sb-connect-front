<script>
    import Sidebar from '$lib/components/sidebar.svelte'
    import SidebarMobile from '$lib/components/sidebarMobile.svelte';
    import ProtectedLayout from '$lib/components/layouts/ProtectedLayout.svelte'
</script>
<svelte:head>
  <title>CAPTR Labs</title>
</svelte:head>
<ProtectedLayout>
    <div class="h-screen w-full flex flex-col md:flex-row overflow-auto antialiased text-gray-800 bg-gray-100">
        <!-- section body side nav -->
        <Sidebar />

        <SidebarMobile />
        <div class="flex-1 flex flex-col md:flex-row justify-start items-start md:px-2 pt-2 md:pt-5 md:pr-5">
            <slot />
        </div>
    </div>
</ProtectedLayout>