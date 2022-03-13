<script>
	export let business;

	const { naicsList, businessTypes } = business; 
	const { businessTypeList } = businessTypes

</script>
<div class="bg-white p-3 shadow-sm rounded-sm flex flex-col md:flex-row col-span-2 row-span-2 gap-4">
	<div>
		<p class="tracking-wide font-semibold text-gray-900 leading-8 mb-3">NAICs</p>
		<ul class="list-inside space-y-2">
			{#each naicsList as naicsItem}
				<li class="flex gap-2 items-center">
					<div class="text-teal-600 max-w-lg">{ naicsItem.naicsCode ?? "This entity did not choose to pursue Federal contracts. They stated their reason for registering in SAM was to pursue Federal Assistance opportunities like grants and loans. " }</div>
					<div class="text-gray-500 text-xs">{ naicsItem.naicsDescription ?? "" }</div>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<p class="tracking-wide font-semibold text-gray-900 leading-8 mb-3">Business Type List</p>
		<ul class="list-inside space-y-2">
			{#each businessTypeList as type}
				<li class="flex gap-2 items-center">
					<div class="text-teal-600">{ type.businessTypeCode ?? "" }</div>
					<div class="text-gray-500 text-xs">{ type.businessTypeDesc ?? "" }</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
