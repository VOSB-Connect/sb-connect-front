<script>
    import SavedSolicitation from '$lib/components/solicitations/savedSolicitation.svelte';
    import { auth } from '$lib/stores/user-store'
    import { get } from '$lib/utils'

    async function getMySolicitations(){
            const response = await get(`user/getSolicitations/${ $auth.user.id }`, $auth.user.confirmed);
            if(response.ok) return await response.json();
    }

</script>

{#await getMySolicitations() then solicitations}
    {#if solicitations.length > 0}
        {#each solicitations as solicitation (solicitation.id)}
            <SavedSolicitation { solicitation }/>
        {/each}
        {:else}
            <p>No Saved Solicitations</p>
    {/if}
{/await} 