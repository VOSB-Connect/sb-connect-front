<script>
	export let business;

	let naicsList = business.assertions.goodsAndServices.naicsList;
	console.log(naicsList);

	let businessTypeList = business.coreData.businessTypes.businessTypeList;
	console.log(businessTypeList);

</script>
<div class="bg-white p-3 shadow-sm rounded-sm col-span-2 flex flex-col gap-4">
	<div>
		<div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
			<span class="tracking-wide">NAICs</span>
		</div>
		<ul class="list-inside space-y-2">
			{#each naicsList as naics}
				<li>
					<div class="text-teal-600">{naics.naicsCode ?? "This entity did not choose to pursue Federal contracts. They stated their reason for registering in SAM was to pursue Federal Assistance opportunities like grants and loans. "}</div>
					<div class="text-gray-500 text-xs">{naics.naicsDescription ?? ""}</div>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
			<span class="tracking-wide">Business Type List</span>
		</div>
		<ul class="list-inside space-y-2">
			{#each businessTypeList as type}
				<li>
					<div class="text-teal-600">{type.businessTypeCode ?? ""}</div>
					<div class="text-gray-500 text-xs">{type.businessTypeDesc ?? ""}</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
