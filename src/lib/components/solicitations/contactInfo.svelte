<script>
	import Fa from 'svelte-fa'
	import { faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
	export let contact
</script>



<div class="flex flex-col text-sm w-max gap-y-1">
	<div class="py-2 font-semibold">{contact?.type?.startsWith("p") ? "Primary" : "Secondary"} Contact</div>
	<div class="flex justify-start">
		<span class="font-bold md:items-start"><Fa icon={faUser} size="lg" /></span>
		<span class="md:items-start pl-2">{contact.fullName}</span>
	</div>
	{#if contact?.phone?.length > 0}
		<div class="flex justify-start">
			<span class="font-bold md:items-start"><Fa icon={faPhone} size="lg" /></span>
			<span class="md:items-start pl-2">{contact?.phone}</span>
		</div>
	{/if}
	<div class="flex justify-start">
		<span class="font-bold md:items-start"><Fa icon={faEnvelope} size="lg" /></span>
		<span class="md:items-start">
			<a class="text-blue-800 px-4 py-2 break-all" href="mailto:{contact?.email}">{ contact?.email }</a>
		</span>
	</div>	
</div>