import './App.css'
import users from './data/data'
import Person from './components/Person'

function App() {

	return (
		<div className="App">
			{users.map((user) => {
				//const { id, firstName, lastName, email } = user
				console.log(user.firsName)
				return (<Person id={user.id} firstName={user.firstName} />)
			})}
		</div>
	)
}

export default App
