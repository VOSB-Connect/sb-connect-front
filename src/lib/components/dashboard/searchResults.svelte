<script>
    import DashboardIcons from "$lib/components/dashboard/dashboardIcons.svelte"
    import {faSearch} from '@fortawesome/free-solid-svg-icons'
    import SearchResultsItem from "./searchResultsItem.svelte";
    import CompanyStore from '$lib/stores/company-store'

    let searchParam = "";
    let filteredResults = []
    $: {
        filteredResults = [...$CompanyStore].filter(company => company.primaryNaics.includes(searchParam) || company.name.includes(searchParam)) || []
    }
</script>

<section aria-label="page caption" class="flex-col flex h-full bg-gray-100 border-t p-4 items-start">
    <h1 id="page-caption" class="font-semibold text-lg">Hub Connection</h1>
    <div class="pt-2 text-gray-600 flex flex-row align-items-center gap-x-1 mb-3">
        <input bind:value={searchParam} class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search">
        <button type="submit" class="m-auto -ml-8" >
            <DashboardIcons iconName={faSearch} />
        </button>
    </div>
    
    <section class="border-t-2 border-b-2 w-full bg-white min-h-0 h-auto flex flex-row">
        <div class="py-3 px-2 w-12 flex items-center justify-center"><input type="checkbox" name="checkAll" /></div>
        <div class="font-semibold text-center py-3 px-1 w-24">CAGE Code</div>
        <div class="font-semibold text-left py-3 px-1 flex-1">Company Name</div>
        <div class="font-semibold text-left py-3 px-1 flex-1">POC</div>
        <div class="font-semibold text-left py-3 px-1 flex-1">Primary NAICs</div>
        <div class="font-semibold text-left py-3 px-1 flex-1">PSC</div>
    </section>

    <section class="flex w-full flex-col flex-1 min-h-0 overflow-y-scroll px-0">
        {#if filteredResults.length > 0}
            {#each filteredResults as company}
                <SearchResultsItem {company} />
            {/each}
        {:else}
            <p>No results found containing "{searchParam}"</p>
        {/if}
    </section>
</section>