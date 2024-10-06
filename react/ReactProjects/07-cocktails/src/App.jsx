//import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import Cocktails from './Components/Cocktails'
import ClipLoader from "react-spinners/ClipLoader";

const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "red",
	height: '100vh'
}

//https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z
//https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail


const COCKTAILS_CATEGORY = {
	nonAlcoholic: 'filter.php?a=Non_Alcoholic',
	alcoholic: 'filter.php?a=Alcoholic',
	ordinary: 'filter.php?c=Ordinary_Drink',
	cocktail: 'filter.php?c=Cocktail',
	glass: 'filter.php?g=Cocktail_glass',
	champagne: 'filter.php?g=Champagne_flute'
}

export default function App() {

	const [coctailList, setCoctailList] = useState([])
	const [category, setCategory] = useState(COCKTAILS_CATEGORY['nonAlcoholic'])
	const [inputValue, setInputValue] = useState('')
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		fetch('https://www.thecocktaildb.com/api/json/v1/1/' + category)
			.then(data => data.json())
			.then(data => setCoctailList(data.drinks))
			.finally(() => setLoading(false))
	}, [category])



	const categoryHandler = (e) => {
		console.log(e.target.dataset.name)
		setCategory(COCKTAILS_CATEGORY[e.target.dataset.name])
	}

	const inputHandler = (e) => {
		setInputValue(e.target.value)
	}

	window.addEventListener('scroll', function () {
		if (this.pageYOffset > 0) {
			document.querySelector('.top-cocktail').classList.add('_active')
		} else {
			document.querySelector('.top-cocktail').classList.remove('_active')
		}
	})

	const sortHandler = (e) => {
		if (e.target.dataset.name) {
			const firstLetter = e.target.dataset.name
			setCategory('search.php?f=' + firstLetter)
		}
	}

	return (
		<div className='cocktail__container'>
			<div className="cocktail__top top-cocktail">

				<header className="top-cocktail__header">
					<div className='header__top'>
						<a href='#' className="header__logo">
							<img src="https://www.thecocktaildb.com/images/logo.png" alt="logo" />
						</a>
						<input onChange={inputHandler} value={inputValue} type="text" className='header__input' placeholder='Search for a cocktail...' />
					</div>
					<ul onClick={categoryHandler} className="top-cocktail__categories categories__list">
						<li className='categories__item' data-name='nonAlcoholic'>Non Alcoholic</li>
						<li className='categories__item' data-name='alcoholic'>Alcoholic</li>
						<li className='categories__item' data-name='ordinary'>Ordinary</li>
						<li className='categories__item' data-name='cocktail'>Cocktails</li>
						<li className='categories__item' data-name='glass'>In Glass</li>
						<li className='categories__item' data-name='champagne'>Champagne</li>
					</ul>
				</header>

			</div>
			{isLoading
				? <ClipLoader
					cssOverride={override}
					size={50}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
				: <Cocktails
					coctailList={coctailList}
					inputValue={inputValue}
					sortHandler={sortHandler}
				/>
			}
			<footer className="footer">
				<div className="footer__wrapper">
					<div className="footer__copy">
						<p>© 2024 TheCocktailDB.</p>
						<p>Proudly built in the UK </p>
					</div>
					<div className="footer__labels">
						<a href="#"><img src="https://www.thecocktaildb.com/images/logo-tsdb.png" alt="logo" /></a>
						<a href="#"><img src="https://www.thecocktaildb.com/images/logo-tadb.png" alt="logo" /></a>
						<a href="#"><img src="https://www.thecocktaildb.com/images/logo-tmdb.png" alt="logo" /></a>
					</div>
					<div className="footer__contacts">
						<a href='#'>Missing</a>
						<a href='#'>About</a>
						<a href='#'>Faq</a>
						<a href='#'>Contact</a>
					</div>
				</div>
			</footer>
		</div>
	)
}