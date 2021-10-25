<script>
    import PartnerCard from "$lib/components/partners/partnerCard.svelte";
    import { auth } from '$lib/shared/user-store'
    import { get } from '$lib/utils'

    let partners = []
    async function getMyPartners(){
        const response = await get(`entities/getPartners/${$auth.user.entity.id}`);
        if(response.ok) partners = await response.json();
    }

</script>
{#await getMyPartners()}
    {#each partners as partner}
        <PartnerCard {partner}/>
    {/each}
{/await}
