import { useState } from "react"



export default function App() {

	const [tasks, setTask] = useState([{ text: 'tesssst' }])

	const addTaskHandler = () => {
		const newTack = prompt('', 'enter new task')
		if (newTack) {
			setTask([...tasks, { text: newTack }])
		}
	}

	const removeTaskHandler = (index) => {
		setTask(tasks.filter((_, i) => index !== i))
	}

	const editTaskHandler = (index) => {
		const newTack = prompt('', 'enter new task')
		setTask(tasks.map((obj, i) => {
			if (i === index) {
				//obj.text = newTack   ИЛИ ТАК
				return {
					...obj,
					text: newTack
				}
			}
			return obj
		}))
	}

	return (
		<>
			<ul>
				{tasks.map((task, index) => {
					return <li
						key={index}>
						{task.text}
						<button onClick={() => editTaskHandler(index)}>Edit</button>
						<button onClick={() => removeTaskHandler(index)}>X</button>
					</li>
				})}
			</ul>
			<button onClick={addTaskHandler}>Add new task</button>
		</>
	)
}