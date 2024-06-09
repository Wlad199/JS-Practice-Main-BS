import './App.css'
import PetInfo from './componenets/PetInfo'

function App() {
	return <div className="App">
		<PetInfo animal="Cat" age="18" hasPet={false} />
		<PetInfo animal="Wolf" age="89" hasPet={true} />
	</div>
}

export default App
