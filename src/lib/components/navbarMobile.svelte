<script>
    import { auth } from '$lib/shared/user-store'
    import { faTimes } from '@fortawesome/free-solid-svg-icons'
    import Fa from 'svelte-fa'
    
    export let displayMenu;
</script>

  <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
  <section class="md:hidden bg-purple-900 w-full fixed z-50 {displayMenu ? "translate-x-0" : "-translate-x-full" } ease-in-out duration-500">
    <div class="py-4 px-6">
        <button type="button" class="ml-auto absolute right-10 top-6 text-white"  on:click="{() => displayMenu = !displayMenu}">
            <Fa icon={faTimes} size="lg" />
        </button>
		<div class="flex flex-col w-max">
			<a class="text-sm font-medium text-gray-200 transition-colors duration-300 px-3 py-2 block w-max transform hover:text-indigo-400"
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
    </div>
</section>