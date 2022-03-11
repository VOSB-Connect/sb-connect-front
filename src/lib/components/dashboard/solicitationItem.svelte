<script>
    import { formatDate } from '$lib/utils'

    export let contract;
    export let count = {};
    const { id, naicsCode, title, baseType, archiveDate } = contract;
    let [date, time] = formatDate(archiveDate).split(",")

</script>

<a href={ `/solicitations/${ id }` } class="hover:bg-blue-100 bg-gray-100 flex w-full gap-x-4 px-3 py-2 items-center justify-center cursor-pointer">
    <p>{ naicsCode }</p>
    <p>{ title }</p>
    <p class="px-6 py-2  { count[baseType][1] } text-white font-medium text-xs uppercase rounded-full shadow-md  focus:bg-blue-700 focus:shadow-lg  focus:ring-0">{ baseType }</p>
    <p class="ml-auto">{ date }</p>
</a>