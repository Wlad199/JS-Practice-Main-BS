import React, { useState } from 'react'
import Child from './Child'
//import Test from './Test'
import Test2 from './Test2'


export default function App() {
	const [s1, setS1] = useState(50)
	const refRange = React.createRef()
	const refDiv = React.createRef()

	//const refF = React.createRef() // Doesn't work!!!
	const refC = React.createRef()

	function changeHandler(e) {
		setS1(e.target.value)
	}

	function changeHandler2() {
		let elem = refRange.current
		console.log(elem.value)

		let div = refDiv.current
		div.style.background = 'orange'
		console.log(div.textContent)

		// Можно через рефы обратиться к методам дочерних компонентов
		refC.current.go()
	}

	return (
		<>
			<div>
				<input onChange={changeHandler} type="range" />
			</div>

			{/* Через Ref */}
			<div>
				<input type="range" ref={refRange} />
				<div ref={refDiv}>Some text</div>
				<button onClick={changeHandler2}>Push</button>
			</div>
			<Child p1={s1} />
			{/*<Test ref={refF} />   // Doesn't work!!!*/}
			<Test2 ref={refC} />
		</>
	)
}