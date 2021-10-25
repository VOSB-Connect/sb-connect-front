<script>
	import Icon from '$lib/components/dashboard/dashboardIcons.svelte'
	import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
	export let business;
	
	let primaryNaics = business.assertions.goodsAndServices.PrimaryNaics ?? "n/a";
	let purposeOfRegistrationDesc = business.entityRegistration.purposeOfRegistrationDesc;
</script>

<div class="bg-white shadow-sm p-3 border-t-4 row-span-3 col-span-1 border-green-400">
	<h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{business.entityRegistration.legalBusinessName}</h1>
	<ul class="bg-gray-100 text-gray-600 py-2 px-3 my-3 divide-y rounded shadow-sm">
		<li class="flex items-center justify-between py-3">
			<span>SAM Status</span>
			<span class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>Purpose of Registration</span>
			<span class="py-1 px-2 text-sm">{purposeOfRegistrationDesc}</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>Primary NAICs</span>
			<span class="ml-auto">{primaryNaics}</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>Statement of Capability</span>
			<a href="/">
				<Icon iconName={faFilePdf} />
			</a>
		</li>
	</ul>
	<slot />
</div>