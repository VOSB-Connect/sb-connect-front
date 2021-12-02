<script>
    import { formatDate } from '$lib/utils'
    export let solicitation;
    let title = solicitation.title
    let solicitaitonNo = solicitation.solicitationNumber
    let postDate = formatDate(solicitation.published_at)

</script>


<!-- Card -->
<div class="w-full m-2 md:w-1/4 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
    <div class="w-full p-4 justify-center flex flex-col">
        <p class="border-b-2 text-xl">{title}</p>
        <p class="my-0 text-gray-500"><span class="font-bold">Solicitation No:</span> { solicitaitonNo }</p>
        <p class="my-0 text-gray-500"><span class="font-bold">Posted Date:</span> { postDate }</p>      
        <a href="/dashboard/solicitations/{solicitation.id}" type="button" class="mt-2 px-4 py-2 text-center text-white hover:bg-blue-700 bg-blue-500" >View Solicitation Details</a>
    </div>
</div>