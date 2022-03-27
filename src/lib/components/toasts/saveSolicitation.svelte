<script>
	import Fa from "svelte-fa"
	import { faTimes } from '@fortawesome/free-solid-svg-icons'
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'

	export let showToastNotice;
	const options = {
		delay: 250,
		duration: 600,
		y: -100,
		opacity: 0.5,
		easing: quintOut
	}

	$: {
		if (showToastNotice){
			setTimeout(() => showToastNotice = false, 4000)
		}
	}
</script>


{#if showToastNotice}
	<div class="fixed z-10 top-1 right-1" transition:fly={options}>	
		<div class="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
			<div class="w-2 bg-green-600"></div>
			<div class="w-full flex justify-between items-start px-2 py-2">
				<div class="flex flex-col ml-2">
					<p class="text-gray-800">You successfully saved this Solicitation!</p>
				</div>
				<button type="button" on:click={() => showToastNotice = false} class="pl-2 text-gray-500">
					<Fa icon={faTimes} size="lg" />
				</button>
			</div>
		</div>
	</div>
{/if}