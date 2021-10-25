<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher();
	export let partnerSelected;
</script>


<button class="{partnerSelected ? "bg-green-500": "bg-blue-500"} block w-full text-white text-sm font-semibold rounded-lg  py-1 px-2"
	 on:click={() => dispatch('addPartner')}
	 >{partnerSelected ? "Saved Partner" : "Save Partner"}
</button>