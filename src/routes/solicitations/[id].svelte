<script context="module">
    export async function load(ctx) {
        //If ctx.page, sveltekit is out of date
        let solicitationId = ctx.params.id;

        return {
            props: { solicitationId }
        };
    }
</script>

<script>
    import { get } from '$lib/utils';
    import SolicitationCard from '$lib/components/solicitations/solicitationCard.svelte'
    import PointOfContact from '$lib/components/solicitations/pointOfContact.svelte';
    
    export let solicitationId;
    
    async function getSolicitation() {
        const response = await get(`solicitations/${ solicitationId }`, true)
        if(response.ok) return response.json();
    }

</script>

{#await getSolicitation() then solicitation}
    <div class="flex flex-col mx-1 sm:w-4/5">
        <SolicitationCard { solicitation } />
        <PointOfContact { solicitation } />
    </div>
{/await}