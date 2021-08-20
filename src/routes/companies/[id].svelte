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


<div class="container mx-auto w-3/5">
    <div class="text-center">
        <p class="py-8">Spatialgis, L.L.C id:{id}</p>
    </div>
    <div class="container flex">
        <div class="right">
            <div class="py-2">
                <p>Cage: <span>7RFJ7</span></p>
            </div> 
            <div class="py-2">
                <p>DUNS: <span>080446911</span></p>
            </div> 
            <div class="py-2">
                <p>Company Site: <span><a href="#">www.spatialgisservices.com</a></span></p>
            </div> 
        </div>
        <div class="left ml-auto">
            <div class="py-2">
                <p>Statement of Capability: <span><a href="#">Spatialgis.pdf</a></span></p>
            </div> 
            <div class="py-2">
                <p>Location: <span>San Antonio, TX</span></p>
            </div> 
            <div class="py-2">
                <p>Primary NAICS: <span>541370</span></p>
            </div> 
        </div>
        </div>
</div>

<style>
    div {
        border: 1px solid black;
    }
</style>