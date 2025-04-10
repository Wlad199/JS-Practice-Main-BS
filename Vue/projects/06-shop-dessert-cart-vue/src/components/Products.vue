<template>
	<ul class="product-list">
		<li
			v-for="{ name, category, image, price, id, quantity } in shopStore.products"
			class="product-item"
			:key="id">
			<div class="image">
				<img :src="image.desktop" :alt='name' />
				<div className='counter'>
					<CartButton v-if="quantity === 0" :id="id" />
					<CounterButton v-else :quantity="quantity" :id="id" />
				</div>
			</div>
			<div class="category">{{ category }}</div>
			<div class="name">{{ name }}</div>
			<div class="price">${{ price }}</div>
		</li>
	</ul>
</template>

<script setup lang='ts'>
import { useShopStore } from "@/stores/shopStore";
import CounterButton from "./CounterButton.vue";
import CartButton from "./CartButton.vue";

const shopStore = useShopStore()

</script>


<style scoped  lang='scss'>
.product-list {
	display: flex;
	flex-wrap: wrap;
}

.product-item {
	flex: 0 0 33.333%;
	padding: 0 10px;
	margin-bottom: 20px;

	@media (max-width: 767px) {
		flex: 0 0 50%;
	}

	@media (max-width: 450px) {
		flex: 0 0 100%;
		padding: 0;
		margin-bottom: 20px;
	}
}

.image {
	margin-bottom: 30px;
	position: relative;

	img {
		max-width: 100%;
	}
}

.counter {
	position: absolute;
	z-index: 1;
	height: 50px;
	width: 170px;
	border-radius: 25px;
	background-color: #fff;
	bottom: -25px;
	left: 50%;
	transform: translateX(-50%);
	border: 1px solid #837674;
	transition: all 0.3s ease 0s;
	cursor: pointer;
	user-select: none;

	&:hover {
		background-color: #f2f2f2;
	}
}

.category {
	font-size: 16px;
	color: #787878;
	margin-bottom: 5px;
}

.name {
	margin-bottom: 6px;
}

.price {
	color: #c83b0e;
	font-weight: 700;
}
</style>