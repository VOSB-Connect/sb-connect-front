<script>
    import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher();
    export let solicitationSelected;
</script>

<button 
    class="{solicitationSelected ? "bg-green-500": "bg-blue-500"} w-full md:w-1/2 lg:w-3/4 text-white text-sm font-semibold rounded-lg h-10 px-2"
    on:click={() => dispatch('addsolicitation')} disabled={solicitationSelected}>
    {solicitationSelected ? "Saved Solicitation" : "Save Solicitation"}
</button>  