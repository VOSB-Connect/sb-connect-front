<script>
    import SavedSolicitation from '$lib/components/solicitations/savedSolicitation.svelte';
import { auth } from '$lib/shared/user-store'
    import { get } from '$lib/utils'

    async function getMySolicitations(){
        const response = await get(`entities/getSolicitations/${$auth.user.entity.id}`);
        if(response.ok) return await response.json();
    }
</script>

{#await getMySolicitations() then solicitations}
    {#each solicitations as solicitation}
        <SavedSolicitation contract={ solicitation }/>
    {/each}
{/await}