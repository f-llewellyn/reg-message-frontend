<script>
	import AppBar from "$lib/components/appBar/AppBar.svelte";
	import "../app.css";
</script>

<div class="relative min-h-[100dvh] pt-8 pb-[86px]">
	<div class="">
		<slot />
	</div>
	<div class="fixed bottom-0 w-full">
		<AppBar />
	</div>
</div>
