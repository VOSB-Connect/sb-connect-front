<script>
    import { onMount } from "svelte";
    import { get } from '$lib/utils'
    import SearchResultsItem from "./searchResultsItem.svelte";
    import CompanyStore from '$lib/shared/company-store'
    import SolicitationStore from '$lib/shared/solicitation-store'

    let searchParam = "";
    let searchByBusiness = false;
    $: filteredCompanies =  (searchParam) ? getFilteredCompanies() : $CompanyStore;
    $: filteredSolicitations = (searchParam) ? getFilteredSolicitations() : $SolicitationStore;

    function getFilteredCompanies(){
        return filteredCompanies =  [...$CompanyStore].filter(company => company.entityRegistration.legalBusinessName.includes(searchParam)
         || company.entityRegistration.cageCode.startsWith(searchParam.toUpperCase()))
    }

    function getFilteredSolicitations(){
        return filteredSolicitations = [...$SolicitationStore].filter(solicitation => solicitation.title.includes(searchParam)
        || solicitation.Naics.includes(searchParam))
    }

    onMount(async () => {
        const response = await get("entities");
        if(response.ok){
            const data = await response.json();
            CompanyStore.setCompanies(data);
        }
    })

</script>

<section aria-label="page caption" class="flex-col flex h-full bg-gray-100 border-t p-4 items-start">
    <div class="pt-2 text-gray-600 flex flex-col align-items-center gap-x-1 mb-3">
        <div>
            <input bind:value={searchParam} class="uppercase border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search">
        </div>
        <ul class="flex my-3 list-none h-100 flex-wrap flex-row border rounded-md border-gray-500">
            <li class="flex-auto text-center cursor-pointer">
                <p class="text-xs font-bold uppercase px-5 py-3 rounded-r block leading-normal { !searchByBusiness ? 'text-white bg-yellow-600':'text-yellow-600 bg-white'}" on:click={() => searchByBusiness = !searchByBusiness}>
                Solicitation
                </p>
            </li>
            <li class="flex-auto text-center cursor-pointer">
                <p class="text-xs font-bold uppercase px-5 py-3 rounded-l block leading-normal { searchByBusiness ? 'text-white bg-yellow-600':'text-yellow-600 bg-white'}" on:click={() => searchByBusiness = true}>
                Business
                </p>
            </li>
        </ul>
    </div>

    {#if searchByBusiness}
        <section class="border-t-2 border-b-2 w-full bg-white min-h-0 h-auto flex flex-row">
            <div class="font-semibold text-center py-3 px-1 w-24">CAGE Code</div>
            <div class="font-semibold text-left py-3 px-1 flex-1">Company Name</div>
            <div class="font-semibold text-left py-3 px-1 flex-1">POC</div>
            <div class="font-semibold text-left py-3 px-1 flex-1">Primary NAICs</div>
            <div class="font-semibold text-left py-3 px-1 flex-1">PSC</div>
        </section>
        
        <section class="flex w-full flex-col flex-1 min-h-0 {filteredCompanies.length == 0 ? "" : "overflow-y-scroll"} px-0">
            {#if filteredCompanies.length == 0 && searchParam === ""}
                <p class="text-center mt-3">Search for companies</p>
            {:else if filteredCompanies.length > 0}
                {#each filteredCompanies as company}
                    <SearchResultsItem {company} />
                {/each}
            {:else}
                <p>No results found containing "{searchParam}"</p>
            {/if}
        </section>
    {:else}
        <section class="border-t-2 border-b-2 w-full bg-white min-h-0 h-auto flex flex-row">
            <div class="font-semibold text-center py-3 px-1 w-24">Title</div>
            <div class="font-semibold text-left py-3 px-1 flex-1">NAICs</div>
            <div class="font-semibold text-left py-3 px-1 flex-1">Expiration Date</div>
        </section>
        
        <section class="flex w-full flex-col flex-1 min-h-0 {filteredSolicitations.length == 0 ? "" : "overflow-y-scroll"} px-0">
            {#if filteredSolicitations.length == 0 && searchParam === ""}
                <p class="text-center mt-3">Search for opportunities</p>
            {:else if filteredSolicitations.length > 0}
                {#each filteredSolicitations as company}
                    <SearchResultsItem {company} />
                {/each}
            {:else}
                <p>No results found containing "{searchParam}"</p>
            {/if}
        </section>
    {/if}
    
</section>