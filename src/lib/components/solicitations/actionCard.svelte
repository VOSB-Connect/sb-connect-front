<script>
    import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher();
    export let solicitationSelected;
</script>

<button 
    class="{solicitationSelected ? "bg-green-500": "bg-blue-500"} w-full md:w-1/4 text-white text-sm font-semibold rounded-lg h-12 py-1 px-2"
    on:click={() => dispatch('addsolicitation')}>
    {solicitationSelected ? "Saved Solicitation" : "Save Solicitation"}
</button>  