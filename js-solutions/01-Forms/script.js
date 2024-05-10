const mainForm = document.forms[0]
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

//?======= Управление плейсхолдером===========
const elementsWithPlaceholder = document.querySelectorAll('[placeholder]')

elementsWithPlaceholder.forEach((i) => {
	let inputPlaceholder = i.placeholder
	// Прятать плейснолдер при фокусе
	i.addEventListener('focus', () => {
		i.placeholder = ''
	})
	// Возвращать плейснолдер при потере фокуса
	i.addEventListener('blur', () => {
		i.placeholder = inputPlaceholder
	})
})

//?=======Колличество символов в сообщении================
const txtItem = document.getElementById('formMessage')
const txtItemLimit = txtItem.getAttribute('maxlength')
const txtCounter = document.querySelector('.textarea-counter span')
txtCounter.innerHTML = txtItemLimit

// Запускать ф-ю при нажатии
txtItem.addEventListener('input', txtSetCounter)

// Альтернативный способ =================//
// Запускать ф-ю при нажатии
//txtItem.addEventListener('keyup', txtSetCounter)

// Запускать ф-ю при зажании
//txtItem.addEventListener('keydown', (event) => {
//	if (event.repeat) {
//		txtSetCounter()
//	}
//})
//=================//

// Высчитываем оставшееся кол - во символов
function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length
	txtCounter.innerHTML = txtCounterResult
}


//? Запретить вставку(копирование, вырезание) =================//
txtItem.addEventListener('paste', (event) => {
	event.preventDefault()
	alert('Вставка запрещена!')
})


//! Отправка формы ====================================================================================================//
//? Отправка формы =================//
//mainForm.addEventListener('submit', (event) => {
//	// Проверяем на заполненость текстэреа
//	if (!txtItem.value) {
//		alert('Не заполнеры все поля')
//		event.preventDefault()
//	} else {
//		alert('Форма отправлена')
//	}
//})

////? Отправка формы вручную =================//
//// Отправка при потере фокуса
//txtItem.addEventListener('blur', (event) => {
//	mainForm.submit()
//	alert('Форма отправлена')
//})

//! Проверка корректности email ====================================================================================================//
////? Валидация red/green border =================//
const inputPass = mainForm.email

function onInput() {
	if (isEmailValid(inputPass.value)) {
		inputPass.classList.add('correct')
	} else {
		inputPass.classList.add('error')
	}
}

// сравнивать введенное пользователем значение с регулярным выражением
function isEmailValid(value) {
	return EMAIL_REGEXP.test(value)
}
inputPass.addEventListener('input', onInput)


//? Валидация при отправке с выводом сообщения =================//
const inputMail = mainForm.email

// Вставлять текст с ошибкой при неправильном email
mainForm.addEventListener('submit', (event) => {
	if (!(emailTest(inputMail))) {
		inputMail.parentElement.insertAdjacentHTML(
			'beforeend',
			`<div class='form-error'>
				Введите email
			</div>`
		)
		event.preventDefault()
	}
})

// Убрать ошибку при фокусе
inputMail.addEventListener('focus', (event) => {
	if (inputMail.nextElementSibling) {
		inputMail.nextElementSibling.remove()
	}
})

// сравнивать введенное пользователем значение с регулярным выражением
function emailTest(input) {
	return EMAIL_REGEXP.test(input.value)
}


//! Показ превью картинки при выборе файла ==============================//
const formFile = mainForm.image

formFile.addEventListener('change', (e) => {
	let selectedFile = formFile.files[0]

	// Получить URL изображения
	let fileUrl = URL.createObjectURL(selectedFile)

	// Вывести превью
	formFile.parentElement.insertAdjacentHTML(
		'beforeend',
		`		<div class='form-image'>
			<img alt='' title='${selectedFile.name}' src='${fileUrl}'>
		</div>`
	)
})