<script>
	import { isOverlayOpen } from '$lib/stores/OverlayStore.js';
</script>

{#if $isOverlayOpen }
	<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center opacity-90 z-20">
		<div class="bg-gray-900 text-white rounded-md p-48 relative max-w-2xlflex items-center justify-center opacity-95">
			<div class="w-12 h-12 rounded-full animate-spin border-8 border-solid border-purple-500 border-t-transparent"></div>
		</div>
	</div>
{/if}
	