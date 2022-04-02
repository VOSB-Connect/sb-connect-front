<script>
    import {onMount} from 'svelte'
    import { goto } from '$app/navigation'
    import { auth } from '$lib/stores/user-store'
    
    onMount(() => {   
        if(!$auth.jwt){
           goto("/account/login")
        }
    })
</script>

{#if $auth.jwt}
    <slot />
{:else}
    <div class="max-w-xl mx-auto">Loading...</div>
{/if}