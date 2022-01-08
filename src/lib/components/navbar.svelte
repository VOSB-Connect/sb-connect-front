<script>
    import { auth } from '$lib/shared/user-store'

    let close = true;
</script>

<nav class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
    <div class="flex items-center justify-between">
         <!-- Mobile menu button -->
         <div class="flex md:hidden">
            <button type="button" on:click="{() => close = !close}" class="text-grey-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            aria-controls="mobile-menu" aria-expanded="false">
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                    <path fill-rule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                    </path>
                </svg>
            </button>
        </div>

        <a class="text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-400"
            href="/">CAPTR</a>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <div class="md:hidden absolute" class:close id="mobile-menu">
        <div class="px-2 pt-4 pb-3 space-y-1">
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
                <a class="px-4 py-1 text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform border rounded hover:bg-indigo-400"
                    href="account/registration">Register</a>
            {/if}
        </div>
    </div>

    <!-- Desktop Menu -->
    <div class="flex-col mt-2 space-y-4 hidden md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
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
            <a class="px-4 py-1 text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform border rounded hover:bg-indigo-400"
                href="account/registration">Register</a>
        {/if}
    </div>
</nav>


<style>
    .close {
        display: none;
    }
</style>