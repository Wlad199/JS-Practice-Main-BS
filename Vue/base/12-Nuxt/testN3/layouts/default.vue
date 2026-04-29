<template>
	<header>
		<nav>
			<ul>
				<li>
					<NuxtLink to="/">Home</NuxtLink>
					<NuxtLink to="/about">About</NuxtLink>
					<NuxtLink to="/products">Products</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>

	<div>
		<slot />
	</div>
</template>

<script setup lang='ts'></script>

<style scoped>
.router-link-active {
	color: red;
}
</style>