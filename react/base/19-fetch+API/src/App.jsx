import React, { useEffect, useState } from 'react'
import './scss/listStyle.scss'


export default function App() {

	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [items, setItems] = useState([])

	useEffect(() => {
		fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true)
					setItems(result.drinks)
				}
			)
			.catch(err => {
				setIsLoaded(true)
				setError(err)
				console.log(err)
			})
	}, [])


	if (error) {
		return <p>{error.message}</p>
	} else if (!isLoaded) {
		return <p>LOADING...</p>
	} else {
		return (
			<ul className='list'>
				{items.map(item => {
					return (
						<li key={item.idDrink}>
							<span>{item.strDrink}</span>
							<img src={item.strDrinkThumb} />
						</li>
					)
				})}
			</ul>
		)
	}
}