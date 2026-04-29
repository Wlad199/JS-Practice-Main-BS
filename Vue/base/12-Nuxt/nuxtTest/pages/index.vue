<template>
	<div>
		<div v-if="pending">LOADING...</div>
		<div v-else-if="error" class="error">{{ error.message }}</div>
		<div v-else>
			<button v-for="category in productsInfo?.categories">{{ category }}</button>
			<button @click="() => refresh()">refresh</button>
			<button @click="() => navigateTo('/about')">About</button>
			<ul>
				<li v-for="{ id, title, image } in productsInfo?.products" :key="id">
					<img :src="image" style="max-width: 25px;">
					<span>{{ title }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang='ts'>
const PRODUCT_URL = 'https://fakestoreapi.com/products'
const CATEGORIES_URL = 'https://fakestoreapi.com/products/categories'

const { data: productsInfo, pending, error, refresh } = await useAsyncData('productsInfo',
	async () => {
		const [products, categories] = await Promise.all([
			$fetch(PRODUCT_URL),
			$fetch(CATEGORIES_URL)
		])
		return {
			products,
			categories
		}
	}
)

const nuxtApp = useNuxtApp()

console.log(nuxtApp)

</script>

<style scoped lang='scss'></style>