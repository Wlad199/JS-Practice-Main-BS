<template>
	<header>
		<nav>
			<ul>
				<li>
					<NuxtLink to="/products">Products</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>

	<div>
		<slot />
	</div>

	<footer>
		<nav>
			<ul>
				<li>
					<NuxtLink to="/">Home</NuxtLink>
					<NuxtLink to="/about">About</NuxtLink>
					<NuxtLink to="/products">Products</NuxtLink>
				</li>
			</ul>
		</nav>
	</footer>
</template>

<script setup lang='ts'></script>

<style scoped lang='scss'></style>