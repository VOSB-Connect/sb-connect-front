<script>
	export let business;

	const { entityPOC } = business
	const { addressLine1, addressLine2, city, stateOrProvinceCode, zipCode, countryCode, firstName, lastName, email, usPhone } = entityPOC;
	
</script>

<div class="bg-white p-3 shadow-sm rounded-sm col-span-2">
	<div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
		<span class="text-green-500">
			<svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
				stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
			</svg>
		</span>
		<span class="tracking-wide">Contact</span>
	</div>
	<div class="text-gray-700">
		<div class="grid md:grid-cols text-sm">
			<div class="grid grid-cols-3">
				<div class="px-4 py-2 font-semibold">Name</div>
				<div class="px-4 py-2 col-span-2">{ firstName ?? "N/A" } { lastName ?? "" }</div>
			</div>
			<div class="grid grid-cols-3">
				<div class="px-4 py-2 font-semibold">Email</div>
				<div class="px-4 py-2 col-span-2">
					{#if email}
						<a class="text-blue-800" href="mailto:{ email }">{ email }</a>
						{:else} 
						<p>N/A</p>
					{/if}
					
				</div>
			</div>
			<div class="grid grid-cols-3">
				<div class="px-4 py-2 font-semibold">Contact No.</div>
				<div class="px-4 py-2 col-span-2">{ usPhone ?? "N/A"}</div>
			</div>
			<div class="grid grid-cols-3">
				<div class="px-4 py-2 font-semibold">Mailing Address</div>
				<div class="px-4 py-2 col-span-2">{ addressLine1 } { addressLine2 ?? "" } { city }, { stateOrProvinceCode } { zipCode }</div>
			</div>
			
		</div>
	</div>
	
</div>