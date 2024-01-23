<script>
    export let data
</script>
<div>게시글 목록</div>
<ul>
    {#each data.products as product}
    <li>
        <a href="/article/{product.id}">
            {product.title}
        </a>
    </li>
    {/each}
</ul>
