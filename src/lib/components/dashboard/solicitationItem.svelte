<script>
    import { formatDate } from '$lib/utils'

    export let solicitation = {};
    export let solicitationColor = "";

    function formatPop(pop){
        if (!pop) return "Not Set"
        if (pop?.state == "--") return "Not Set"
        return `${pop.state}, ${pop.country}`;
    }

    let [date, _] = formatDate(solicitation.archiveDate).split(",")
</script>

<a href={ `/solicitations/${solicitation.id }` } class="hover:bg-blue-100 bg-white w-full gap-x-2 px-3 py-2 flex md:justify-between cursor-pointer">
    <p class="hidden md:block md:w-1/12 my-auto">{ solicitation.naicsCode }</p>
    <div class="flex flex-col md:flex-row items-center w-full md:w-11/12 gap-x-4 gap-y-1 md:gap-y-0">
        <p class="block md:hidden text-center sm:text-right">{ solicitation.naicsCode }</p>
        <p class="text-center md:text-left md:w-9/12 w-full break-words">{ solicitation.title }</p>
        <div class="md:w-2/12 flex justify-center">    
            <p class="px-4 py-2 { solicitationColor } w-full text-white text-center font-medium text-xs uppercase rounded-full shadow-md  focus:bg-blue-700 focus:shadow-lg  focus:ring-0">{ solicitation.baseType }</p>
        </div>
        <p class="md:w-1/12 text-center">{formatPop(solicitation.placeOfPerformance)}</p>
    </div>
</a>