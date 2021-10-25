<script context="module">
    export async function load({ page }) {
        const solicitationId = page.params.id;
        return {
            props: { solicitationId }
        };
    }
</script>
<script>
    import { get, post } from '$lib/utils';
    import SolicitationCard from '$lib/components/solicitations/solicitationCard.svelte'
    import PointOfContact from '$lib/components/solicitations/pointOfContact.svelte';
    import ActionCard from '$lib/components/solicitations/actionCard.svelte'
    import { auth } from '$lib/shared/user-store';
   
    let didSaveSolicitation;
    export let solicitationId;
    

    async function getSolicitation() {
        const response = await get(`solicitations/${ solicitationId }`)
        if(response.ok) return response.json();
    }

    async function saveSolicitation(e) {
        const saveSolicitationResponse = await post("entities/saveSolicitation", {
            solicitation: solicitationId,
            entityId: $auth.user.entity.id
        })
        if(saveSolicitationResponse.ok){
            didSaveSolicitation = true;
        }
    }

</script>

{#await getSolicitation() then solicitation}
    <SolicitationCard contract={ solicitation } />
    <PointOfContact contract={ solicitation } />
    <ActionCard on:addsolicitation={saveSolicitation} bind:solicitationSelected={didSaveSolicitation} />
   
{/await}