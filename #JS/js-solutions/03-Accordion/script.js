const buttons = document.querySelectorAll('.accordion')

buttons.forEach(button => {
	button.addEventListener('click', (event) => {
		// Если вкладка уже открыта - закрыть
		if (event.currentTarget.nextElementSibling.classList.contains('_active')) {
			event.currentTarget.nextElementSibling.classList.remove('_active')
		} else {
			// Открыть вкладку по клику и закрыть остальные
			buttons.forEach(button => {
				button.nextElementSibling.classList.remove('_active')
			})
			button.nextElementSibling.classList.toggle('_active')
		}
	})
})