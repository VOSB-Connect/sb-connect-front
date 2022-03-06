<script>
	import SolicitationStore from '$lib/shared/solicitation-store'
	import SolicitationItem from "./solicitationItem.svelte";
	
</script>

<section class="flex w-full flex-col flex-1 divide-y min-h-0 max-h-96 {$SolicitationStore.length == 0 ? "" : "overflow-auto"} px-0">
	{#if $SolicitationStore.length > 0}
		{#each $SolicitationStore as solicitation}
			<SolicitationItem contract={ solicitation } />
		{/each}
	{/if}
</section>
