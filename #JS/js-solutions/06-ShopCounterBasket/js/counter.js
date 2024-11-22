//! https://www.youtube.com/watch?v=pIgyoL5FjgI ====================================================================================================//
//* Счетчик для колличества товаров (Не униварсальный) ====================================================================================================//
/*
const btnPlus = document.querySelector('[data-action = "plus"]')
const btnMinus = document.querySelector('[data-action = "minus"]')
const counter = document.querySelector('[data-counter]')


// Отлавливаем клик на плюс и с помощью .innerText получаем число и увеличиваем на 1
btnPlus.addEventListener('click', function () {
	counter.innerText = ++counter.innerText
})

// Отлавливаем клик на минус и с помощью .innerText получаем число и уменьшаем на 1
btnMinus.addEventListener('click', function () {
	// Запретим уменьшаться значению меньше 1
	// С помощью parseInt сделаем значение не строкой, а часлом (целым!!!)
	if (parseInt(counter.innerText) > 1) {
		counter.innerText = --counter.innerText
	}
})
*/

//! ====================================================================================================//
//* Счетчик для колличества товаров (Униварсальный) ====================================================================================================//
/*
// Вешаем обработчик на весь документ
window.addEventListener('click', function (event) {


	// Проверяем, является ли элемент по которому кликнули кнопкой плюс
	if (event.target.dataset.action === 'plus') {

		// Получаем в константу родителя элемента (обертку счетчика), по которому кликнули
		// (У каждой карточки товара будет свой родитель)
		const counterWrapper = event.target.closest('.counter-wrapper')

		// Получаем в константу счетчик у элемента по которому кликнули
		const counter = counterWrapper.querySelector('[data-counter]')

		// С помощью .innerText получаем число и увеличиваем на 1
		counter.innerText = ++counter.innerText
	}

	// Проверяем, является ли элемент по которому кликнули кнопкой минус
	if (event.target.dataset.action === 'minus') {

		// Получаем в константу родителя элемента (обертку счетчика), по которому кликнули
		// (У каждой карточки товара будет свой родитель)
		const counterWrapper = event.target.closest('.counter-wrapper')

		// Получаем в константу счетчик у элемента по которому кликнули
		const counter = counterWrapper.querySelector('[data-counter]')

		// Запретим уменьшаться значению меньше 1
		// С помощью parseInt сделаем значение не строкой, а часлом (целым!!!)
		if (parseInt(counter.innerText) > 1) {
			// С помощью .innerText получаем число и уменьшаем на 1
			counter.innerText = --counter.innerText
		}
	}
})
*/

//! ====================================================================================================//
//* Счетчик для колличества товаров (Униварсальный ОПТИМИЗИРОВАННЫЙ) ====================================================================================================//

// Вешаем обработчик на весь документ
window.addEventListener('click', function (event) {

	// Создаем переменную counter, чтобы она была видна везде (во всей функции)
	let counter;

	// Проверяем клик строго по кнопкам Плюс илт Минус (чтобы не было в консоли ошибок при клике по другим элементам (у которых нкт данных атрибутов))
	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

		// Получаем в константу родителя элемента (обертку счетчика), по которому кликнули
		// (У каждой карточки товара будет свой родитель)
		const counterWrapper = event.target.closest('.counter-wrapper')

		// Получаем в константу счетчик у элемента по которому кликнули
		counter = counterWrapper.querySelector('[data-counter]')
	}


	// Проверяем, является ли элемент по которому кликнули кнопкой плюс
	if (event.target.dataset.action === 'plus') {

		// С помощью .innerText получаем число и увеличиваем на 1
		counter.innerText = ++counter.innerText
	}


	// Проверяем, является ли элемент по которому кликнули кнопкой минус
	if (event.target.dataset.action === 'minus') {

		// Запретим уменьшаться значению меньше 1
		// С помощью parseInt сделаем значение не строкой, а часлом (целым!!!)
		if (parseInt(counter.innerText) > 1) {
			// С помощью .innerText получаем число и уменьшаем на 1
			counter.innerText = --counter.innerText

			// Удаляем товар из корзины если если его там меньше 1

			// Проверяем есть ли товар в корзине
		} else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
			// Удаляем товар из корзины
			event.target.closest('.cart-item').remove()

			// Отображение статуса корзины Пустая / Полная
			toggleCartStatus()

			// Пересчет общей стоимости товаров в корзине (Нужно добавить сдесь чтобы посчитал сумму пустой корзины!!!)
			CartPriceAndDilivery()
		}
	}

	// Проверяем клик на + или - в нутри корзины
	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {

		// Пересчет общей стоимости товаров в корзине
		CartPriceAndDilivery()
	}

})