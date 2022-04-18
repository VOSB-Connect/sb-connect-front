<script>
    import Sidebar from '$lib/components/shared/sidebar.svelte'
    import SidebarMobile from '$lib/components/shared/sidebarMobile.svelte';
    import ProtectedLayout from '$lib/components/layouts/ProtectedLayout.svelte'
</script>
<svelte:head>
  <title>My Solicitations</title>
</svelte:head>
<ProtectedLayout>
    <div class="h-screen w-full flex flex-col lg:flex-row overflow-auto antialiased text-gray-800 bg-gray-100">
        <!-- section body side nav -->
        <Sidebar />

        <SidebarMobile />
        <div class="flex flex-col w-full overflow-auto p-2 lg:p-5 gap-y-3">
            <slot />
        </div>
    </div>
</ProtectedLayout>