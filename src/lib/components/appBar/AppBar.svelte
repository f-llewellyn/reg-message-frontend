<script lang="ts">
	import IconSearch from "~icons/fa6-solid/magnifying-glass";
	import IconMessage from "~icons/fa6-solid/comment-dots";
	import IconUser from "~icons/fa6-solid/user";
</script>

<nav
	class="w-full px-[30px] py-4 pb-2 border-t-4 rounded-t-xl bg-light-primary text-light-text border-brand h-[70px]"
>
	<div class="container grid w-full grid-cols-3 gap-4">
		<div class="flex flex-col items-center text-center">
			<IconMessage />
			<span>Messages</span>
		</div>
		<div class="flex flex-col items-center text-center">
			<IconSearch />
			<span>Search</span>
		</div>
		<div class="flex flex-col items-center text-center text-brand">
			<IconUser />
			<span>Profile</span>
		</div>
	</div>
</nav>
