import './list.scss'
import cn from 'classnames'
import listSvg from '../../assets/img/list.svg'
import closeSvg from '../../assets/img/remove.svg'

import AddButtonList from './AddButtonList'


export default function List({ colors, lists, onAddList, removeHandler, onClickItem, activeItem, history }) {

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
				<button onClick={() => history('/')} className="sidebar__label">
					<img src={listSvg} alt="icon list" />
					<span>Все задачи</span>
				</button>
				{lists.map(el => {
					return (
						<li onClick={onClickItem ? () => onClickItem(el) : ''}
							key={el.id}
							className={cn('list-sidebar__item', { _active: (activeItem) ? activeItem.id === el.id : null })}>
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