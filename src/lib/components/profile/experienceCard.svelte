<script>
	export let business;

	let naicsList = business.assertions.goodsAndServices.naicsList;

	let businessTypeList = business.coreData.businessTypes.businessTypeList;

</script>
<div class="bg-white p-3 shadow-sm rounded-sm flex flex-row col-span-2 row-span-2 gap-4">
	<div>
		<p class="tracking-wide font-semibold text-gray-900 leading-8 mb-3">NAICs</p>
		<ul class="list-inside space-y-2">
			{#each naicsList as naics}
				<li class="flex gap-2 items-center">
					<div class="text-teal-600 max-w-lg">{naics.naicsCode ?? "This entity did not choose to pursue Federal contracts. They stated their reason for registering in SAM was to pursue Federal Assistance opportunities like grants and loans. "}</div>
					<div class="text-gray-500 text-xs">{naics.naicsDescription ?? ""}</div>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<p class="tracking-wide font-semibold text-gray-900 leading-8 mb-3">Business Type List</p>
		<ul class="list-inside space-y-2">
			{#each businessTypeList as type}
				<li class="flex gap-2 items-center">
					<div class="text-teal-600">{type.businessTypeCode ?? ""}</div>
					<div class="text-gray-500 text-xs">{type.businessTypeDesc ?? ""}</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
