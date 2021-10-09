<script>
	import { auth } from '$lib/shared/user-store'
	import { onMount } from 'svelte'
	import ProfileCard from '$lib/components/profile/profileCard.svelte';
	import AboutCard from '$lib/components/profile/aboutCard.svelte';
	import AffiliatesCard from '$lib/components/profile/affiliatesCard.svelte';
	import ExperienceCard from '$lib/components/profile/experienceCard.svelte';

	const business = {
		entity: null,
		user: null
	};
	onMount(async () => {
		if($auth !== null){
			business.entity = $auth.user.entity;
			business.user = $auth.user;
			console.log(business)
		}
	})
</script>


<div class="container-full h-full overflow-x-auto p-5 bg-gray-100">
	<div class="grid grid-cols-4 grid-rows-2 gap-4">
		<!-- Profile Card -->
		<ProfileCard />
		<!-- End of profile card -->
		<!-- About Section -->
		<AboutCard />
		<!-- End of about section -->
		<!-- Affiliates card -->
		<AffiliatesCard />
		<!-- End of friends card -->			
		<!-- Experience card -->
		<ExperienceCard />
	</div>
</div>
