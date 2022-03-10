<script>
	import Icon from '$lib/components/dashboard/dashboardIcons.svelte'
	import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
	export let business;

	const { primaryNaics, purposeOfRegistrationDesc, legalBusinessName, registrationStatus} = business;

	function handleProfileUpdate(){
		
	}
</script>

<div class="bg-white shadow-sm p-3 border-t-4 row-span-3 col-span-1 border-green-400">
	<div class="flex justify-between items-center">
		<h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{ legalBusinessName }</h1>
	</div>
	<ul class="bg-gray-100 text-gray-600 py-2 px-3 my-3 divide-y rounded shadow-sm">
		<li class="flex items-center justify-between py-3">
			<span>SAM Status</span>
			<span class="bg-green-500 py-1 px-2 rounded text-white text-sm">{ registrationStatus }</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>Purpose of Registration</span>
			<span class="py-1 px-2 text-sm">{ purposeOfRegistrationDesc }</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>Primary NAICs</span>
			<span class="ml-auto">{ primaryNaics ?? "N/A" }</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>Statement of Capability</span>
			<a href="/">
				<Icon iconName={ faFilePdf } />
			</a>
		</li>
	</ul>
	<slot />
</div>