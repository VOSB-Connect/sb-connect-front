<script>
    import { formatDate } from '$lib/utils'

    export let solicitation = {};
    export let solicitationColor = "";
    //const { id, naicsCode, title, baseType, archiveDate } = solicitation;
  
    let [date, _] = formatDate(solicitation.archiveDate).split(",")
</script>

<a href={ `/solicitations/${solicitation.id }` } class="hover:bg-blue-100 bg-gray-100 w-full gap-x-4 px-3 py-2 flex md:justify-between cursor-pointer">
    <p class="hidden md:block my-auto">{ solicitation.naicsCode }</p>
    <div class="flex flex-col md:flex-row md:justify-between items-center grow w-full px-2">
        <p class="block md:hidden text-center sm:text-right">{ solicitation.naicsCode }</p>
        <p class="text-center md:text-left">{ solicitation.title }</p>
        <p class="px-6 py-2 { solicitationColor } text-white font-medium text-xs uppercase rounded-full shadow-md  focus:bg-blue-700 focus:shadow-lg  focus:ring-0">{ solicitation.baseType }</p>
    </div>
</a>