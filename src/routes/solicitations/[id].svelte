<script context="module">
    export async function load({ page }) {
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
    solicitationId = 5;

    async function getSolicitation() {
        const response = await get(`solicitations/${ solicitationId }`)
        if(response.ok) return response.json();
    }

</script>

{#await getSolicitation() then solicitation}
    <SolicitationCard contract={ solicitation } />
    <PointOfContact contract={ solicitation } />
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
        Save
    </button>      
{/await}