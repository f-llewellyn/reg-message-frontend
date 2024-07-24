<script lang="ts">
	import Car from "$lib/components/Car/Car.svelte";
</script>

<div class="container px-[30px]">
	<h1 class="mb-4 text-4xl font-bold text-brand">Profile</h1>
	<div class="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
		<Car />
		<Car />
	</div>
</div>
