<script>
    import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher();
    export let solicitationSelected = undefined;
</script>

<button 
    class="{solicitationSelected ? "bg-green-500": "bg-blue-500"} w-full md:w-1/2 text-white text-sm font-semibold rounded-lg h-10 px-2"
    on:click={() => dispatch('toggleSolicitation')} >
    {solicitationSelected ? "Saved Solicitation" : "Save Solicitation"}
</button>  