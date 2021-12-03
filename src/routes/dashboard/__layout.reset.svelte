<script>
    import Sidebar from '$lib/components/sidebar.svelte'
    import ProtectedLayout from '$lib/components/layouts/ProtectedLayout.svelte'
</script>
<svelte:head>
  <title>CAPTR Labs</title>
</svelte:head>
<ProtectedLayout>
    <div class="h-screen w-full flex overflow-auto antialiased text-gray-800 bg-white">
        <!-- section body side nav -->
        <Sidebar />
        <div class="flex-1 flex flex-col md:flex-row justify-start items-start pt-5 pr-5">
            <slot />
        </div>
    </div>
</ProtectedLayout>