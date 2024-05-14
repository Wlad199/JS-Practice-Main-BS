import './index.html';
import './index.scss';
//!  ====================================================================================================//

const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
	const select = dropdown.querySelector('.select')
	const selected = dropdown.querySelector('.selected')
	const options = dropdown.querySelectorAll('.menu li')

	select.addEventListener('click', () => {
		select.classList.toggle('select-clicked')
	})

	options.forEach(option => {
		option.addEventListener('click', () => {
			selected.innerHTML = option.innerHTML
			select.classList.remove('select-clicked')

			options.forEach(option => {
				option.classList.remove('active')
			})

			option.classList.add('active')
		})
	})

	// закрытие по клику на внешней зоне
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.dropdown')) {
			select.classList.remove('select-clicked')
		}
	})

})
