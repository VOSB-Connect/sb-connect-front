<script>
	import Icon from '$lib/components/dashboard/dashboardIcons.svelte'
	import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
	export let contract;
	
	const { title, solicitationNumber, naicsCode, published_at, classificationCode } = contract;
</script>

<div class="bg-white shadow-sm p-3 border-t-4 row-span-2 border-green-400">
	<h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{ title }</h1>
	<ul class="bg-gray-100 text-gray-600 py-2 px-3 my-3 divide-y rounded shadow-sm">
		<li class="flex items-center justify-between py-3">
			<span>Solicitation No.</span>
			<span class="ml-auto">{ solicitationNumber }</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>NAICs Code</span>
			<span class="ml-auto">{ naicsCode }</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>Post Date</span>
			<span class="ml-auto">{ published_at }</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>Classification Code </span>
			<span class="ml-auto">{ classificationCode }</span>
		</li>
	</ul>
	<slot />
</div>