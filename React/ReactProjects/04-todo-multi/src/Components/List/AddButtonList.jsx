import addSvg from '../../assets/img/add.svg'
import { useState } from 'react'
import ColorPopup from './ColorPopup'


export default function AddButtonList({ colors, onAddList }) {

	const [visiblePopup, setVisiblePopup] = useState(false)
	const [selectedColor, setSelectedColor] = useState(null)

	const colorSelectedHandler = (id) => {
		setSelectedColor(id)
	}

	return (
		<div className='list-sidebar__add-folder'>
			<button onClick={() => setVisiblePopup(!visiblePopup)} className='list-sidebar__button'>
				<img src={addSvg} alt="add button" />
				<span>Добавить папку</span>
			</button>
			{visiblePopup &&
				<ColorPopup
					colorSelectedHandler={colorSelectedHandler}
					selectedColor={selectedColor}
					setSelectedColor={setSelectedColor}
					setVisiblePopup={setVisiblePopup}
					colors={colors}
					onAddList={onAddList}
				/>}
		</div>
	)
}