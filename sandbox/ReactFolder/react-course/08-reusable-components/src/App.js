import './App.css'
import MyComponent from "./components/MyComponent";
import { MyOtherComponent } from "./components/MyOtherComponent";

function App() {
	return <div className="App">
		<MyComponent />
		<MyOtherComponent />
		<MyComponent />
		<MyOtherComponent />
		<MyComponent />
	</div>
}

export default App
