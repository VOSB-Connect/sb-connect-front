<script context="module">
    export async function load({page}) {
        const companyId = page.params.id;
        return { props: { id: companyId } };
    }
</script>
<!-- SSR -->

<script>
    export let id;
</script>


<p>Company id: {id}</p>