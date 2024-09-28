//import classNames from 'classnames'
import React, { useState } from 'react'


export default function App() {

	const [squares, setSquares] = useState(Array(9).fill(null))
	const [count, setCount] = useState(0)

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
		let s = (count % 2 === 0) ? 'X' : 'O'
		for (let i = 0; i < WINNER_LINE.length; i++) {
			let line = WINNER_LINE[i]
			if (squares[line[0]] === s
				&& squares[line[1]] === s
				&& squares[line[2]] === s
			) {
				alert(s + ' win')
				setTimeout(() => {
					setSquares(Array(9).fill(null))
					setCount(0)
				}, 3000);
			}
		}
	}

	const clickHandler = (e) => {
		let data = e.currentTarget.getAttribute('data')
		let currentSquares = squares
		if (!squares[data]) {
			currentSquares[data] = (count % 2 === 0) ? 'X' : 'O'
			setSquares(currentSquares)
			setCount(count + 1)
		} else {
			alert('NO NO NO!!!')
		}
		isWinner()
	}
	console.log(squares)


	return (
		<div className="wrapper">
			<div className='tic-tac o'>
				<div className="tic-tac__cell x" onClick={clickHandler} data='0'><span>{squares[0]}</span></div>
				<div className="tic-tac__cell o" onClick={clickHandler} data='1'><span>{squares[1]}</span></div>
				<div className="tic-tac__cell" onClick={clickHandler} data='2'><span>{squares[2]}</span></div>
				<div className="tic-tac__cell" onClick={clickHandler} data='3'><span>{squares[3]}</span></div>
				<div className="tic-tac__cell" onClick={clickHandler} data='4'><span>{squares[4]}</span></div>
				<div className="tic-tac__cell" onClick={clickHandler} data='5'><span>{squares[5]}</span></div>
				<div className="tic-tac__cell" onClick={clickHandler} data='6'><span>{squares[6]}</span></div>
				<div className="tic-tac__cell" onClick={clickHandler} data='7'><span>{squares[7]}</span></div>
				<div className="tic-tac__cell" onClick={clickHandler} data='8'><span>{squares[8]}</span></div>
			</div>
		</div>
	)
}