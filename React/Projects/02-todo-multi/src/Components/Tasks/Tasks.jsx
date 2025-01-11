import axios from 'axios'
import editSvg from '../../assets/img/edit.svg'
import './tasks.scss'
import AddNewTask from './AddNewTask'



export default function Tasks({ list, onEditTitle, onAddTask }) {

	// Изменить название списка задач
	const editTitle = () => {
		const newTitle = window.prompt('Название списка', list.name)
		if (newTitle) {
			onEditTitle(list.id, newTitle)
			axios.patch('http://localhost:3001/lists/' + list.id, {
				name: newTitle
			})
				.catch(() => alert('Не удалось изменить название списка'))
		}
	}


	if (!list) {
		return (
			<div className="todo__tasks todo__tasks_non">
				<h2>Задачи отсутствуют</h2>
			</div>)
	}


	return (
		<>
			<div className="todo__tasks">
				<div className="tasks__title">
					<h1>{list.name}</h1>
					<button>
						<img src={editSvg} onClick={editTitle} alt="edit" />
					</button>
				</div>

				<div className="tasks__list">
					{list.tasks.map(task => (
						<div key={task.id} className="tasks__item">
							<div className="list-tasks__ckeckbox">
								<input id={task.id} type="checkbox" />
								<label htmlFor={task.id}>
									<svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="#b2b2b2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</label>
							</div>
							<p>{task.text}</p>
						</div>
					))}
				</div>
				<AddNewTask list={list} onAddTask={onAddTask} />
			</div >
		</>
	)
}