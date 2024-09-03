import closeSvg from '../../assets/img/close.svg'


export default function ColorPopup({ colorSelectedHandler, selectedColor, colors, setVisiblePopup }) {
	return (
		<div className="add-list-popup">
			<input className='add-list-popup__input' type="text" placeholder='Название папки' />
			<ul className='add-list-popup__colors'>
				{colors.map((color) => {
					return (
						<li
							key={color.id}
							style={{ background: `${color.hex}` }}
							onClick={() => colorSelectedHandler(color.id)}
							className={selectedColor === color.id ? '_active' : ''}>
						</li>
					)
				})}
			</ul>
			<button className='add-list-popup__button'>Добавить</button>
			<button onClick={() => setVisiblePopup(false)} className='add-list-popup__button-close'>
				<img src={closeSvg} alt="close" />
			</button>
		</div>
	)
}