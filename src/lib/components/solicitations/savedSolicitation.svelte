<script>
    import { formatDate } from '$lib/utils'
    import SolicitationAttachments from './solicitationAttachments.svelte';
    export let solicitation;
    let title = solicitation.title
    let solicitaitonNo = solicitation.solicitationNumber
    let postDate = formatDate(solicitation.published_at)
    let solicitationStatus = solicitation.active === "Yes" ? "Active" : "Inactive";
    let statusColors = solicitationStatus === "Active" ? {color: "text-green-700", bg: "bg-green-100", border: "border-green-300"} : {color: "text-red-700", bg: "bg-red-100", border: "border-red-300"};
    
    
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
<div class="w-full m-2 md:w-1/4 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
    <div class="w-full p-4 justify-center flex flex-col">
        <p class="border-b-2 text-xl">{title}</p>
        <p class="my-0 text-gray-500"><span class="font-bold">Solicitation No:</span> { solicitaitonNo }</p>
        <p class="my-0 text-gray-500"><span class="font-bold">Posted Date:</span> { postDate }</p>  
        <p class="my-0 text-gray-500"><span class="font-bold">NAICs Code:</span> { solicitation.naicsCode }</p>
        {#if displaySolicationAddress(solicitation.placeOfPerformance) !== ""}
            <p class="my-0 text-gray-500"><span class="font-bold">Place of Performance:</span> { displaySolicationAddress(solicitation.placeOfPerformance) }</p>   
        {/if}  
        <div class="flex w-1/4 justify-center items-center m-1 font-medium py-1 px-2 rounded-full border {statusColors.bg} {statusColors.color} {statusColors.border}">
            <div class="text-xs font-normal leading-none max-w-full flex-initial">{solicitationStatus}</div>
        </div>
        <SolicitationAttachments {solicitation} />
    </div>
</div>