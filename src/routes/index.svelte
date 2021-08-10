<script>
	import Footer from '$lib/components/footer.svelte'
	import Header from '$lib/components/header.svelte'

	let isOpen = true;

	import DashboardIcons from "$lib/components/dashboard/dashboardIcons.svelte"
    import {faHandshake, faMobileAlt, faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'
</script>

<Header />

<section class="bg-white">
	<div class="max-w-5xl px-6 py-16 mx-auto">
		<div class="items-center md:flex md:space-x-6">
			<div class="md:w-1/2">
				<h3 class="text-3xl font-semibold text-gray-800">Historically Underutilized Business Connections</h3>
				<p class="max-w-md mt-4 text-gray-600">HUB Connection’s mission is to accelerate procurement opportunities by connecting HUBS who are led by women, veterans, and natives by identifying contract opportunities allowing them to submit a quote in a fraction of the time normally needed. Further, we help Protégés, Teaming Partners, and Joint Ventures find acquisitions that are SMART for business.
				</p>
			</div>

			<div class="mt-8 md:mt-0 md:w-1/2">
				<div class="flex justify-end">
					<div class="max-w-md">
						<img alt="placeholder" class="object-cover object-center w-full rounded-md shadow" style="height: 300px;"
							src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYWxsJTIwYnVzaW5lc3N8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- 3 cards section -->
<section class="bg-white">
	<div class="md:flex md:justify-center">
		<h2 class="text-3xl font-semibold text-gray-800 mx-4">Teaming Anytime </h2>
		<!-- <DashboardIcons iconName={faHandshake} />  -->
		<h2 class="text-3xl font-semibold text-gray-800 mx-4">Procurement Anywhere </h2>
		<!-- <DashboardIcons iconName={faMobileAlt} />  -->
		<h2 class="text-3xl font-semibold text-gray-800 mx-4">Cashflow Acceleration</h2> 
		<!-- <DashboardIcons iconName={faMoneyBillWave} /> -->
	</div>
	<div class="max-w-5xl px-6 py-16 mx-auto">

		<!-- Teaming anytime-->
		<div class="items-center md:flex md:space-x-6">
			<div class="md:w-1/2">
				<h3 class="text-3xl font-semibold text-gray-800">Teaming Anytime</h3>
				<p class="max-w-md mt-4 text-gray-600">Use HUB Connect's search features to find potential teaming partners. Save potential partners in a list that you can revisit anytime.
				</p>
			</div>

			<div class="mt-8 md:mt-0 md:w-1/2">
				<div class="flex justify-end">
					<div class="max-w-md">
						<img alt="placeholder" class="object-cover object-center w-full rounded-md shadow" style="height: 200px;"
							src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
					</div>
				</div>
			</div>
		</div>
		<!-- Procure anywhere -->
		<div class="items-center md:flex md:space-x-6">
			<div class="mt-8 md:mt-0 md:w-1/2">
				<div class="flex justify-start">
					<div class="max-w-md">
						<img alt="placeholder" class="object-cover object-center w-full rounded-md shadow" style="height: 200px;"
							src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80">
					</div>
				</div>
			</div>

			<div class="md:w-1/2">
				<h3 class="text-3xl font-semibold text-gray-800">Procurement Anywhere</h3>
				<p class="max-w-md mt-4 text-gray-600">Search for and save government contracts from your phone, your tablet or your computer.
				</p>
			</div>
		</div>
		<!-- Cashflow acceleration -->
		<div class="items-center md:flex md:space-x-6">
			<div class="md:w-1/2">
				<h3 class="text-3xl font-semibold text-gray-800">Cashflow Acceleration</h3>
				<p class="max-w-md mt-4 text-gray-600">HUB Connect streamlines the contract procurement process saving you time, eliminating the need to hire or contract out the procurement process.
				</p>
			</div>

			<div class="mt-8 md:mt-0 md:w-1/2">
				<div class="flex justify-end">
					<div class="max-w-md">
						<img alt="placeholder" class="object-cover object-center w-full rounded-md shadow" style="height: 200px;"
							src="https://images.unsplash.com/photo-1554768804-50c1e2b50a6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<Footer />