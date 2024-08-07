import { useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import ShowValue from "./components/ShowValue"



export default function App({ users }) {

	const generateKeys = (obj) => {
		return `${obj.name}_${obj.age}`
	}


	const [inputValue, setInputValue] = useState('')
	const [divValue, setDivValue] = useState([])

	const inputHandler = (e) => {
		setInputValue(e.target.value)
	}


	const clickHandler = () => {
		setInputValue('')
		if (inputValue) {
			setDivValue([...divValue, inputValue])
		}
	}

	const formHandler = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<ul>
				{users.map(user => {
					return <li key={generateKeys(user)}>{user.name}</li>
				})}
			</ul>
			<form typeof="submit" onSubmit={formHandler}>
				<Input inputHandler={inputHandler} inputValue={inputValue} />
				<Button clickHandler={clickHandler} />
				<ShowValue divValue={divValue} />
			</form>
		</>
	)
}


