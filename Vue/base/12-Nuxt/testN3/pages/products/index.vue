<template>
	<div class="container">
		<div v-for="product of products" :key="product.id">
			<ProductCard :product="product" />
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'products'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>

<style scoped>
.container {
	max-width: 1200px;
	margin: 0 auto;
}
</style>