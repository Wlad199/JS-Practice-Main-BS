import addSvg from '../../assets/img/add.svg'
import editSvg from '../../assets/img/edit.svg'
import './tasks.scss'



export default function Tasks({ list }) {

	console.log(list)
	return (
		<>
			<div className="todo__tasks">
				<div className="tasks__title">
					<h1>{list.name}</h1>
					<button><img src={editSvg} alt="edit" /></button>
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



				<button className='tasks__button'>
					<img src={addSvg} alt="add task" />
					<span>Новая задача</span>
				</button>
			</div>
		</>
	)
}