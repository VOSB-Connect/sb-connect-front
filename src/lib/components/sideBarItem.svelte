<script>
    import Fa from 'svelte-fa'
    export let namedIcon;
    export let route;
    export let title;
</script>


<li class="mb-2 p-2 text-gray-100 flex flex-row  border-gray-300 hover:text-black hover:bg-gray-300 hover:font-bold rounded rounded-lg">
    <span>
        <Fa icon={namedIcon} size="lg" />
    </span>
    <a href="{route}">
      <span class="ml-2">{title}</span>
    </a>
</li>