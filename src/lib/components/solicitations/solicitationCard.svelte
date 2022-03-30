<script>
	import { formatDate } from '$lib/utils';
	import InfoItem from './_infoItem.svelte'
	export let solicitation;
	
	const { title, solicitationNumber, naicsCode, published_at, classificationCode, uiLink, active, type, typeOfSetAside, placeOfPerformance, responseDeadLine } = solicitation;

	const [date, time] = formatDate(published_at).split(", ")
	const [deadLineDate, deadLineTime] = formatDate(responseDeadLine).split(", ")
	let solicitationStatus = active === "Yes" ? "Active" : "Inactive";
    let statusColors = solicitationStatus === "Active" ? { color: "text-green-700", bg: "bg-green-100", border: "border-green-300"} : {color: "text-red-700", bg: "bg-red-100", border: "border-red-300" };
	
	function getPlaceOfPerformance(pop) {

		if(!pop || pop.state === "--") {
			return "Not Set";
		}

		if(pop.zip === "--") {
			return `${ pop.state }, ${ pop.country }`;
		}

		return `${ pop.state } ${ pop.zip }, ${ pop.country }`
	}
</script>

<div class="bg-white shadow-sm border-b-4 w-full border-green-400">
	<div class="flex flex-col items-center md:flex-row md:items-row md:justify-between border-b-4 border-green-400 px-2">
		<h1 class="text-gray-900 font-bold text-center md:text-left text-xl leading-8 my-1 break-word">{ title }</h1>
		<div class="flex w-1/3 md:w-1/6 m-1 justify-center items-center rounded-full border { statusColors.bg } { statusColors.color } { statusColors.border }">
			<div class="text-s py-2 leading-none font-semibold flex-initial">{ solicitationStatus }</div>
		</div>
	</div>
	<ul class="text-gray-600 py-2 px-3 my-3 divide-y rounded shadow-sm">
		<InfoItem title="Solicitation No." context={solicitationNumber} />
		<InfoItem title="Response Deadline" context={deadLineDate} />
		<InfoItem title="Type" context={type} />
		<InfoItem title="Place of Performance" context={getPlaceOfPerformance(placeOfPerformance)} />
		<InfoItem title="Set Aside" context={typeOfSetAside ? typeOfSetAside : "--"} />
		<InfoItem title="NAICs Code" context={naicsCode} />
		<InfoItem title="Post Date" context={date} />
		<InfoItem title="Classification Code" context={classificationCode} />
		<li class="flex flex-col sm:flex-row sm:justify-between py-3">
			<span class="font-bold md:items-start">SAM link</span>
			<span class="md:items-start">
				<a href={ uiLink } target="_blank" class="text-blue-700  items-center font-semibold tracking-wide">
					<span class="hover:underline">
						Details
					</span>
					<span class="text-xl ml-2">&#8594;</span>
				</a>
			</span>
		</li>
	</ul>
</div>
<slot />