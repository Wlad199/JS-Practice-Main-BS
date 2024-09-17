import React, { useState } from 'react'
import cn from 'classnames'

export default function App() {

	const [activeItem, setActiveitem] = useState(null)

	const myObject = [
		'item',
		'item',
		'item',
		'item',
		'item'
	]

	function onClickItem(index) {
		setActiveitem(index)
	}

	return (
		<ul>
			{myObject.map((item, index) => (
				<li
					onClick={() => onClickItem(index)}
					key={index}
					className={cn(item, { active: activeItem === index })}
				>
					{item}
				</li>
			))}
		</ul>
	)
}

/*
В useState получаем индекс елем, на котором был клик 
	и сравниваем его с индексом элемента. 
Если совпал - добавляется класс

import cn from 'classnames'
const [activeItem, setActiveitem] = useState(null)

		<ul>
			{myObject.map((item, index) => (
				<li
					onClick={() => onClickItem(index)}
					key={index}
					className={cn(item, { active: activeItem === index })}
				>
					{item}
				</li>
			))}
		</ul>

*/