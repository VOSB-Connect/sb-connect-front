<script>
    import { formatDate } from '$lib/utils'
    
    import { faExternalLinkAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
    import Fa from 'svelte-fa'
    export let solicitation;

    const { title, solicitationNumber, published_at, active, naicsCode, uiLink } = solicitation


    let postDate = formatDate(published_at)
    let solicitationStatus = active === "Yes" ? "Active" : "Inactive";
    let statusColors = solicitationStatus === "Active" ? { color: "text-green-700", bg: "bg-green-100", border: "border-green-300"} : {color: "text-red-700", bg: "bg-red-100", border: "border-red-300" };
    
    
    function displaySolicationAddress(placeOfPerformance){
        let { streetAddress, city, state, zip } = placeOfPerformance;
        let fullAddress = "";
        if(streetAddress !== null) fullAddress += streetAddress + " ";
        if(city !== null) fullAddress += city.name + " ";
        if(state !== null) fullAddress += state.code + ", ";
        if(zip !== null) fullAddress += zip;
        return fullAddress.length > 7 ? fullAddress : "";
    }
    
    
    //$:console.log(solicitation)
</script>


<!-- Card -->
<div class="w-full lg:w-10/12 bg-white shadow-lg rounded-lg flex flex-col p-3 gap-y-2">
        <div class="border-b-2">
            <p class=" text-xl ">{ title }</p>
        </div>
        <p class="my-0 text-gray-500"><span class="font-bold">Solicitation No:</span> { solicitationNumber }</p>
        <p class="my-0 text-gray-500"><span class="font-bold">Posted Date:</span> { postDate }</p>  
        <p class="my-0 text-gray-500"><span class="font-bold">NAICs Code:</span> { naicsCode }</p>
        <!-- {#if displaySolicationAddress(solicitation.placeOfPerformance) !== ""}
            <p class="my-0 text-gray-500"><span class="font-bold">Place of Performance:</span> { displaySolicationAddress(solicitation.placeOfPerformance) }</p>   
        
            {/if}   -->
        <div class="flex justify-between">
            <div class="flex w-max justify-center items-center px-2 py-1 rounded-full border { statusColors.bg } { statusColors.color } { statusColors.border }">
                <p class="text-xs font-normal leading-none">{ solicitationStatus }</p>
            </div>
            <div class="flex gap-x-2 justify-center items-center">
                <a href={ uiLink } target="_blank" class="text-blue-400 cursor-pointer hover:text-blue-600"><Fa icon={ faExternalLinkAlt } size="md" /></a>
                <Fa icon={ faTrash } size="md" class="text-red-500 cursor-pointer hover:text-red-600"  />
            </div>
            
        </div>
</div>