import './App.css'
import PetInfo from './componenets/PetInfo'

function App() {
	return <div className="App">
		<PetInfo animal="Cat" age="18" />
		<PetInfo animal="Wolf" age="89" />
	</div>
}

export default App
