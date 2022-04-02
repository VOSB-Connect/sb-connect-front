<script>
	import { auth } from '$lib/stores/user-store'
	import { onMount } from 'svelte'
	import ProfileCard from '$lib/components/profile/profileCard.svelte';
	import AboutCard from '$lib/components/profile/aboutCard.svelte';
	import ExperienceCard from '$lib/components/profile/experienceCard.svelte';
	import AffiliatesCard from '$lib/components/profile/affiliatesCard.svelte';

	const business = {
		organization: null,
		user: null
	};
	let hasLoaded = false;

	onMount(async () => {
		if($auth !== null){
			business.organization = $auth.user.organization;
			business.user = $auth.user;
			hasLoaded = true;
		}
	})
</script>

{#if hasLoaded }
	<div class="w-full h-full overflow-x-auto md:p-5">
		<div class="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-2  gap-y-2 md:gap-4">
			<!-- Profile Card -->
			<ProfileCard business={ business.organization }></ProfileCard>
	
			
			<!-- End of profile card -->
			<!-- About Section -->
			<AboutCard business={ business.organization } />
			<!-- End of about section -->		
			<!-- Experience card -->
			<ExperienceCard business={ business.organization } />
		</div>
	</div>
{:else} 
	<p>Loading company profile...</p>
{/if}
