<script>
    import { formatDate } from '$lib/utils'

    export let contract;
    export let count = {};
    const { id, naicsCode, title, baseType, archiveDate } = contract;
  
    let [date, time] = formatDate(archiveDate).split(",")
</script>

<a href={ `/solicitations/${ id }` } class="hover:bg-blue-100 bg-gray-100 w-full gap-x-4 px-3 py-2 flex md:justify-between cursor-pointer">
    <p class="hidden md:block my-auto">{ naicsCode }</p>
    <div class="flex flex-col md:flex-row md:justify-between items-center grow w-full px-2">
        <p class="block md:hidden text-center sm:text-right">{ naicsCode }</p>
        <p class="text-center md:text-left">{ title }</p>
        <p class="px-6 py-2 { count[baseType][1] } text-white font-medium text-xs uppercase rounded-full shadow-md  focus:bg-blue-700 focus:shadow-lg  focus:ring-0">{ baseType }</p>
        <p class="block md:hidden text-center sm:text-right">{ date }</p>
    </div>
    <p class="hidden md:block w-20 text-right my-auto">{ date }</p>
</a>