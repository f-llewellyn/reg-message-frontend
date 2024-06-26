<script>
  import AppBar from "$lib/components/appBar/AppBar.svelte";
import "../app.css";
  export const ssr = false;
</script>

<div>
    <slot />
    <AppBar />
</div>