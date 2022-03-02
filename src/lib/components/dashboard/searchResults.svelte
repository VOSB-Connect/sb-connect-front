<script>
	import SolicitationStore from '$lib/shared/solicitation-store'
	import SolicitationItem from "./solicitationItem.svelte";
	export let filteredSolicitations = [];
</script>

<section class="flex w-full flex-col flex-1 divide-y min-h-0 max-h-96 {$SolicitationStore.length == 0 ? "" : "overflow-auto"} px-0">
	{#if $SolicitationStore.length > 0}
		{#each filteredSolicitations as solicitation}
			<SolicitationItem contract={ solicitation } />
		{/each}
		{:else}
			<p>No Solicitations for this type</p>
	{/if}
</section>
