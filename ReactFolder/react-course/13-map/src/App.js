import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Counter } from './components/Counter'

function App() {
	const [count, setCount] = useState(0)

	
	const incrementCount = () => {
		setCount(count + 1)
	}
	const texts = ['Click On!!!', 'Click On Me', 'Click On Me!!!', 'Click On', 'Click On',]
	return <div className="App">
		<Counter count={count} />
		{texts.map((text, index) => {
			return <Button key={index} onClick={incrementCount} text={text} />
		})}
	</div>
}

export default App
