<script>
		// your script goes here
		export let company;
</script>

<a href={`/companies/${company.id}`} class="hover:bg-blue-100 divide-y flex cursor-pointer">
		<div class="py-3 px-2 w-12 flex items-center justify-center"><input class="mt-1" type="checkbox" /></div>
		<div class="py-3 px-1 w-24 text-center">{company.cageCode}</div>
		<div class="py-3 px-1 w-full flex-1"><p class="w-full">{company.name}</p></div>
		<div class="py-3 px-1 w-full flex-1">{company.primaryContact}</div>
		<div class="py-3 px-1 w-full flex-1">{company.primaryNaics}</div>
		<div class="py-3 px-1 w-full flex-1">{company.psc}</div>
</a>
