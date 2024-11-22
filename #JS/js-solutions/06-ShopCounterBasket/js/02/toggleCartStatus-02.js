
function toggleCartStatus() {
	const cartWrapper = document.querySelector('.cart-wrapper')
	const cartEmptyBadge = document.querySelector('[data-cart-empty]')
	const orderForm = document.querySelector('#order-form')
	if (cartWrapper.children.length > 0) {
		cartEmptyBadge.hidden = true
		orderForm.style.display = 'block'
	} else {
		cartEmptyBadge.hidden = false
		orderForm.style.display = 'none'
	}
}