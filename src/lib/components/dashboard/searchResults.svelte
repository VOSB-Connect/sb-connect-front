<script>
	import SolicitationStore from '$lib/shared/solicitation-store'
	import SolicitationItem from "./solicitationItem.svelte";

	export let count = {};

</script>
 

<section class="flex w-full flex-col flex-1 divide-y min-h-0 results-container {$SolicitationStore.length == 0 ? "" : "overflow-auto"} px-0">
	{#if $SolicitationStore.length > 0}
		{#each $SolicitationStore as solicitation}
			<SolicitationItem contract={ solicitation } count={ count } />
		{/each}
		{:else}
			<p>No Solicitations</p>
	{/if}
</section>

<style>
	.results-container{
		height: calc(100vh - 250px);
	}
</style>
