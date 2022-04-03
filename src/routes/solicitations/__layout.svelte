<script>
    import Sidebar from '$lib/components/shared/sidebar.svelte'
    import SidebarMobile from '$lib/components/shared/sidebarMobile.svelte';
    import ProtectedLayout from '$lib/components/layouts/ProtectedLayout.svelte'
</script>

<svelte:head>
  <title>CAPTR | Solicitations</title>
</svelte:head>

<ProtectedLayout>
    <div class="h-screen w-full flex flex-col lg:flex-row overflow-auto antialiased text-gray-800 bg-gray-100">
        <!-- section body side nav -->
        <Sidebar />

        <SidebarMobile />
        <div class="flex-1 flex flex-col md:flex-row justify-center overflow-auto lg:px-2 pt-2 lg:pt-5 lg:pr-5">
            <slot />
        </div>
    </div>
</ProtectedLayout>