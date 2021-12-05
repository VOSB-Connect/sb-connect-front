<script>
	import { auth } from '$lib/shared/user-store'
	import { onMount } from 'svelte'
	import ProfileCard from '$lib/components/profile/profileCard.svelte';
	import AboutCard from '$lib/components/profile/aboutCard.svelte';
	import ExperienceCard from '$lib/components/profile/experienceCard.svelte';
	import AffiliatesCard from '$lib/components/profile/affiliatesCard.svelte';

	const business = {
		entity: null,
		user: null
	};
	let hasLoaded = false;

	onMount(async () => {
		if($auth !== null){
			business.entity = $auth.user.entity;
			business.user = $auth.user;
			hasLoaded = true;
		}
	})
</script>

{#if hasLoaded }
	<div class="container-full h-full overflow-x-auto p-5 bg-gray-100">
		<div class="grid grid-cols-3 grid-rows-2 gap-4">
			<!-- Profile Card -->
			<ProfileCard business={business.entity}>
				<AffiliatesCard />
			</ProfileCard>
			<!-- End of profile card -->
			<!-- About Section -->
			<AboutCard business={business.entity} />
			<!-- End of about section -->		
			<!-- Experience card -->
			<ExperienceCard business={business.entity} />
		</div>
	</div>
{:else} 
	<p>Loading company profile...</p>
{/if}
