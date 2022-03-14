<script>
	import { onMount } from 'svelte';
	import ActionCard from '../solicitations/actionCard.svelte'
	import { auth } from '$lib/shared/user-store';
	import { get, post, del } from '$lib/utils';
	import { faUser } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'
	export let contract;
	let toggleSolicitationStatus;

    const { pointOfContact } = contract;
    
	// function formatPhoneNo(phone) {
	// 	if(phone) {
	// 		let phoneArr = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
	// 		return `(${phoneArr[1]}) ${phoneArr[2]}-${phoneArr[3]}`;
	// 	}

	// 	return 'N/A'
	// }

	onMount(async () => {
		const userId = $auth.user.id;
		const response = await get(`users/${userId}`);
		if(response.ok){
			const user = await response.json();
			toggleSolicitationStatus = user.solicitations.some(sol => sol.id == contract.id)
		}
	})

	async function changeStatus() {
		if(!toggleSolicitationStatus){
			const saveSolicitationResponse = await post("user/saveSolicitation", {
				solicitation: contract.id,
				userId: $auth.user.id
			})
			if(saveSolicitationResponse.ok){
				toggleSolicitationStatus = true;
			}
		}else {
			const deleteSolicitationResponse = await del(`user/removeSolicitation/${$auth.user.id}/${contract.id}`)
			if (deleteSolicitationResponse.ok) toggleSolicitationStatus = false;
		}
    }

</script>


<div class="bg-white shadow-sm rounded-sm w-100">
	<div class="flex items-center justify-center md:justify-start space-x-2 font-semibold text-gray-900 leading-8">
		<span class="text-green-500">
			<Fa icon={faUser} size="lg" />
		</span>
		<span class="tracking-wide">Point of Contact</span>
	</div>
	{#if pointOfContact[0].fullName.includes("Questions")}
		<div class="grid md:grid-cols-2 text-sm">     
			<div class="px-4 py-2">{ pointOfContact[0].fullName }</div>
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Email</div>
				<a class="text-blue-800 px-4 py-2 break-all" href="mailto:jane@example.com">{ pointOfContact[0].email }</a>
			</div>
		</div>
	{:else}
	<!-- primary POC -->
		<div class="grid md:grid-cols-2 text-sm">
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Primary</div>
			</div>
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Name</div>
				<div class="px-4 py-2">{ pointOfContact[0].fullName }</div>
			</div>
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Contact No.</div>
				<div class="px-4 py-2">{ pointOfContact[0].phone ? pointOfContact[0].phone : "--"}</div>
			</div>
			<!-- <div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Mailing Address</div>
				<div class="px-4 py-2"></div>
			</div> -->
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Email</div>
				<a class="text-blue-800 px-4 py-2 break-all" href="mailto:jane@example.com">{ pointOfContact[0].email }</a>
			</div>
		</div>
		<!-- Secondary POC -->
		{#if pointOfContact[1] !== undefined}
			<div class="grid md:grid-cols-2 text-sm">
				<div class="grid grid-cols-2">
					<div class="px-4 py-2 font-semibold">Secondary</div>
				</div>
				<div class="grid grid-cols-2">
					<div class="px-4 py-2 font-semibold">Name</div>
					<div class="px-4 py-2">{ pointOfContact[1].fullName }</div>
				</div>
				<div class="grid grid-cols-2">
					<div class="px-4 py-2 font-semibold">Contact No.</div>
					<div class="px-4 py-2">{ pointOfContact[1].phone ? pointOfContact[1].phone : "--"}</div>
				</div>
		
				<!-- <div class="grid grid-cols-2">
					<div class="px-4 py-2 font-semibold">Mailing Address</div>
					<div class="px-4 py-2"></div>
				</div> -->
				<div class="grid grid-cols-2">
					<div class="px-4 py-2 font-semibold">Email</div>
					<a class="text-blue-800 px-4 py-2 break-all" href="mailto:jane@example.com">{ pointOfContact[1].email }</a>
				</div>
			</div>
		{/if}
		{/if}
	<div class="flex justify-around items-center w-full mt-2">
		<ActionCard on:toggleSolicitation={changeStatus} bind:solicitationSelected={toggleSolicitationStatus} />
	</div>
</div>