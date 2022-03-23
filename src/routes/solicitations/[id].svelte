<script context="module">
    export async function load({ page }) {
        console.log(page)
        const solicitationId = page.params.id;
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
        const response = await get(`solicitations/${ solicitationId }`)
        if(response.ok) return response.json();
    }  

</script>

{#await getSolicitation() then solicitation}
    <div class="flex flex-col mx-auto w-100 lg:w-2/3">
        <SolicitationCard contract={ solicitation } />
        <PointOfContact contract={ solicitation } />
    </div>
{/await}