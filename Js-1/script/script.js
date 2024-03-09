//! Замена цисла по нажатию на кнопку =================//

let navigation = document.querySelector('.navigation')
let number = document.querySelector('.number')

document.addEventListener('click', function (event) {
	if (event.target.closest('.button')) {
		number.innerText = event.target.dataset.num
	}
})

//! textarea counter ====================================================================================================//

const textItem = document.querySelector('.textarea')
const textItemLimit = textItem.getAttribute('maxlength')
const counter = document.querySelector('.counter span')

// Выводим кол-во символов
counter.innerHTML = textItemLimit

// Меняем Counter при вводе
textItem.addEventListener('keyup', textSetCounter)

function textSetCounter() {
	const textCounterResult = textItemLimit - textItem.value.length
	counter.innerHTML = textCounterResult
}

// Добавляем счет символов при зажатии клавиши (event.repeat)
textItem.addEventListener('keydown', function (event) {
	if (event.repeat) {
		textSetCounter()
	}
})

//! Выпадающее меню ====================================================================================================//

const menu = document.querySelector('.menu')

document.addEventListener('click', activeMenu)

function activeMenu(event) {
	if (event.target.closest('.menu-button')) {
		menu.classList.toggle('_active')
	}

	// Закрыть при клике вне меню
	if (!event.target.closest('.menu')) {
		menu.classList.remove('_active')
	}
}

// Закрытие по ESC
document.addEventListener('keyup', function (event) {
	if (event.code === 'Escape') {
		menu.classList.remove('_active')
	}
})