<script>
	import Footer from '$lib/components/footer.svelte'
	import Header from '$lib/components/header.svelte'

	let isOpen = true;
</script>

<Header />

<section class="bg-white">
	<div class="max-w-5xl px-6 py-16 mx-auto">
		<div class="items-center md:flex md:space-x-6">
			<div class="md:w-1/2">
				<h3 class="text-2xl font-semibold text-gray-800">Lorem ipsum dolor sit <br> amet, consectetur</h3>
				<p class="max-w-md mt-4 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.</p>
				<a href="#" class="block mt-8 text-indigo-700 underline">Experienced team</a>
			</div>

			<div class="mt-8 md:mt-0 md:w-1/2">
				<div class="flex items-center justify-center">
					<div class="max-w-md">
						<img alt="placeholder" class="object-cover object-center w-full rounded-md shadow" style="height: 500px;"
							src="https://images.unsplash.com/photo-1618346136472-090de27fe8b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80">
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact section -->
<section class="bg-white">
	<div class="max-w-5xl px-6 py-16 mx-auto">
		<div class="px-8 py-12 bg-gray-800 rounded-md md:px-20 md:flex md:items-center md:justify-between">
			<div>
				<h3 class="text-2xl font-semibold text-white">Lorem ipsum dolor sit amet</h3>
				<p class="max-w-md mt-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
					volutpat, viverra magna risus aliquam massa.</p>
			</div>

			<a class="block px-8 py-2 mt-6 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-indigo-600 rounded md:mt-0 hover:bg-indigo-500"
				href="#">Get In Touch</a>
		</div>
	</div>
</section>
<!-- 3 cards section -->
<section class="bg-white">
	<div class="max-w-5xl px-6 py-16 mx-auto">
		<div class="md:flex md:justify-between">
			<h2 class="text-3xl font-semibold text-gray-800">Lorem ipsum dolor sit amet, consectetur <br> adipiscing
				elit, sed do eiusmod</h2>
		</div>

		<div class="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
			<div class="px-6 py-8 overflow-hidden bg-gray-100 rounded-md shadow-md">
				<h2 class="text-xl font-medium text-gray-800">Audio</h2>
				<p class="max-w-md mt-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
					volutpat, viverra magna risus aliquam massa.</p>
			</div>

			<div class="px-6 py-8 overflow-hidden bg-gray-100 rounded-md shadow-md">
				<h2 class="text-xl font-medium text-gray-800">Audio</h2>
				<p class="max-w-md mt-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
					volutpat,
					viverra magna risus aliquam massa.</p>
			</div>

			<div class="px-6 py-8 overflow-hidden bg-gray-100 rounded-md shadow-md">
				<h2 class="text-xl font-medium text-gray-800">Audio</h2>
				<p class="max-w-md mt-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
					volutpat,
					viverra magna risus aliquam massa.</p>
			</div>
		</div>
	</div>
</section>

<Footer />