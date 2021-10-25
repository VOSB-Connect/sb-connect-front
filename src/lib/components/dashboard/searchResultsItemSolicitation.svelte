<script>
    // your script goes here
    export let contract;
    console.log(contract.naicsCode)
    // let pointOfContact = ``
    // let primaryNaics = company.assertions.goodsAndServices.primaryNaics || "not listed";
</script>

<a href={`/solicitations/${contract.id}`} class="hover:bg-blue-100 divide-y flex cursor-pointer">
<div class="py-3 px-1 w-24 text-center">{contract.title}</div>
<div class="py-3 px-1 w-24 text-center">{contract.naicsCode}</div>
<div class="py-3 px-1 w-full flex-1"></div>
<div class="py-3 px-1 w-full flex-1">{contract.published_at}</div>
<!-- <div class="py-3 px-1 w-full flex-1">{primaryNaics}</div> -->
<!-- <div class="py-3 px-1 w-full flex-1">{company.psc}</div>  -->
</a>