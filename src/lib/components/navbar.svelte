<script>
    import { auth } from '$lib/shared/user-store'
    import NavbarMobile from '$lib/components/navbarMobile.svelte';

    let displayMenu = false;
</script>

<nav class="w-full px-6 py-4 md:flex md:justify-between md:items-center fixed z-10 bg-indigo-500">
    <div class="w-full xl:w-9/12 lg:w-10/12 mx-auto flex justify-between items-center">
        <!-- Mobile menu button -->
        <div class="block md:hidden">
            <button type="button" on:click|preventDefault="{() => displayMenu = !displayMenu}" class="z-10 text-white w-10 h-10 flex flex-col items-center justify-center gap-y-1" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <span aria-hidden="true" class="block h-0.5 w-5 bg-current"></span>
                <span aria-hidden="true" class="block h-0.5 w-5 bg-current"></span>
                <span aria-hidden="true" class="block h-0.5 w-5 bg-current"></span>
            </button>
        </div>
        <a class="text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-400" href="/">CAPTR</a>
        
        <!-- Desktop Menu -->
        <div class="flex-row mt-2 space-y-4 hidden md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
            <!-- <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                href="/">Home</a> -->
            <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                href="https://calendly.com/atknho/acceleratorcapturemvp">CAPTR Labs</a>
            <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                href="/contact">Autobot Labs</a>
            <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                href="/contact">Teaming Labs</a>
                <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                href="/pricing">Pricing</a>
            {#if $auth !== null && $auth.jwt}
                <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                href="dashboard">Dashboard</a>
            {:else}
                <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400" href="account/login">Login</a>
                <a class="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400" href="account/registration">Register</a>
            {/if}
        </div>
    </div>
</nav>

<NavbarMobile bind:displayMenu />
