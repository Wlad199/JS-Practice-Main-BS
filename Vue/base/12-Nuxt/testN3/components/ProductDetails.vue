<template>
	<div class="card">
		<div>
			<img :src="product?.image" :alt="product?.title">
		</div>
		<div>
			<h2>{{ product?.title }}</h2>
			<p>{{ product?.price }}</p>
			<p>{{ product?.description }}</p>
		</div>
	</div>
</template>

<script setup lang='ts'>
import type { IProduct } from '~/types/product';


defineProps<{
	product: IProduct | null
}>()
</script>

<style scoped>
.card {
	display: flex;
	align-items: center;
	gap: 15px;

	img {
		max-width: 150px;
	}
}
</style>