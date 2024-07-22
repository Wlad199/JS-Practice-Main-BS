import React, { useState } from 'react'
import Menu from './Menu'


export default function App() {

	const [sum, setSum] = useState(0)
	const [countMinus, setCountMinus] = useState(0)
	const [countPlus, setCountPlus] = useState(0)
	// Нужен для отрисовки статистики
	const [useless, setUseless] = useState(0)

	function increaseCount(e) {
		let currentSum = sum
		setSum(++currentSum)

		if (e.target.dataset.name === 'minus') {
			let currentCount = countMinus
			currentCount++
			setCountMinus(currentCount)
		} else {
			let currentCount = countPlus
			currentCount++
			setCountPlus(currentCount)
		}
	}

	function clearCounter() {
		setCountMinus(0)
		setCountPlus(0)
		setSum(0)
	}

	function getFullScreen() {
		document.body.classList.toggle('_full')
	}

	function showMenu() {
		document.querySelector('.menu').classList.add('_active')
	}
	function showStat() {
		if (localStorage.length) {
			document.querySelector('.history').classList.add('_active')
			document.body.classList.add('lock')

			reloadHistory()
			console.log('showStat')
		}
	}

	function reloadHistory() {
		// Нужен для отрисовки статистики
		let currentUseless = useless
		currentUseless++
		setUseless(currentUseless)
	}

	return (
		<>
			<main className="page">

				<Menu sum={sum} correct={countPlus} wrong={countMinus} clearCounter={clearCounter} reloadHistory={reloadHistory} />

				<nav className='menu-list'>
					<button onClick={clearCounter} className="menu-button menu-button__reset"></button>
					<button onClick={showMenu} className="menu-button menu-button__save"></button>
					<button onClick={showStat} className="menu-button menu-button__stat"></button>
					<button onClick={getFullScreen} className="menu-button menu-button__full"></button>
				</nav>

				<div className="content">
					<div className="content__body">
						<p className="count">{sum}</p>
					</div>
				</div>
			</main>

			<div className="counter-box">
				<button onClick={increaseCount} data-name='minus' className="counter-button counter-button__false">{countMinus}</button>
				<button onClick={increaseCount} data-name='plus' className="counter-button counter-button__true">{countPlus}</button>
			</div>
		</>
	)
}