import './list.scss'
import listSvg from '../../assets/img/list.svg'
import closeSvg from '../../assets/img/remove.svg'

import AddButtonList from './AddButtonList'


export default function List({ colors, lists }) {

	const checkColor = (id) => {
		for (let item of colors) {
			if (item.id === id) {
				return item.hex
			}
		}
	}


	return (
		<div className="todo__sidebar">
			<div className="sidebar__body">
				<h3 className="sidebar__label">
					<img src={listSvg} alt="icon list" />
					<span>Все задачи</span>
				</h3>
				{lists.map(el => {
					return (
						<li key={el.id} className='list-sidebar__item'>
							<span style={{ backgroundColor: `${checkColor(el.colorId)}` }}></span>
							<span>{el.name}</span>
							<img src={closeSvg} alt="close window" />
						</li>
					)
				})}
				<AddButtonList colors={colors} />
			</div>
		</div >
	)
}