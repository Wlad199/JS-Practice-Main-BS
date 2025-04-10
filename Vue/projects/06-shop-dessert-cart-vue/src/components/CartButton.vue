<template>
	<div
		@click="shopStore.addGoodToCart(id)"
		class="counter-wrapper">
		<Icon class="icon" icon="mdi-light:cart" />
		<span class="cart-text">Add to Cart</span>
	</div>
</template>

<script setup lang='ts'>
import { Icon } from "@iconify/vue";
import { useShopStore } from "../stores/shopStore";

const shopStore = useShopStore()

defineProps<{
	id: string
}>()
</script>

<style scoped  lang='scss'>
.counter-wrapper {
	display: flex;
	gap: 5px;
	justify-content: center;
	align-items: center;
	height: 100%;

	.cart-text {
		text-align: center;
		line-height: 100%;
	}

	.icon {
		font-size: 20px;
		margin-bottom: 5px;
	}
}
</style>