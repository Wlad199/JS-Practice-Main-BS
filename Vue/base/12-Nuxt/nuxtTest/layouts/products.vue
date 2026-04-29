<template>
	<nav>
		<NuxtLink to="/">Home</NuxtLink>
		<slot />
		<footer>
			<nav>
				<NuxtLink to="/">Home</NuxtLink>
				<NuxtLink to="/about">About</NuxtLink>
				<NuxtLink to="/products">Products</NuxtLink>
			</nav>
		</footer>
	</nav>
</template>

<script setup lang='ts'></script>

<style scoped lang='scss'></style>