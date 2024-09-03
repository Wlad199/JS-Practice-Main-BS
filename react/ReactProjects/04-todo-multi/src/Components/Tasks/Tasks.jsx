import addSvg from '../../assets/img/add.svg'
import './tasks.scss'


export default function Tasks() {
	return (
		<>
			<div className="todo__tasks">
				<h1 className='tasks__title'>Фронтенд</h1>
				<ul className="tasks__list list-tasks">
					<li className="list-tasks__item">
						<span>Изучить JavaScript</span>
					</li>
					<li className="list-tasks__item">
						<span>Изучить JavaScript</span>
					</li>
					<li className="list-tasks__item">
						<span>Изучить JavaScript</span>
					</li>
				</ul>
				<button className='tasks__button'>
					<img src={addSvg} alt="add task" />
					<span>Новая задача</span>
				</button>
			</div>
		</>
	)
}