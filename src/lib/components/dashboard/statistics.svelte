<script>

  export let solicitationsData = {};
  export let solicitationType = "";
</script>

<nav class="bg-gray-100 flex p-4 justify-center md:justify-start">
  <!-- stats nav -->
  <section aria-labelledby="ticket-statistics-tabs-label" class="pb-2">
    <p id="ticket-statistics-tabs-label" class="font-semibold block mb-1 text-sm text-center md:text-left">Daily Solicitations Breakdown</p>
    <ul class="flex">
      <li>
        <button on:click={ () => solicitationType = "Total"}
        class="bg-white focus:outline-none focus:bg-yellow-200 p-2 px-4 rounded-l-md border border-r-0  flex flex-col items-center w-max"  >
          <p class="font-semibold text-lg">{ solicitationsData["Total"].count }</p>
          <p class="uppercase text-gray-600 text-sm">Total</p>
        </button>
      </li>
      <li>
        <button  on:click={ () => solicitationType = "Solicitation"}
        class="bg-green-500 focus:outline-none focus:bg-yellow-200 p-2 px-4 border border-r-0  flex flex-col items-center w-max"  >
          <p class="font-semibold text-white text-lg">{ solicitationsData["Solicitation"].count }</p>
          <p class="uppercase text-white text-sm">Sol</p>
        </button>
      </li>
      <li>
        <button on:click={ () => solicitationType = "Presolicitation"}
        class="bg-red-600 focus:outline-none focus:bg-yellow-200 p-2 px-4 border border-r-0 flex flex-col items-center w-max" >
          <p class="font-semibold text-white text-lg">{ solicitationsData["Presolicitation"].count }</p>
          <p class="uppercase text-white text-sm">Pre</p>
        </button>
      </li>
      <li>
        <button on:click={ () => solicitationType = "Combined"}
        class="bg-purple-600 focus:outline-none focus:bg-yellow-200 p-2 px-4 border border-r-0  flex flex-col items-center w-max" >
          <p class="font-semibold text-white text-lg">{ solicitationsData["Combined"].count }</p>
          <p class="uppercase text-white text-sm">Combined</p>
        </button>
      </li>

      <li>
        <button  on:click={ () => solicitationType = "Sources Sought"}
        class="bg-yellow-500 focus:outline-none focus:bg-yellow-200 p-2 px-4 rounded-r-md border flex flex-col items-center w-max" >
          <p class="font-semibold text-white text-lg">{ solicitationsData["Sources Sought"].count }</p>
          <p class="uppercase text-white text-sm">Sources</p>
        </button>
      </li>
    </ul>
  </section>
</nav>