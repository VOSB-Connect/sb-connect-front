<script>
    export let contract;
    console.log(contract.published_at)
</script>

<a href={`/solicitations/${contract.id}`} class="hover:bg-blue-100 bg-gray-100 flex w-full gap-x-4 px-3 py-2 items-center justify-center cursor-pointer">
    <p>{contract.naicsCode}</p>
    <p class="flex-1 w-24">{contract.title}</p>
    <p>{contract.published_at}</p>
</a>