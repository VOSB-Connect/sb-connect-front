<script>
		// your script goes here
		let status = "green"
		export let company;
</script>

<a href={`/companies/${company.id}`} class="hover:bg-blue-100 divide-y flex cursor-pointer">
		<div role="cell" headers="select" class="py-3 px-2 w-12 flex items-center justify-center"><input class="mt-1" type="checkbox" /></div>
		<div class="py-3 px-1 w-24 text-center">{company.cageCode}</div>
		<div class="py-3 px-1 w-full flex-1">
			<div class="relative group w-full">
				<p class="w-full">{company.name}</p>
				<!-- dropdown -->
				<span class="hidden group-hover:block ml-0 mt-9 w-screen max-w-lg absolute top-0 border shadow-lg py-4 px-3 bg-white rounded-md z-50 text-gray-900">
					<article>
						<header>
								<span class="px-3 py-1 uppercase text-xs leading-none rounded-sm bg-red-600 text-white">Open</span>
								<span class="ml-2 text-gray-700">Incident #12534</span>
								<span class="ml-1">(Low)</span>
						</header>
						<section class="mt-5">
							<h1 class="text-sm font-semibold mt-3">Quo laudantium error corporis accusamus unde, labore quidem non officiis.</h1>
							<p class="mt-3">Company description</p>
						</section>
						<footer class="mt-4">
							<p class="text-gray-600">Latest Comments</p>
							<hr class="mt-1" />
							<div class="flex mt-3">
								<p class="font-semibold">Nico Braun</p>
								<p class="ml-auto text-gray-700 text-sm">Yesterday 10:33</p>
							</div>
							<p class="mt-2">Dolore odio error inventore sint et dolorum asperiores exercitationem, quisquam esse.</p>
						</footer>
					</article>
				</span>
				<!-- end dropdown -->
			</div>
		</div>
		<div class="py-3 px-1 w-full flex-1">{company.primaryContact}</div>
		<div class="py-3 px-1 w-full flex-1">{company.primaryNaics}</div>
		<div class="py-3 px-1 w-full flex-1">{company.psc}</div>
</a>
