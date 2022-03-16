<script>
	import SolicitationItem from "./solicitationItem.svelte";

	export let solicitationsData = {};
	export let solicitationType = "Total";

</script>
 

<section class="flex w-full flex-col flex-1 divide-y min-h-0 {solicitationsData.total == 0 ? "" : "overflow-auto"} px-0">
	{#if solicitationsData[solicitationType].count > 0}
		{#each solicitationsData[solicitationType].items as solicitation (solicitation.id)}
			<SolicitationItem { solicitation } solicitationColor={ solicitationsData[solicitation.baseType].bgColor } />
		{/each}
	{:else}
			<p>No {solicitationType}s are listed</p>
	{/if}
</section>

<style>
	section {
		height: calc(100vh - 250px);
	}
</style>