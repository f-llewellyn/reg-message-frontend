<script lang="ts">
	import { onMount } from "svelte";
	import Car from "$lib/assets/ajo5pwf.png";
	import Plate from "./Plate.svelte";
</script>

<div class="rounded-lg drop-shadow-lg bg-light-primary min-w-[250px]">
	<img src={Car} alt="mx5" class="object-cover object-center w-full rounded-t-lg h-[150px]" />
	<div class="flex items-start justify-between w-full p-4">
		<div>
			<div>Model: <span class="font-semibold">MX-5</span></div>
			<div>Make: <span class="font-semibold">Mazda</span></div>
			<div>Year: <span class="font-semibold">2005</span></div>
		</div>
		<Plate reg={"AJ05 PWF"} />
	</div>
</div>
