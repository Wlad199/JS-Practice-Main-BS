import './list.scss'
import listSvg from '../../assets/img/list.svg'
import closeSvg from '../../assets/img/remove.svg'

import AddButtonList from './AddButtonList'


export default function List({ colors, lists, onAddList, removeHandler, onClickItem, activeItem }) {

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
						<li onClick={onClickItem ? () => onClickItem(el) : ''}
							key={el.id}
							className={'list-sidebar__item' `${activeItem.id === el.id ? 'active' : ''}`}>
							<span style={{ backgroundColor: `${checkColor(el.colorId)}` }}></span>
							<span>{el.name} {el.tasks && el.tasks.length > 0 && ` (${el.tasks.length})`}</span>
							<img src={closeSvg} onClick={() => removeHandler(el.id)} alt="close window" />
						</li>
					)
				})}
				<AddButtonList
					colors={colors}
					onAddList={onAddList}
				/>
			</div>
		</div >
	)
}
// <li className={`${styles.todo} ${todo.isCompleted ? styles.active : ''}`}>