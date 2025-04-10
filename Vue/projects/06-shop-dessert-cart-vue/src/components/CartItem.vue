<template>
	<div class="cart-item">
		<div class="wrapper">
			<div class="info">
				<div class="name">{{ good.name }}</div>
				<span class="quantity">{{ good.quantity }}</span>
				<span class="price">${{ good.price }}</span>
				<span class="total-price">${{ good.price * good.quantity }}</span>
			</div>

			<div
				@click="shopStore.deleteFromCard(good.id)"
				class="close">
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 10 10">
					<path fill="#CAAFA7"
						d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
				</svg>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import { IProduct } from "../types/products";
import { useShopStore } from "../stores/shopStore";

const shopStore = useShopStore()


defineProps<{
	good: IProduct
}>()

</script>

<style scoped  lang='scss'>
.cart-item {
	margin: 20px 0;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 5%;
		width: 90%;
		height: 1px;
		background-color: #e4c1a7;
	}
}

.wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.info {}

.name {
	font-size: 16px;
	margin-bottom: 10px;
}

.quantity {
	color: #c83b0e;
	font-weight: 700;
	padding-right: 15px;
}

.price {
	color: #a6a6a6;
	padding-right: 15px;
}

.total-price {
	color: #4b4b4b;
}

.close {
	border: 1px solid #caafa7;
	border-radius: 50%;
	line-height: 0;
	height: 25px;
	width: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease 0s;
	cursor: pointer;

	path {
		transition: all 0.2s ease 0s;
	}

	&:hover {
		border: 1px solid #9f6c60;

		path {
			fill: #9f6c60
		}
	}
}

.confirm .close {
	display: none;
}
</style>