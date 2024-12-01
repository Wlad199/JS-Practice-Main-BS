function calcCartPrice() {
	const cartItems = document.querySelectorAll('.cart-item')
	const totalPriceEl = document.querySelector('.total-price')
	const deliveryCost = document.querySelector('.delivery-cost')
	let totalPrice = 0
	cartItems.forEach(cartItem => {
		const amountEl = cartItem.querySelector('[data-counter]')
		const priceEl = cartItem.querySelector('.price__currency')
		const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
		totalPrice += currentPrice
	})
	totalPriceEl.innerText = totalPrice
	if (totalPrice >= 600) {
		deliveryCost.parentElement.style.display = 'block'
		deliveryCost.style.color = 'green'
		deliveryCost.innerText = 'бесплатно'
	} else if (totalPrice > 0) {
		deliveryCost.parentElement.style.display = 'block'
		deliveryCost.innerText = '250 ₽'
		deliveryCost.style.color = 'red'
	} else {
		deliveryCost.parentElement.style.display = 'none'
	}
}