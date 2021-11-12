<script>
    import Footer from '$lib/components/footer.svelte'
    import Navbar from '$lib/components/navbar.svelte'
</script>

<style>
    @import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>

<div class="bg-indigo-500">
    <Navbar />
</div>    

<div class="min-w-screen min-h-screen bg-gray-100 px-5 py-5">

    <div class="w-full mx-auto bg-white px-5 py-10 text-gray-600 mb-10">
        
        <div class="text-center max-w-xl mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold mb-5">Pricing</h1>
            <h3 class="text-xl font-medium mb-10">Monthly subscriptions starting at $9.99</h3>
        </div>
        
        <div class="max-w-4xl gap-x-4 mx-auto flex">
            <!-- protege sup -->
            <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                <div class="w-full flex-grow">
                    <h2 class="text-center font-bold uppercase mb-4">Protege SUP</h2>
                    <h3 class="text-center font-bold text-4xl mb-5">$9.99/mo</h3>
                    <ul class="text-sm px-5 mb-8">
                        <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i> Search database of opportunities based on NAICs</li>
                        <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i> New opportunities sent directly to your phone or email</li>
                    </ul>
                </div>
                <div class="w-full">
                <!-- Need link to MoonClerk -->
                    <button class="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Buy Now</button>
                </div>
            </div>
            <!-- teaming axl -->
            <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                <div class="w-full flex-grow">
                    <h2 class="text-center font-bold uppercase mb-4">Teaming AXL</h2>
                    <h3 class="text-center font-bold text-4xl md:text-4xl mb-5">$19.99/mo</h3>
                    <ul class="text-sm px-5 mb-8">
                        <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i> Search database of opportunities based on NAICs</li>
                        <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i> New opportunities sent directly to your phone or email</li>
                        <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i> Search & contact potential teaming partners</li>
                        <!-- <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i> Adipisicing</li>
                        <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i> Elit repellat</li> -->
                    </ul>                    
                </div>
                <div class="w-full">
                    <!-- Need link to MoonClerk -->
                    <button class="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Buy Now</button>
                </div>
            </div>
            <!-- smb leader gps -->
            <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                <div class="w-full flex-grow">
                    <h2 class="text-center font-bold uppercase mb-4">SMB Leader GPS</h2>
                    <!-- Check pricing at this level -->
                    <h3 class="text-center font-bold text-4xl mb-5">$29.99/mo</h3>
                    <ul class="text-sm px-5 mb-8">
                        <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i> Search database of opportunities based on NAICs</li>
                        <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i> New opportunities sent directly to your phone or email</li>
                        <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i> Search & contact potential teaming partners</li>
                        <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i> Access to SMB advisors via messaging & video chat</li>
                        <!-- <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i> Much more...</li> -->
                    </ul>
                    
                </div>
                <div class="w-full">
        <!-- Need link to MoonClerk -->
                    <button class="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Buy Now</button>
                </div>
            </div>
        </div>
        <div class="text-center max-w-xl mx-auto mt-4">
            <p class="text-s leading-tight">*Don't see the tier that fits your needs? Please <a href="/contact"> Contact Us</a> for a custom quote.</p>
        </div>
    </div>
</div>

<Footer />

<!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES -->
<!-- <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" alt="scott windon"/>
        </a>
    </div>
</div> -->