<template>
	<h1>Products</h1>

	<ul>
		<li v-for="product in products" :key="product.id">
			<NuxtLink :to="`/products/${product.id}`">{{ product.name }}</NuxtLink>
		</li>
	</ul>
	<p>{{ useState('username') }}</p>
	<p>{{ useState('myCount') }}</p>
</template>

<script setup lang='ts'>

const products = ref([
	{ id: 1, name: 'notebook' },
	{ id: 2, name: 'smartphone' },
	{ id: 3, name: 'processors' },
])

definePageMeta({
	layout: 'products'
})

</script>

<style scoped lang='scss'></style>