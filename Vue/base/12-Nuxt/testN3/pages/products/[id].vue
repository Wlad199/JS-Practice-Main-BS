<template>
	<div>
		<ProductDetails :product="product" />
	</div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types/product'
//import ProductDetails from '~/components/ProductDetails.vue'

const { id } = useRoute().params
const url = `https://fakestoreapi.com/products/${id}`

const { data: product } = await useFetch<IProduct | null>(url)

if (!product.value) {
	throw createError({ statusCode: 404, statusMessage: 'Product not found !!!', fatal: true })
}

definePageMeta({
	layout: 'products'
})
</script>

<style scoped lang='scss'></style>