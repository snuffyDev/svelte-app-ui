<script lang="ts">

</script>

<nav>
    <div class="nav-left">
        <slot name="left"></slot>
    </div>
    <div class="nav-center">
        <slot name="center"></slot>
    </div>
    {#if $$slots.right}
    <div class="nav-right">
        <slot name="right"></slot>
    </div>
    {/if}
</nav>

<style src="./index.scss" lang="scss">
</style>
