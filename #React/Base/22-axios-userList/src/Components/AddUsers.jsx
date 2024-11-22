import axios from "axios"
import { useState } from "react"


export default function AddUsers({ list, setList }) {

	const [dataForm, seyDataForm] = useState({ name: '', email: '' })

	function sublitHandler(e) {
		e.preventDefault()
		axios.post('http://localhost:3001/users', dataForm)
			.then(res => setList([...list, res.data]))
			.catch(err => console.error(err))
		dataForm.name = ''
		dataForm.email = ''
	}

	function inputHandler(e) {
		seyDataForm({ ...dataForm, [e.target.name]: e.target.value })
	}



	return (
		<div>
			<h2>Добавить пользвателя</h2>
			<form onSubmit={sublitHandler}>
				<label> Имя:
					<input onChange={inputHandler} value={dataForm.name} type="text" name="name" />
				</label>
				<br />
				<label> email:
					<input onChange={inputHandler} value={dataForm.email} type="email" name="email" />
				</label>
				<br />
				<button type="submit">Отправить</button>
			</form>
		</div>
	)
}