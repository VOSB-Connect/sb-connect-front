<script>
	import SavedSolicitation from '$lib/components/solicitations/savedSolicitation.svelte';
	import { auth } from '$lib/stores/user-store'
	import { UserSolicitationStore } from '$lib/stores/solicitation-store';
	import { get, del } from '$lib/utils'
	import { setContext } from 'svelte';
	import { onMount } from 'svelte'
	
	onMount(async() => {
			const userSolicitationsRequest = await get(`user/getSolicitations/${ $auth.user.id }`, $auth.user.confirmed);
			let data = null;
			
			if(userSolicitationsRequest.ok) data = await userSolicitationsRequest.json()
			UserSolicitationStore.setSolicitations(data)
	})

	setContext("cardAction", removeSolicitation)

	async function removeSolicitation(solicitationId){
		const deleteSolicitationResponse = await del(`user/removeSolicitation/${$auth.user.id}/${solicitationId}`, true)
		let data = null;
		if (deleteSolicitationResponse.ok) {
			data = await deleteSolicitationResponse.json();
			console.log(data.solicitations)
			UserSolicitationStore.setSolicitations(data.solicitations);
		}
	}
	

</script>

{#if $UserSolicitationStore.length > 0}
	{#each $UserSolicitationStore as solicitation (solicitation.id)}
		<SavedSolicitation { solicitation }/>
	{/each}
{:else}
		<p>No Saved Solicitations</p>
{/if}
