<script>
	import { onMount } from "svelte";
	import { get } from '$lib/utils'
	import SearchResultsItem from "./searchResultsItem.svelte";
	import CompanyStore from '$lib/shared/company-store'
	import SolicitationStore from '$lib/shared/solicitation-store'

	let searchParam = "";
	let searchByBusiness = false;
	let selectedBusCode;

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

	function searchBy(code){
		
		if(code === "All"){
			filteredCompanies = getFilteredCompanies();
		} else {
			filteredCompanies = filteredCompanies.filter(company => company.coreData?.businessTypes?.businessTypeList?.some(({BusinessTypeCode}) => BusinessTypeCode === code));
		}
	}

	let businessTypes = []
	
	onMount(async () => {
		const companiesResponse = await get("entities");
		if(companiesResponse.ok){
			const data = await companiesResponse.json();
			CompanyStore.setCompanies(data);
		}
		const solicitationsResponse = await get("solicitations");
		if(solicitationsResponse.ok){
			const data = await solicitationsResponse.json();
			SolicitationStore.setSolicitations(data);
		}
		const busTypesResponse = await get("bus-types");
		if(busTypesResponse.ok){
			const data = await busTypesResponse.json();
			businessTypes = data.map(d => ({busTypeCode: d.BusinessTypeCode, busTypeDesc: d.BusinessTypeDesc}))	
		}
	})

</script>

<section aria-label="page caption" class="flex-col flex h-full bg-gray-100 border-t p-4 items-start">
	<input bind:value={searchParam} class="uppercase border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search">
	<div class="pt-2 text-gray-600 flex flex-col align-items-center gap-x-1 mb-3">
		
		<section class="flex gap-3">

			<div class="flex mt-2">
				<button class="border font-bold rounded-l rounded-r-none py-2 px-3 {!searchByBusiness ? 'border-green-500 bg-green-500 text-white':'border-green-500 text-green-500'}" on:click={() => searchByBusiness = !searchByBusiness}>
					Solicitation
				</button>
				<button class="border font-bold rounded-r rounded-l-none py-2 px-3 {searchByBusiness ? 'border-green-500 bg-green-500 text-white' : 'border-green-500 text-green-500'}" on:click={() => searchByBusiness = true}>
					Business
				</button>
			</div>
			{#if searchByBusiness}
			<div class="flex mt-2">
			<svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
			<!-- svelte-ignore a11y-no-onchange -->
			<select on:change={(e) => searchBy(e.target.value)} bind:value={selectedBusCode} class="border border-blue-500 rounded w-1/2 cursor-pointer text-white  px-4 py-2 bg-blue-500 hover:bg-blue-400 focus:outline-none appearance-none">
				<option class="max-w-sm break-words bg-gray-200 text-black" value="All">Choose a business type</option>
				{#each businessTypes as bus}
					<option class="max-w-sm break-words bg-gray-200 text-black" value={bus.busTypeCode}>{bus.busTypeDesc}</option>
				{/each}
			</select>
			</div>
			{/if}
		</section>
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