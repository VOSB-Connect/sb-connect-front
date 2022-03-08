<script>
	import { onMount } from 'svelte';
	import ActionCard from '../solicitations/actionCard.svelte'
	import { auth } from '$lib/shared/user-store';
	import { get,post } from '$lib/utils';
	import { faUser } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'
	export let contract;
	let didSaveSolicitation;

    const { pointOfContact } = contract;

	function getPointOfContactName(index) {
		if(pointOfContact[index] !== undefined) {
			const [firstName, lastName] = pointOfContact[index].fullName.split(' ');
			return [firstName, lastName]
		}

		return "No Contact"
	}

	const primaryName = getPointOfContactName(0);
	const secondaryName = getPointOfContactName(1);
    
	
	function formatPhoneNo(phone) {
		if(phone) {
			let phoneArr = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
			return `(${phoneArr[1]}) ${phoneArr[2]}-${phoneArr[3]}`;
		}

		return 'N/A'
	}

	onMount(async () => {
		const userId = $auth.user.id;
		const response = await get(`users/${userId}`);
		if(response.ok){
			const user = await response.json();
			didSaveSolicitation = user.solicitations.some(sol => sol.id == contract.id)
		}
	})

	async function saveSolicitation() {
		if(!didSaveSolicitation){
			const saveSolicitationResponse = await post("user/saveSolicitation", {
				solicitation: contract.id,
				userId: $auth.user.id
			})
			if(saveSolicitationResponse.ok){
				didSaveSolicitation = true;
			}
		}
    }

</script>


<div class="bg-white p-3 shadow-sm rounded-sm lg:w-1/2">
	<div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
		<span class="text-green-500">
			<Fa icon={faUser} size="lg" />
		</span>
		<span class="tracking-wide">Point of Contact</span>
	</div>
	<!-- primary POC -->
		<div class="grid md:grid-cols-2 text-sm">
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Primary</div>
			</div>
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">First Name</div>
				<div class="px-4 py-2">{ primaryName[0] }</div>
			</div>
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Last Name</div>
				<div class="px-4 py-2">{ primaryName[1] }</div>
			</div>
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Contact No.</div>
				<div class="px-4 py-2">{ pointOfContact[0].phone }</div>
			</div>
			<!-- <div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Mailing Address</div>
				<div class="px-4 py-2"></div>
			</div> -->
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Email</div>
				<div class="px-4 py-2">
					<a class="text-blue-800" href="mailto:jane@example.com">{ pointOfContact[0].email }</a>
				</div>
			</div>
		</div>
		<!-- Secondary POC -->
		{#if getPointOfContactName(1) !== "No Contact"}
			<div class="grid md:grid-cols-2 text-sm">
				<div class="grid grid-cols-2">
					<div class="px-4 py-2 font-semibold">Secondary</div>
				</div>
				<div class="grid grid-cols-2">
					<div class="px-4 py-2 font-semibold">First Name</div>
					<div class="px-4 py-2">{ secondaryName[0] }</div>
				</div>
				<div class="grid grid-cols-2">
					<div class="px-4 py-2 font-semibold">Last Name</div>
					<div class="px-4 py-2">{ secondaryName[1] }</div>
				</div>
				<div class="grid grid-cols-2">
					<div class="px-4 py-2 font-semibold">Contact No.</div>
					<div class="px-4 py-2">{ pointOfContact[1].phone }</div>
				</div>
		
				<!-- <div class="grid grid-cols-2">
					<div class="px-4 py-2 font-semibold">Mailing Address</div>
					<div class="px-4 py-2"></div>
				</div> -->
				<div class="grid grid-cols-2">
					<div class="px-4 py-2 font-semibold">Email</div>
					<div class="px-4 py-2">
						<a class="text-blue-800" href="mailto:jane@example.com">{ pointOfContact[1].email }</a>
					</div>
				</div>
			</div>
		{/if}
	<div class="flex justify-around items-center w-full mt-2">
		<ActionCard on:addsolicitation={saveSolicitation} bind:solicitationSelected={didSaveSolicitation} />
	</div>
</div>