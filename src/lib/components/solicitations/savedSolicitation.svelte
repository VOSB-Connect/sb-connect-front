<script>
    export let contract;

    let title = contract.title

    let solicitaitonNo = contract.solicitationNumber

    let postDate = contract.published_at


    // let pointOfContact = partner.assertions.pointsOfContact?.electronicBusinessPOC;
	// pointOfContact = pointOfContact == null ? {}:pointOfContact;

    // let naicsList = partner.assertions.goodsAndServices.naicsList;
	// console.log(naicsList);

	// let businessTypeList = partner.coreData.businessTypes.businessTypeList;
	// console.log(businessTypeList);

</script>

<main class="flex-grow flex flex-col min-h-0 border-t">
    <section class="flex justify-center flex-wrap">
        <!-- Card -->
        <div class="w-full m-2 md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
            <div class="w-full p-4 justify-center flex flex-col">
                <h4 class="border-b-2 text-3xl" id="whoobe-3mr7n">{title}</h4>
                <p class="my-1" >{ solicitaitonNo }</p>
                <p class="my-1" >{ postDate }</p>
                <!-- <p class="my-1" >{pointOfContact.city}, {pointOfContact.stateOrProvinceCode}</p>
                <p class="my-1" >
                    {#each naicsList as naics}
                        <span>
                            <div class="max-w-lg">{naics.naicsCode ?? "This entity did not choose to pursue Federal contracts. They stated their reason for registering in SAM was to pursue Federal Assistance opportunities like grants and loans."}</div>
                        </span> 
                    {/each}
                </p> -->
                
                <button value="button" class="my-4 px-4 py-2 text-white hover:bg-blue-700 bg-blue-500" >View Full Business Profile</button>
            </div>
        </div>
    </section>
</main>