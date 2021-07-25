<script>
    // import { useForm, Hint, HintGroup, validators, minLength } from "svelte-use-form"
    import Cage from '$lib/components/cage.svelte'
    import Verify from '$lib/components/verify.svelte'

    

    let isCageCodeEmpty = true;
    let userInformation;

</script>

<main>
    {#if isCageCodeEmpty}
        <Cage bind:isCageCodeEmpty={ isCageCodeEmpty } bind:userInformation={ userInformation }/>
    {:else }
        <Verify bind:userInformation={ userInformation } />
    {/if}
</main>




