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

    const [firstName, lastName] = pointOfContact[0].fullName.split(' ');

	function formatPhoneNo(phone) {
		if(phone) {
			let phoneArr = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
			return `(${phoneArr[1]}) ${phoneArr[2]}-${phoneArr[3]}`;
		}

		return 'N/A'
	}

	onMount(async () => {
		const entityId = $auth.user.entity.id;
		const response = await get(`entities/${entityId}`);
		if(response.ok){
			const entity = await response.json();
			didSaveSolicitation = entity.solicitations.some(sol => sol.id == contract.id)
		}
	})

	async function saveSolicitation() {
		if(!didSaveSolicitation){
			const saveSolicitationResponse = await post("entities/saveSolicitation", {
				solicitation: contract.id,
				entityId: $auth.user.entity.id
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
		<div class="grid md:grid-cols-2 text-sm">
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">First Name</div>
				<div class="px-4 py-2">{ firstName }</div>
			</div>
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Last Name</div>
				<div class="px-4 py-2">{ lastName }</div>
			</div>
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Contact No.</div>
				<div class="px-4 py-2">{ formatPhoneNo(pointOfContact[0].phone) }</div>
			</div>
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Mailing Address</div>
				<div class="px-4 py-2"></div>
			</div>
			<div class="grid grid-cols-2">
				<div class="px-4 py-2 font-semibold">Email.</div>
				<div class="px-4 py-2">
					<a class="text-blue-800" href="mailto:jane@example.com">{ pointOfContact[0].email }</a>
				</div>
			</div>
		</div>
	<div class="flex justify-around items-center w-full mt-2">
		<ActionCard on:addsolicitation={saveSolicitation} bind:solicitationSelected={didSaveSolicitation} />
	</div>
</div>