import './index.html';
import './index.scss';
//!  ====================================================================================================//

const btnOpen = document.querySelector('.button__open')
const btnClose = document.querySelector('.button__close')
const modal = document.querySelector('.modal')
const body = document.body

btnOpen.addEventListener('click', () => {
	modal.classList.add('_active')
	body.classList.add('_lock')
})
btnClose.addEventListener('click', () => {
	modal.classList.remove('_active')
	body.classList.remove('_lock')
})

document.addEventListener('click', (event) => {
	if (event.target === modal) {
		modal.classList.remove('_active')
		body.classList.remove('_lock')
	}
})