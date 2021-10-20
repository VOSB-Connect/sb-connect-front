<script context="module">
    export async function load({ page }) {
        const contractId = page.params.id;
        return {
            props: { contractId }
        };
    }
</script>
<script>
    import { get } from '$lib/utils';
    export let companyId;

    async function getContract() {
        const response = await get(`contracts/${ contractId }`)
        if(response.ok) return response.json();
    }
</script>

{#await getContract() then contract}
    
{/await}