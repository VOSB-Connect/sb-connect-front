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
    <p id="ticket-statistics-tabs-label" class="font-semibold block mb-1 text-sm text-center md:text-left">Daily Solicitations Breakdown</p>
    <ul class="flex flex-wrap justify-center">
      <li>
        <button 
        class="bg-white focus:outline-none focus:bg-yellow-200 p-2 rounded-l-md border border-r-0  flex flex-col items-center w-24"  >
          <p class="font-semibold text-lg">{ count.total }</p>
          <p class="uppercase text-gray-600 text-sm">
            Total
          </p>
        </button>
      </li>
      <li>
        <button class="bg-green-500 focus:outline-none focus:bg-yellow-200 p-2 border border-r-0  flex flex-col items-center w-24"  >
          <p class="font-semibold text-white text-lg">{ count["Solicitation"][0] }</p>
          <p class="uppercase text-white text-sm">
            Sol
          </p>
        </button>
      </li>
      <li>
        <button class="bg-red-600 focus:outline-none focus:bg-yellow-200 p-2 border border-r-0 flex flex-col items-center w-24" >
          <p class="font-semibold text-white text-lg">{ count["Presolicitation"][0] }</p>
          <p class="uppercase text-white text-sm">
            Pre
          </p>
        </button>
      </li>
      <li>
        <button class="bg-purple-600 focus:outline-none focus:bg-yellow-200 p-2 border border-r-0  flex flex-col items-center w-24" >
          <p class="font-semibold text-white text-lg">{ count["Combined Synopsis/Solicitation"][0] }</p>
          <p class="uppercase text-white text-sm">
            Combined
          </p>
        </button>
      </li>

      <li>
        <button class="bg-yellow-500 focus:outline-none focus:bg-yellow-200 p-2 rounded-r-md border flex flex-col items-center w-24" >
          <p class="font-semibold text-white text-lg">{ count["Sources Sought"][0] }</p>
          <p class="uppercase text-white text-sm">
            Sources
          </p>
        </button>
      </li>
    </ul>
  </section>
</nav>