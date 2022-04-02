<script>
    import { auth } from '$lib/stores/user-store'
    import { faTimes } from '@fortawesome/free-solid-svg-icons'
    import Fa from 'svelte-fa'
    
    export let open = false;
</script>

  <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
  <aside class="md:hidden bg-purple-900 w-full fixed z-50" class:open id="mobile-menu">
    <div class="py-10 pl-6 space-y-1">
        <a href="#"  on:click="{() => open = !open}">
            <Fa icon={faTimes} size="lg" class="ml-auto cursor-pointer" />
        </a>
          <!-- <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
        href="/">Home</a> -->
        <a class="text-sm font-medium text-gray-200 transition-colors duration-300 px-3 py-2 block transform hover:text-indigo-400"
            href="https://calendly.com/atknho/acceleratorcapturemvp">CAPTR Labs</a>
        <a class="text-sm font-medium text-gray-200 transition-colors duration-300 px-3 py-2 block transform hover:text-indigo-400"
            href="/contact">Autobot Labs</a>
        <a class="text-sm font-medium text-gray-200 transition-colors duration-300 px-3 py-2 block transform hover:text-indigo-400"
            href="/contact">Teaming Labs</a>
        <a class="text-sm font-medium text-gray-200 transition-colors duration-300 px-3 py-2 block transform hover:text-indigo-400"
            href="/pricing">Pricing</a>
        {#if $auth !== null && $auth.jwt}
            <a class="text-sm font-medium text-gray-200 transition-colors duration-300 px-3 py-2 block transform hover:text-indigo-400"
                href="dashboard">Dashboard</a>
        {:else}
            <a class="text-sm font-medium text-gray-200 transition-colors duration-300 px-3 py-2 block transform hover:text-indigo-400" href="account/login">Login</a>
            <a class="text-sm font-medium text-gray-200 transition-colors duration-300 px-3 py-2 block transform hover:text-indigo-400" href="account/registration">Register</a>
        {/if}
    </div>
</aside>

<style>
    aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}
</style>