<script context="module">
    
    export async function load({page}) {
        const companyId = page.params.id;
        return { 
            props: { companyId }
        };
    }
</script>
<!-- SSR -->

<script>
    import { get } from '$lib/utils'
    import ProfileCard from '$lib/components/profile/profileCard.svelte';
	import AboutCard from '$lib/components/profile/aboutCard.svelte';
	import ExperienceCard from '$lib/components/profile/experienceCard.svelte';
    import ActionCard from '$lib/components/profile/actionCard.svelte'
    export let companyId;

    async function getCompany(){
        const response = await get(`entities/${companyId}`);
        if(response.ok) return response.json();
    }
</script>

{#await getCompany() then company}
<div class="w-full h-auto overflow-x-auto overflow-y-auto p-5 bg-gray-100">
    <div class="grid grid-cols-3 grid-rows-2 gap-4">
        <!-- Profile Card -->
        <ProfileCard business={company}>
            <ActionCard />
        </ProfileCard>
        <!-- End of profile card -->
        <!-- About Section -->
        <AboutCard business={company}/>
        <!-- End of about section -->		
        <!-- Experience card -->
        <ExperienceCard business={company}/>
    </div>
</div>
{/await}
