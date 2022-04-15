<script>
	import SavedSolicitation from '$lib/components/solicitations/savedSolicitation.svelte';
	import { auth } from '$lib/stores/user-store'
	import { UserSolicitationStore } from '$lib/stores/solicitation-store';
	import { get } from '$lib/utils'
	import { onMount } from 'svelte'
	
	onMount(async() => {

		const userSolicitationsRequest = await get(`user/getSolicitations/${ $auth.user.id }`, $auth.user.confirmed);
		let data = null;
		console.log($auth.user)
		if(userSolicitationsRequest.ok) data = await userSolicitationsRequest.json()
		UserSolicitationStore.setSolicitations(data)
	})

</script>

{#if $UserSolicitationStore.length > 0}
	{#each $UserSolicitationStore as solicitation (solicitation.id)}
		<SavedSolicitation { solicitation }/>
	{/each}
{:else}
		<p>No Saved Solicitations</p>
{/if}
