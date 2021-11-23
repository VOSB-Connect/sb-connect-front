<script>
  import { onMount } from 'svelte'
  import { auth } from '$lib/shared/user-store'
  
  let business = {}

  onMount(async () => {
      if($auth !== null){
        business = $auth.user.entity;
      }
  })
  $:console.log(business)
</script>

{#if business}
  <div class="flex justify-start bg-gray-100 py-10 p-14">
    <!--- First Container --->
      <div class="w-72 bg-white max-w-xs rounded-sm border border-gray-300 cursor-pointer">
        <div class="flex bg-red-400 h-20 items-center">
          <p class="text-white text-center text-2xl w-full">TOTAL OPPORTUNITIES</p>
        </div>
        <div class="flex flex-col items-center px-5 pt-6 mb-2 text-sm text-gray-600">
          <h4 class="text-xl">Primary NAICs: {business.assertions?.goodsAndServices.PrimaryNaics}</h4>
          <p class="py-4 text-xl font-bold">41</p>
        </div>
      </div>
  </div> 
{/if}