import { useState } from 'react'
import closeSvg from '../../assets/img/close.svg'


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
		onAddList({ id: Math.random(), name: inputValue, colorId: selectedColor, color: currentColor })
		closePopup()
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
			<button onClick={addList} className='add-list-popup__button'>Добавить</button>
			<button onClick={closePopup} className='add-list-popup__button-close'>
				<img src={closeSvg} alt="close" />
			</button>
		</div>
	)
}