<template>
	<div class="confirm-wrapper">
		<div class="title">
			<Icon class="icon" icon="line-md:circle-to-confirm-circle-transition" />
			<h2>Order Confirmed</h2>
		</div>
		<p class="text">We hope you enjoy your food!</p>
		<CartItem
			v-for="good in shopStore.goodsInCart"
			:key="good.id"
			:good="good"
			class="confirm" />
		<div class="total-order">
			<span>Order Total</span>
			<span class="total-price">${{ shopStore.totalPrice }}</span>
		</div>
		<div class="delivery">
			<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
				<path fill="#1EA575"
					d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z" />
				<path fill="#1EA575"
					d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z" />
			</svg>
			This is a <span>carbon-neutral</span> delivery
		</div>
		<button @click="reload" class="button-confirm">
			Start New Order
		</button>
	</div>
</template>

<script setup lang='ts'>
import { Icon } from "@iconify/vue";
import { useShopStore } from "../stores/shopStore";
import CartItem from "./CartItem.vue";

const shopStore = useShopStore()

const reload = () => {
	window.location.reload()
}

</script>

<style scoped  lang='scss'>
.confirm-wrapper {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	z-index: 5;
	border-radius: 15px;
	padding: 20px;
	width: 500px;

	@media (max-width: 550px) {
		width: 300px;
	}
}

.title {
	display: flex;
	align-items: center;
	gap: 15px;
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 15px;

	.icon {
		color: #1ea575;
		font-size: 40px;
	}

	h2 {
		margin: 0;
	}
}

.text {
	opacity: .6;
}

.delivery {
	text-align: center;
	margin-bottom: 20px;

	span {
		font-weight: 700;
	}
}

.total-order {
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 100%;
	margin: 35px 0;
	opacity: 1;

	.total-price {
		font-size: 24px;
		font-weight: 700;
	}

}

.button-confirm {
	height: 50px;
	width: 100%;
	background-color: #c83b0e;
	border-radius: 30px;
	color: #fff;
	font-size: 20px;
	transition: all 0.2s ease 0s;

	&:hover {
		background-color: #992f0b;
	}
}
</style>