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


<div class="container mx-auto w-6/12">
    <div class="text-center">
        <p class="py-8">Spatialgis, L.L.C id:{id}</p>
    </div>
    <div class="container mx-auto flex">
        <div class="right">
            <div>
                <p>Cage: <span></span></p>
            </div> 
            <div>
                <p>DUNS: <span></span></p>
            </div> 
            <div>
                <p>Company Site: <span></span></p>
            </div> 
        </div>
        <div class="left">
            <div>
                <p>Statement of Capability: <span></span></p>
            </div> 
            <div>
                <p>Location: <span></span></p>
            </div> 
            <div>
                <p>Primary NAICS: <span></span></p>
            </div> 
        </div>
        </div>
</div>

<style>
    div {
        border: 1px solid black;
    }
</style>