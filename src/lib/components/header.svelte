<script>
    import Navbar from "./navbar.svelte";
</script>
<header class="bg-indigo-500">
    <Navbar />
    <section class="flex items-center justify-center" style="height: 500px;">
        <div class="text-center">
            <div class="flex flex-col gap-5 justify-center mt-8">
                <h2 class="mt-6 text-3xl font-bold text-indigo-300 md:text-5xl">Lead | Qualify | Capture</h2>
                <a class="px-8 py-2 text-lg font-medium text-yellow-600 transition-colors duration-300 transform bg-yellow-400 rounded hover:bg-indigo-500"
                    href="/account/registration">Register Today</a>
            </div>
        </div>
    </section>
</header>