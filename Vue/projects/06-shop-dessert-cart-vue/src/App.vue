<template>
	<div class="wrapper">
		<div class="products">
			<Products />
		</div>

		<div class="cart">
			<Cart />
		</div>

		<div v-if="shopStore.isShowPopup" class="popup">
			<Confirm />
		</div>
	</div>
</template>

<script setup lang="ts">
import Products from "./components/Products.vue";
import Cart from "./components/Cart.vue";
import Confirm from "./components/Confirm.vue";
import { useShopStore } from "./stores/shopStore";

const shopStore = useShopStore()


</script>

<style scoped></style>

