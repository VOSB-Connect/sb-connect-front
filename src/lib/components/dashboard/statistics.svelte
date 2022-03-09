<script>

  export let count = {};

  // let filterType;

  // function filterByType(type) {
  //   if(!type) {
  //     console.log(solicitations)
  //   } else {
  //     filterType = solicitations.filter(solicitation => solicitation.type === type)
    
  //     if(filterType.length > 0) {
  //       console.log(filterType)
  //     }
  //   }
  // }


</script>

<nav class="bg-gray-100 flex p-4">
  <!-- stats nav -->
  <section aria-labelledby="ticket-statistics-tabs-label" class="pb-2">
    <label id="ticket-statistics-tabs-label" class="font-semibold block mb-1 text-sm">Daily Solicitations Breakdown
      <span class="font-normal text-gray-700">(this week)</span></label>
    <ul class="flex">
      <li>
        <button on:click={() => filterByType(null)}
        class="focus:outline-none focus:bg-yellow-200 p-2 rounded-l-md border border-r-0 bg-white flex flex-col items-center w-24"  >
          <p class="font-semibold text-lg">{ count["total"] }</p>
          <p class="uppercase text-gray-600 text-sm">
            Total
          </p>
        </button>
      </li>
      <li>
        <button class="focus:outline-none focus:bg-yellow-200 p-2 border border-r-0 bg-white flex flex-col items-center w-24"  >
          <p class="font-semibold text-lg">{ count["Solicitation"] }</p>
          <p class="uppercase text-gray-600 text-sm">
            Sol
          </p>
        </button>
      </li>
      <li>
        <button class="focus:outline-none focus:bg-yellow-200 p-2 border border-r-0 bg-white flex flex-col items-center w-24" >
          <p class="font-semibold text-lg"> { count["Presolicitation"] }</p>
          <p class="uppercase text-gray-600 text-sm">
            Pre
          </p>
        </button>
      </li>
      <li>
        <button class="focus:outline-none focus:bg-yellow-200 p-2 border border-r-0 bg-white flex flex-col items-center w-24" >
          <p class="font-semibold text-lg">{ count["Combined Synopsis/Solicitation"] }</p>
          <p class="uppercase text-gray-600 text-sm">
            Combined
          </p>
        </button>
      </li>

      <li>
        <button class="focus:outline-none focus:bg-yellow-200 p-2 border border-r-0 bg-white flex flex-col items-center w-24" >
          <p class="font-semibold text-lg">{ count["Sources Sought"] }</p>
          <p class="uppercase text-gray-600 text-sm">
            Sources
          </p>
        </button>
      </li>
    </ul>
  </section>
</nav>