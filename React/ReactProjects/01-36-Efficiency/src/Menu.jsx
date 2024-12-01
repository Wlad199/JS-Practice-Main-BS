import React from 'react'

export default function Menu({ sum, correct, wrong, clearCounter, reloadHistory }) {

	let persent = 0
	if (sum) {
		persent = `${((correct / sum) * 100).toFixed(0)}%`
	}

	function closeMenu(e) {
		document.querySelector('.menu').classList.remove('_active')
	}

	function saveData() {
		const data = {
			date: new Date().toLocaleDateString('ru'),
			time: new Date().toLocaleTimeString('ru'),
			totally: sum,
			correct: correct,
			wrong: wrong,
			persent: persent,
		}
		localStorage.setItem(new Date().toLocaleTimeString('ru'), JSON.stringify(data))
		clearCounter()
	}

	function closeBlock(e) {

		if (e.target.className === 'close-menu' && (!localStorage.length)) {
			e.currentTarget.classList.remove('_active')
			document.body.classList.remove('lock')
		}

		if (e.target.className !== 'close-menu') {
			e.currentTarget.classList.remove('_active')
			document.body.classList.remove('lock')
		}
		reloadHistory()
	}

	function clearHistory() {
		localStorage.clear()
	}

	function removeFromHistory(key) {
		localStorage.removeItem(key)
	}


	return (
		<>
			<div className="menu">
				<div onClick={closeMenu} className="menu__statistic statistic">
					<ul className="statistic__list">
						<li className="statistic__item">Totally: {sum}</li>
						<li className="statistic__item">Correct: {correct}</li>
						<li className="statistic__item">Wrong: {wrong}</li>
						<li className="statistic__item statistic__persent">{persent}</li>
					</ul>
					<div className="menu__button-box">
						<button onClick={clearCounter} data-name='clear' className="statistic-button__clear">clear</button>
						<button onClick={saveData} data-name='save' className="statistic-button__save">save</button>
					</div>
				</div>
			</div>
			<div onClick={closeBlock} className='history'>{
				Object.keys(localStorage).map((item, index) => {
					const res = JSON.parse(localStorage[item])
					return (
						<ul className='history__list' key={index}>
							<li className='history__label'>
								<span>{res['date']} / {res['time']}</span>
								<span onClick={() => removeFromHistory(item)} className='close-menu'></span>
							</li >
							<li>Totally: {res['totally']}</li>
							<li>Correct: {res['correct']}</li>
							<li>Wrong: {res['wrong']}</li>
							<li>{res['persent']}</li>
						</ul>
					)
				})
			}
				{(localStorage.length) ? <button className='history-clear' onClick={clearHistory}>Clear History</button> : null}
			</div>
		</>
	)
}