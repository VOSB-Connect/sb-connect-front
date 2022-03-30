<script>
	export let title;
	export let context;
</script>

<li class="flex flex-col sm:flex-row sm:justify-between py-3">
	<span class="font-bold md:items-start">{title}</span>
	<span class="md:items-start">{context}</span>
</li>