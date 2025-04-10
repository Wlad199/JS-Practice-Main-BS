import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { IProduct } from "@/types/products";
import data from '../assets/data.json'
import { nanoid } from "nanoid";

export const useShopStore = defineStore('shopStore', () => {

	const products = ref<IProduct[]>(
		data.map(el => {
			return {
				...el,
				id: nanoid(),
				quantity: 0
			}
		})
	)

	const goodsInCart = computed<IProduct[]>(() => {
		return products.value.filter(good => {
			return good.quantity > 0
		})
	})

	const totalPrice = computed(() => {
		return products.value.reduce((acc, good) => {
			return acc += good.price * good.quantity
		}, 0)
	})

	const isShowPopup = ref<boolean>(false)

	const addGoodToCart = (id: string) => {
		products.value.map(good => {
			if (good.id === id) {
				good.quantity++
			}
		})
	}
	const reduceGoodOfCard = (id: string) => {
		products.value.map(good => {
			if (good.id === id) {
				if (good.quantity > 0) {
					good.quantity--
				}
			}
		})
	}
	const deleteFromCard = (id: string) => {
		return products.value.map(good => {
			if (good.id === id) {
				good.quantity = 0
			}
		})
	}

	return ({
		products,
		goodsInCart,
		totalPrice,
		isShowPopup,

		addGoodToCart,
		reduceGoodOfCard,
		deleteFromCard,
	})
})