import { useState } from 'react'
import closeSvg from '../../assets/img/close.svg'
import axios from 'axios'


export default function ColorPopup({
	colorSelectedHandler,
	selectedColor,
	setSelectedColor,
	colors,
	setVisiblePopup,
	onAddList
}) {


	const [currentColor, setCurrentColor] = useState()
	const [inputValue, setInputValue] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	// Добавить задачу
	const addList = () => {
		if (!inputValue) {
			alert('Необходимо добавить название списка')
			return
		}
		if (!selectedColor) {
			alert('Необходимо выбрать цвет')
			return
		}
		setIsLoading(true)
		axios.post('http://localhost:3001/lists', {
			name: inputValue, colorId: selectedColor, tasks: []
		}).then(({ data }) => {
			const listObj = { ...data, color: currentColor }
			onAddList(listObj)
			closePopup()

		}).finally(() => setIsLoading(false))
	}

	// Закрыть попап
	const closePopup = () => {
		setInputValue('')
		setVisiblePopup(false)
		setSelectedColor(null)
	}


	return (
		<div className="add-list-popup">
			<input
				onChange={e => setInputValue(e.target.value)}
				className='add-list-popup__input'
				type="text"
				placeholder='Название папки'
				value={inputValue}
			/>
			<ul className='add-list-popup__colors'>
				{colors.map((color) => {
					return (
						<li
							key={color.id}
							style={{ background: `${color.hex}` }}
							onClick={() => {
								colorSelectedHandler(color.id)
								setCurrentColor(color.name)
							}}
							className={selectedColor === color.id ? '_active' : ''}>
						</li>
					)
				})}
			</ul>
			<button
				onClick={addList}
				className='add-list-popup__button'>
				{isLoading ? 'Добавление...' : 'Добавить'}
			</button>
			<button onClick={closePopup} className='add-list-popup__button-close'>
				<img src={closeSvg} alt="close" />
			</button>
		</div>
	)
}