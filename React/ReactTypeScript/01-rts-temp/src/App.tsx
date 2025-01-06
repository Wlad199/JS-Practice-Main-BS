import { useState } from "react"
import Button from "./components/Button"
import Greet from "./components/Greet"
import Heading from "./components/Heading"
import Input from "./components/Input"
import OuterComponent from "./components/OuterComponent"
import Person from './components/Person'
import PersonList from './components/PersonList'
import Styles from "./components/Styles"


const App = () => {

	const [inputValue, setInputValue] = useState('')
	console.log(inputValue)

	const personName = {
		firstName: 'Bruce',
		lastName: 'Wayne'
	}

	const nameList = [
		{
			firstName: 'Bruce',
			lastName: 'Wayne'
		}, {
			firstName: 'dsfb',
			lastName: 'sdfbWayne'
		}, {
			firstName: 'Brfgdbuce',
			lastName: 'dsfb'
		}
	]

	return (
		<div>
			<Greet name={'Alex'} messageCount={10} isLoggedIn={true} />
			<Person name={personName} />
			<PersonList names={nameList} />
			<Heading>Some text</Heading>
			<OuterComponent>
				<Heading>Inner Text</Heading>
			</OuterComponent>
			<Button handleClick={(event) => console.log(event.target)} />
			<Input value={inputValue} handleChange={(e) => setInputValue(e.target.value)} />
			<Styles styles={{ color: 'green', fontSize: 18, paddingTop: 20 }} />
		</div>
	)
}

export default App
