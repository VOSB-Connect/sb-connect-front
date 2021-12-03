<script>
	import Fa from 'svelte-fa';
    import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
	export let solicitation;

	let attachments = [1,2,3,4,5,6,7,7,8,8,9];
</script>

<div class="border-b border-t tab">
	<div class="relative">
		<input class="absolute z-10 cursor-pointer opacity-0 h-8 w-8 top-1 right-0" type="checkbox" id="chck1">
		<header class="flex justify-between items-center p-1 cursor-pointer select-none tab-label" for="chck1">
			<p class="text-grey-darkest font-thin text-xl">Attachments <span class="text-gray-400">({attachments.length})</span></p>
			<div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
				<!-- icon by feathericons.com -->
				<svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
					<polyline points="6 9 12 15 18 9">
					</polyline>
				</svg>
			</div>
		</header>
		<div class="tab-content">
			<div class="pb-5 text-grey-darkest">
				<ul class="pl-4 flex flex-wrap">
					{#each  attachments as attachment}
						<li class="pb-2 flex flex-col items-center text-center">
							<a href={solicitation.description} type="button" class="cursor-pointer bg-gray-500 p-2 font-semibold text-white space-x-2 rounded">
								<Fa icon={ faPaperclip } />
							</a>
							<span class="text-xs">Attachment Name</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.tab {
	overflow: hidden;
	}
	.tab-content {
	max-height: 0;
	transition: all 0.5s;
	}
	input:checked + .tab-label .test {
		background-color: #000;
	}
	input:checked + .tab-label .test svg {
		transform: rotate(180deg);
		stroke: #fff;
	}
	input:checked + .tab-label::after {
	transform: rotate(90deg);
	}
	input:checked ~ .tab-content {
	max-height: 100vh;
	}
</style>