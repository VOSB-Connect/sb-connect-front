<script>
    import Sidebar from '$lib/components/sidebar.svelte'
</script>
<div class="h-full w-full flex overflow-hidden antialiased text-gray-800 bg-white">
<!-- section body side nav -->
    <Sidebar />
    <slot />
</div>