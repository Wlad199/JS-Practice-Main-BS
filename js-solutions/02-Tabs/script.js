const navButtons = document.querySelectorAll('.tabs__btn')
const tabsItems = document.querySelectorAll('.tabs__item')


navButtons.forEach(item => {

	item.addEventListener('click', (event) => {
		// Если вкладка уже активна - ничего не делаем
		if (!item.classList.contains('_active')) {

			// Убрать класс _active у всех вкладок
			navButtons.forEach(item => {
				item.classList.remove('_active')
			})

			// Убрать класс _active у всех табов
			tabsItems.forEach(item => {
				item.classList.remove('_active')
			})

			// Добавить класс _active активной вкладке
			item.classList.add('_active')

			// Добавить класс _active активному табу
			document.getElementById(event.target.dataset.tab)
				.classList.add('_active')
		}
	})
})

// Иммитируем клик по веладке, чтобы не писать класс _active в html
document.querySelector('.tabs__btn:nth-child(3)').click()