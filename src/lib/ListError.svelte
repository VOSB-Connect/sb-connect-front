<script>
    import {faInfo} from '@fortawesome/free-solid-svg-icons'
    import Fa from "svelte-fa"
    export let error
</script>

{#if error}
<div class=" rounded flex items-center gap-x-2 bg-red-700 text-white text-sm font-bold p-3 mt-2" role="alert">
    <Fa icon={faInfo} size="md" /> <p>{error}</p>
</div>   
{/if}