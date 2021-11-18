<script>
	import { onMount } from "svelte";
	import { get } from '$lib/utils'
	import SolicitationStore from '$lib/shared/solicitation-store'
	import SolicitationItem from "./solicitationItem.svelte";
	
	onMount(async () => {
		const solicitationsResponse = await get("solicitations");
		if(solicitationsResponse.ok){
			const data = await solicitationsResponse.json();
			SolicitationStore.setSolicitations(data);
		}
	})

</script>

<section class="flex w-full flex-col flex-1 divide-y min-h-0 {$SolicitationStore.length == 0 ? "" : "overflow-y-scroll"} px-0">
	{#if $SolicitationStore.length > 0}
		{#each $SolicitationStore as solicitation}
			<SolicitationItem contract={ solicitation } />
		{/each}
	{/if}
</section>
