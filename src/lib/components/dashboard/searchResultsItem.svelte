<script>
		// your script goes here
		export let company;
		let pointOfContact = ``
		let primaryNaics = company.assertions.goodsAndServices.primaryNaics || "not listed";
</script>

<a href={`/companies/${company.id}`} class="hover:bg-blue-100 divide-y flex cursor-pointer">
		<div class="py-3 px-2 w-12 flex items-center justify-center"><input class="mt-1" type="checkbox" /></div>
		<div class="py-3 px-1 w-24 text-center">{company.entityRegistration.cageCode}</div>
		<div class="py-3 px-1 w-full flex-1"><p class="w-full">{company.entityRegistration.legalBusinessName}</p></div>
		<div class="py-3 px-1 w-full flex-1">{pointOfContact}</div>
		<div class="py-3 px-1 w-full flex-1">{primaryNaics}</div>
		<div class="py-3 px-1 w-full flex-1">{company.psc}</div>
</a>
