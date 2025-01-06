import classNames from 'classnames'
import React, { useState } from 'react'


export default function App() {

	const [squares, setSquares] = useState(Array(9).fill(null))
	const [count, setCount] = useState(0)
	const [bodyClass, setBodyClass] = useState({ o: false, x: true })
	const [message, setMessage] = useState(null)
	const [redLine, setRedLine] = useState([])

	const WINNER_LINE = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	const isWinner = () => {
		let s = (count % 2 === 0) ? 'x' : 'o'
		for (let i = 0; i < WINNER_LINE.length; i++) {
			let line = WINNER_LINE[i]
			if (squares[line[0]] === s
				&& squares[line[1]] === s
				&& squares[line[2]] === s
			) {
				redColor(line)
				setTimeout(() => {
					setMessage('Победил ' + s.toUpperCase())
				}, 800)
			} else if (!squares.includes(null)) {
				setMessage('Ничья')
			}
		}
	}

	const clickHandler = (e) => {
		let data = e.currentTarget.getAttribute('data')
		let currentSquares = squares
		if (!squares[data] && redLine.length === 0) {
			if (count % 2 === 0) {
				setBodyClass({ o: true, x: false })
				currentSquares[data] = 'x'
			} else {
				setBodyClass({ o: false, x: true })
				currentSquares[data] = 'o'
			}
			setSquares(currentSquares)
			setCount(count + 1)
		}
		isWinner()
	}

	const restartHandler = () => {
		setSquares(Array(9).fill(null))
		setCount(0)
		setMessage(null)
		setRedLine([])
	}

	const redColor = (line) => {
		setRedLine(line)
	}


	return (
		<div className="wrapper">
			<div className={classNames('tic-tac', bodyClass)}>
				<div className={classNames('tic-tac__cell', squares[0], redLine.includes(0) ? 'red' : '')} onClick={clickHandler} data='0'></div>
				<div className={classNames('tic-tac__cell', squares[1], redLine.includes(1) ? 'red' : '')} onClick={clickHandler} data='1'></div>
				<div className={classNames('tic-tac__cell', squares[2], redLine.includes(2) ? 'red' : '')} onClick={clickHandler} data='2'></div>
				<div className={classNames('tic-tac__cell', squares[3], redLine.includes(3) ? 'red' : '')} onClick={clickHandler} data='3'></div>
				<div className={classNames('tic-tac__cell', squares[4], redLine.includes(4) ? 'red' : '')} onClick={clickHandler} data='4'></div>
				<div className={classNames('tic-tac__cell', squares[5], redLine.includes(5) ? 'red' : '')} onClick={clickHandler} data='5'></div>
				<div className={classNames('tic-tac__cell', squares[6], redLine.includes(6) ? 'red' : '')} onClick={clickHandler} data='6'></div>
				<div className={classNames('tic-tac__cell', squares[7], redLine.includes(7) ? 'red' : '')} onClick={clickHandler} data='7'></div>
				<div className={classNames('tic-tac__cell', squares[8], redLine.includes(8) ? 'red' : '')} onClick={clickHandler} data='8'></div>
			</div>
			<button className='tic-tac__restart' onClick={restartHandler}>Начать сначала</button>

			<div className={classNames('message', message ? '' : 'hidden')}>
				<span>{message}</span>
				<button className='tic-tac__restart' onClick={restartHandler}>Начать сначала</button>
			</div>

		</div>
	)
}