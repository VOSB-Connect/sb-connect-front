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
    import { get, post } from '$lib/utils'
    import { auth } from '$lib/shared/user-store'
    import ProfileCard from '$lib/components/profile/profileCard.svelte';
	import AboutCard from '$lib/components/profile/aboutCard.svelte';
	import ExperienceCard from '$lib/components/profile/experienceCard.svelte';
    import ActionCard from '$lib/components/profile/actionCard.svelte'
    export let companyId;
    

    let didSavePartner = false;

    async function getCompany(){
        const response = await get(`entities/${companyId}`);
        if(response.ok) return response.json();
    }

    async function savePartner(e){
        const savePartnerResponse = await post("entities/savePartner",{
            partner: companyId,
            entityId: $auth.user.entity.id
        })
        if(savePartnerResponse.ok){
            didSavePartner = true;
        }
    }

</script>

{#await getCompany() then company}
<div class="w-full h-full overflow-auto p-5 bg-gray-100">
    <div class="grid grid-cols-3 grid-rows-3 gap-4">
        <!-- Profile Card -->
        <ProfileCard business={company}>
            <ActionCard on:addPartner={savePartner} bind:partnerSelected={didSavePartner}  />
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
