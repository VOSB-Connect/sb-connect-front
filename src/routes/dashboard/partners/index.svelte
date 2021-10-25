<script>
    import PartnerCard from "$lib/components/partners/partnerCard.svelte";

    async function getMyPartners(){
        const response = await get(`partners/myPartners`);
        if(response.ok) return response.json();
    }
</script>
<main class="flex-grow flex flex-col min-h-0 border-t">
    {#await getMyPartners() then partners}
        {#each partners as partner}
            <PartnerCard {partner}/>
        {/each}
    
    {/await}
</main>