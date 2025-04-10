<template>
	<div class=counter-wrapper>
		<button @click="shopStore.addGoodToCart(id)">
			<Icon class="icon" icon="ic:baseline-plus" />
		</button>
		<span>{{ quantity }}</span>
		<button @click="shopStore.reduceGoodOfCard(id)">
			<Icon class="icon" icon="ic:baseline-minus" />
		</button>
	</div>
</template>

<script setup lang='ts'>
import { Icon } from "@iconify/vue";
import { useShopStore } from "../stores/shopStore";

const shopStore = useShopStore()

defineProps<{
	quantity: number
	id: string
}>()

</script>

<style scoped  lang='scss'>
.counter-wrapper {
	background-color: #c83b0e;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 50px;
	border-radius: 25px;
	gap: 15px;
	padding: 0 15px;
	height: 100%;

	button {
		line-height: 100%;
		height: 25px;
	}

	.icon {
		border: 1px solid #c4c4c4;
		border-radius: 50%;
		height: 25px;
		width: 25px;
		transition: all 0.1s ease 0s;
		color: #fff;

		&:hover {
			border: 1px solid #fff;
		}
	}

	span {
		font-size: 24px;
		color: #fff;
	}
}
</style>