<script>
	import { formatDate } from '$lib/utils';
	export let contract;
	
	const { title, solicitationNumber, naicsCode, published_at, classificationCode, uiLink, active, type, typeOfSetAside } = contract;

	const [date, time] = formatDate(published_at).split(", ")
	let solicitationStatus = active === "Yes" ? "Active" : "Inactive";
    let statusColors = solicitationStatus === "Active" ? { color: "text-green-700", bg: "bg-green-100", border: "border-green-300"} : {color: "text-red-700", bg: "bg-red-100", border: "border-red-300" };
	
</script>

<div class="bg-white shadow-sm border-b-4 w-full border-green-400">
	<div class="flex flex-col items-center md:flex-row md:items-row md:justify-between px-1">
		<h1 class="text-gray-900 font-bold text-center md:text-left text-xl leading-8 my-1 break-all">{ title }</h1>
		<div class="flex w-1/3 md:w-1/6 m-1 justify-center items-center rounded-full border { statusColors.bg } { statusColors.color } { statusColors.border }">
			<div class="text-s py-2 leading-none font-semibold flex-initial">{ solicitationStatus }</div>
		</div>
	</div>
	<ul class="bg-gray-100 text-gray-600 py-2 px-3 my-3 divide-y rounded shadow-sm">
		<li class="flex items-center justify-between py-3">
			<span>Solicitation No.</span>
			<span class="ml-auto">{ solicitationNumber }</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>Type</span>
			<span class="ml-auto">{ type }</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>Set Aside</span>
			<span class="ml-auto">{ typeOfSetAside ? typeOfSetAside : "--" }</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>NAICs Code</span>
			<span class="ml-auto">{ naicsCode }</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>Post Date</span>
			<span class="ml-auto">{ date }</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>Classification Code </span>
			<span class="ml-auto">{ classificationCode }</span>
		</li>
		<li class="flex items-center justify-between py-3">
			<span>SAM link</span>
			<span class="ml-auto">
				<a href={ uiLink } target="_blank">Details</a>
			</span>
		</li>
	</ul>
</div>
<slot />