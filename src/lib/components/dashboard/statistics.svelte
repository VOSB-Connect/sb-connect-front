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
    <p id="ticket-statistics-tabs-label" class="font-semibold block mb-1 text-sm">Daily Solicitations Breakdown</p>
    <ul class="flex">
      <li>
        <button class="focus:outline-none focus:bg-yellow-200 p-2 rounded-l-md border border-r-0 bg-white flex flex-col items-center w-24"  >
          <p class="font-semibold text-lg">{ count.total }</p>
          <p class="uppercase text-gray-600 text-sm">
            Total
          </p>
        </button>
      </li>
      <li>
        <button class="focus:outline-none focus:bg-yellow-200 p-2 border border-r-0 bg-white flex flex-col items-center w-24"  >
          <p class="font-semibold text-lg">{ count["Solicitation"][0] }</p>
          <p class="uppercase text-gray-600 text-sm">
            Sol
          </p>
        </button>
      </li>
      <li>
        <button class="focus:outline-none focus:bg-yellow-200 p-2 border border-r-0 bg-white flex flex-col items-center w-24" >
          <p class="font-semibold text-lg">{ count["Presolicitation"][0] }</p>
          <p class="uppercase text-gray-600 text-sm">
            Pre
          </p>
        </button>
      </li>
      <li>
        <button class="focus:outline-none focus:bg-yellow-200 p-2 border border-r-0 bg-white flex flex-col items-center w-24" >
          <p class="font-semibold text-lg">{ count["Combined Synopsis/Solicitation"][0] }</p>
          <p class="uppercase text-gray-600 text-sm">
            Combined
          </p>
        </button>
      </li>

      <li>
        <button class="focus:outline-none focus:bg-yellow-200 p-2 border border-r-0 bg-white flex flex-col items-center w-24" >
          <p class="font-semibold text-lg">{ count["Sources Sought"][0] }</p>
          <p class="uppercase text-gray-600 text-sm">
            Sources
          </p>
        </button>
      </li>
    </ul>
  </section>
</nav>