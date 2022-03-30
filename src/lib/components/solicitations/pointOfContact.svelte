<script>
	import { onMount } from 'svelte';
	import ActionCard from '../solicitations/actionCard.svelte'
	import ToastNotice from '$lib/components/toasts/toastNotice.svelte'
	import { auth } from '$lib/shared/user-store';
	import { get, post, del } from '$lib/utils';
	import { faUser } from '@fortawesome/free-solid-svg-icons'
	import Fa from 'svelte-fa'
	import ContactInfo from './contactInfo.svelte'

	export let solicitation;
	console.log(solicitation)
	let toggleSolicitationStatus, showNotice, noticeClass, noticeMessage;	
    
	onMount(async () => {
		const userId = $auth.user.id;
		const response = await get(`users/${userId}`, true);
		if(response.ok){
			const user = await response.json();
			toggleSolicitationStatus = user.solicitations.some(sol => sol.id == solicitation.id)
		}
	})

	async function changeStatus() {
		if(!toggleSolicitationStatus){
			const saveSolicitationResponse = await post("user/saveSolicitation", {
				solicitation: solicitation.id,
				userId: $auth.user.id
			}, true)
			if(saveSolicitationResponse.ok){
				toggleSolicitationStatus = true;
				showNotice = true;
				noticeClass = "bg-green-600"
				noticeMessage = "You saved this Solicitation!"
			}
		}else {
			const deleteSolicitationResponse = await del(`user/removeSolicitation/${$auth.user.id}/${solicitation.id}`, true)
			if (deleteSolicitationResponse.ok) {
				toggleSolicitationStatus = false;
				showNotice = true;
				noticeClass = "bg-blue-600"
				noticeMessage = "You removed this Solicitation!"
			}
		}
    }

</script>

<ToastNotice bind:showNotice { noticeClass }>
	{ noticeMessage }
</ToastNotice>



<div class="bg-white shadow-sm rounded-sm w-100 p-2">
	<div class="flex items-center justify-center md:justify-start space-x-2 font-semibold text-gray-900 leading-8">
		<span class="text-green-500">
			<Fa icon={faUser} size="lg" />
		</span>
		<span class="tracking-wide">Points of Contact</span>
	</div>
	<div class="flex flex-col md:flex-row">
		{#each solicitation.pointOfContact as contact (contact) }
			<ContactInfo {contact} />
		{/each}
	</div>

	<div class="flex justify-around items-center w-full mt-2">
		<ActionCard on:toggleSolicitation={changeStatus} bind:solicitationSelected={toggleSolicitationStatus} />
	</div>
</div>