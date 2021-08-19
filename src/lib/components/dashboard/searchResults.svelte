<script>
    export let title;
    import DashboardIcons from "$lib/components/dashboard/dashboardIcons.svelte"
    import {faSearch} from '@fortawesome/free-solid-svg-icons'
    import SearchResultsItem from "./searchResultsItem.svelte";
</script>

<section aria-label="page caption" class="flex-col flex h-auto bg-gray-100 border-t p-4 items-start">
    <h1 id="page-caption" class="font-semibold text-lg">{title}</h1>
    <div class="pt-2 text-gray-600 flex flex-row align-items-center gap-x-1 mb-3">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search" name="search" placeholder="Search">
        <button type="submit" class="m-auto" >
            <DashboardIcons iconName={faSearch} />
        </button>
    </div>

<!-- content overflow section 
    remove table and thead but keep tbody and change tbody to section, in order
    to have scrollable overflow section -->
    <table aria-describedby="info-popup" aria-label="open tickets" class="border-t w-full min-h-0 h-full flex flex-col">
        <thead class="flex w-full flex-col px-4">
        <tr class="border-b flex">
            <th class="font-semibold text-left py-3 pl-3 pr-1 w-12">
            <input type="checkbox" name="" id="" />
            </th>
            <th class="font-semibold text-left py-3 px-1 w-36 truncate">
            CAGE Code
            </th>
            <th class="font-semibold text-left py-3 px-1 w-full max-w-xs xl:max-w-lg truncate">
            Company Name
            </th>
            <th class="font-semibold text-left py-3 px-1 flex-1 truncate">
            POC
            </th>
            <th class="font-semibold text-left py-3 px-1 flex-1 truncate">
            Primary NAICs
            </th>
            <th class="font-semibold text-left py-3 px-1 flex-1 truncate">
            PSC
            </th>
        </tr>
        </thead>
        <tbody class="flex w-full flex-col flex-1 min-h-0 overflow-hidden px-4">
            {#each [1,2,3,4] as item}
                <SearchResultsItem />
            {/each}
        </tbody>
    </table>
</section>