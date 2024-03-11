import './App.css'
import PetInfo from './components/PetInfo'

function App() {
	return (
		<div className="App">
			<PetInfo animal="Dog" age="15" />
			<PetInfo animal="Cat" age={10} />
		</div>
	)
}

export default App