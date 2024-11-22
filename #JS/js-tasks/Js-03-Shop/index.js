//* Tabs =================//

//const goods = document.querySelector('[data-tab-id = "goods"]')
//const cart = document.querySelector('[data-tab-id = "cart"]')

//goods.addEventListener('click', function clickHandler(event) {

//	if (event.target.dataset.tabId === 'goods')
//		goods.classList.add('active')
//	cart.classList.remove('active')
//})

//cart.addEventListener('click', function clickHandler(event) {

//	if (event.target.dataset.tabId === 'cart')
//		goods.classList.remove('active')
//	cart.classList.add('active')
//})

//? Tabs (Universal) =================//
/*
const buttonTabs = document.querySelector('.tabs')


if (buttonTabs) {
	buttonTabs.addEventListener('click', function (event) {

		const tabContent = document.querySelectorAll('[data-show-tab]')

		buttonTabs.querySelectorAll('button').forEach(function (i) {
			i.classList.remove('active')
		})

		if (event.target.closest('button')) {
			event.target.classList.add('active')
			if (event.target.dataset.tabId === 'goods') {

				document.querySelector('.cart-items').hidden = true
			}
		}
	})
}
*/

//? Original =========================//

const tabs = document.querySelectorAll('button.tab')
let activeTabId = 'cart';
let goodsInCart = [];

// Счетчик товара в корзине (выводится через псевдоэлемент attr в css)
const tabWithCounter = document.querySelector('button[data-goods-count]')

// Добавляем изначальный класс
const initialTab = getActiveTab()
initialTab.classList.add('active')

// Показываем контент по клику на таб
renderTabContentId(activeTabId)

// Навешиваем события по клику
addClickListeners(tabs, clickHandler)

function clickHandler(event) {
	// Проверяем какой таб выбран, убраем класс, добавляем выбраному, получаем активный в конст
	const activeTab = getActiveTab()
	activeTab.classList.remove('active')
	event.target.classList.toggle('active')
	activeTabId = event.target.dataset.tabId;

	// Удаляем активный контент
	removeActiveTabContent()

	// Показываем выбранный контент
	renderTabContentId(activeTabId)
}

function getActiveTab() {
	return document.querySelector(`button[data-tab-id="${activeTabId}"]`)
}

function removeActiveTabContent() {
	const activeContent = document.querySelector(
		`[data-active-tab-content='true']`
	)
	activeContent.remove()
}

//todo renderGoods =================//

function renderGoods() {

	// Создаем новый див и добав. ему аттрибуты и классы
	const div = document.createElement('div');
	div.dataset.activeTabContent = 'true';
	div.className = 'product-items';

	// Проходимся циклом по массиву и получаем в константу product каждый товар
	for (let i = 0; i < GOODS.length; i++) {
		const product = createProduct(GOODS[i]);

		const price = product.price === null
			? '<p>Товар закончился</p>'
			: `<p class="price">₽ ${product.price}</p>`;

		// Создаем див с товаром данными из масива
		const productBlock = document.createElement('div');
		productBlock.className = 'product-item';
		productBlock.innerHTML = `
			<img src="${product.imgSrc}">
			<div class="product-list">
				<h3>${product.name}</h3>
				${price}
			</div>
		`;

		if (product.price !== null) {
			const clickHander = addInCartHandler(product)

			// Создаем кнопку
			const button = document.createElement('button');
			button.className = 'button';
			button.textContent = 'В корзину';
			// По клику  помещаем товар в Cart
			button.addEventListener('click', clickHander);

			productBlock.querySelector('.product-list').append(button)
		}

		// Вставляем кнопку
		div.append(productBlock)
	}

	return div;
}

//todo renderCart =================//

function renderCart() {

	const container = document.createElement('div');
	container.dataset.activeTabContent = 'true';
	container.className = 'cart-items';

	for (let i = 0; i < goodsInCart.length; i++) {
		const product = goodsInCart[i]

		// Создаем карточку товара в корзине
		const cartItem = document.createElement('div');
		cartItem.dataset.elementId = product.id
		cartItem.className = 'cart-item';
		cartItem.innerHTML = `
			<div class="cart-item-title">${product.name}</div>
			<div class="cart-item-count">${product.count} шт.</div>
			<div class="cart-item-price">₽ ${product.price}</div>
		`;

		const clickHander = removeInCartHandler(product.id);

		// Создаем кнопку удаления товара из корзины
		const button = document.createElement('button');
		button.className = 'cart-item-delete';
		button.textContent = 'x';
		button.addEventListener('click', clickHander);

		cartItem.append(button);

		container.append(cartItem);
	}

	return container;
}

//todo Вставляем HTML исходя из активной табы

function renderTabContentId(tabId) {
	const tabsContainer = document.querySelector('.tabs')

	let html = null;

	if (tabId === 'goods') {
		html = renderGoods()
	} else {
		html = renderCart()
	}
	if (html !== null) {
		tabsContainer.after(html)
	}
}

//? Товаты в корзине =================//

// При нажатии по кнопке добав. товар в корзину и увелич. счетчик
function addInCartHandler(product) {
	return () => {
		let hasProduct = false;
		let index = null;
		let count = 1;

		for (let i = 0; i < goodsInCart.length; i++) {
			const productInCart = goodsInCart[i]

			// Если товар уже есть в корзине
			if (product.id === productInCart.id) {
				hasProduct = true;
				index = i;
				count = productInCart.count;
			}
		}

		// Если товар уже есть в корзине
		if (hasProduct) {
			goodsInCart[index].count = count + 1;
		} else {
			const productWithCount = product;
			productWithCount.count = count;
			goodsInCart.push(productWithCount);
		}

		let fullSize = 0;

		for (let i = 0; i < goodsInCart.length; i++) {
			const productInCart = goodsInCart[i]
			fullSize += productInCart.count;
		}

		tabWithCounter.dataset.goodsCount = fullSize;
	}
}

// При нажатии по кнопке удаляет товар из корзины
function removeInCartHandler(productId) {
	return () => {
		const newGoodsInCart = [];

		for (i = 0; i < goodsInCart.length; i++) {
			const product = goodsInCart[i];

			if (productId === product.id) {
				if (product.count > 1) {
					newGoodsInCart.push({
						id: product.id,
						name: product.name,
						price: product.price,
						imgSrc: product.imgSrc,
						count: product.count - 1,
					})
				}
				updateCartItem(product.id, product.count);
			} else {
				newGoodsInCart.push(product);
			}
		}

		goodsInCart = newGoodsInCart;

		let fullSize = 0;

		for (let i = 0; i < goodsInCart.length; i++) {
			const productInCart = goodsInCart[i]
			fullSize += productInCart.count;
		}

		tabWithCounter.dataset.goodsCount = fullSize;
	}
}

// Общая функция для отслеживания кликов
function addClickListeners(elements, callback) {
	for (i = 0; i < elements.length; i++) {
		const element = elements[i]
		element.addEventListener('click', callback)
	}
}

// Вывод контента или сообщений в случае отсутствия контента
function createProduct(product) {
	return {
		id: product.id,
		name: product.name ? product.name : 'Имя неизвестно',
		price: product.price ? product.price : null,
		imgSrc: product.imgSrc ? product.imgSrc : 'goods/defalt.png',
	}
}

function updateCartItem(id, count) {
	const cartItem = document.querySelector(`[data-element-id = '${id}']`)

	if (count > 1) {
		const countElement = cartItem.querySelector('.cart-item-count');
		countElement.textContent = `${count - 1} шт.`;
	} else {
		cartItem.remove();
	}

	console.log(cartItem)
}