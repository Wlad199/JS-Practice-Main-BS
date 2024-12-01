import { useState } from "react"

export default function Form() {

	const [data, setData] = useState({ userName: '', password: '' })

	function handleFormSubmit(e) {
		e.preventDefault()
		console.log(data)

		// Очистка формы
		setData({ userName: '', password: '' })
	}

	function handleInputChange(e) {
		// Записываем введенные данные в массив,
		// где ключ это name из формы, а значение это e.target.value
		setData({ ...data, [e.target.name]: e.target.value })
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<label>
				Name:
				<input
					onChange={handleInputChange}
					value={data.userName}
					type="text"
					name="userName"
				/>
			</label>
			<label>
				Pass:
				<input
					onChange={handleInputChange}
					value={data.password}
					type="password"
					name="password"
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	)
}