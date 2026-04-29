<template>
	<div class="box">
		<div class="item">
			<img style="max-width: 15%;" :src="product.image" :alt="product.title">
			<p>{{ product.title }}</p>
			<NuxtLink :to="`/products/${product.id}`">
				<button>Show more</button>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang='ts'>
import type { IProduct } from '~/types/product';


defineProps<{
	product: IProduct
}>()
</script>

<style scoped>
.box {
	display: flex;
	gap: 10px;
}

.item {
	flex: 0 0 30%;
	padding: 10px;
}
</style>