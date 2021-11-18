<script>
    export let contract;
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
</script>

<a href={`/solicitations/${contract.id}`} class="hover:bg-blue-100 bg-gray-100 flex w-full gap-x-4 px-3 py-2 items-center justify-center cursor-pointer">
    <p>{contract.naicsCode}</p>
    <p class="flex-1 w-24">{contract.title}</p>
    <p>{new Date(contract.published_at).toLocaleString('en-US', options)}</p>
</a>