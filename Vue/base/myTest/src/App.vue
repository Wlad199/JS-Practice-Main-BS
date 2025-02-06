<template>
	<div class="wrapper">
		<header>
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</header>
		<RouterView />
	</div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style></style>