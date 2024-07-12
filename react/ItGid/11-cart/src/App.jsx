import React from 'react'
import './App.css'
import goodsArr from './goods.json'
import Goods from './Goods/Goods'
import Cart from './Cart/Cart'


export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			cart: {},
			count: 0
		}
	}
	addToCart = (e) => {
		e.preventDefault()
		//если кликнули не на кнопке с нужным нам классом, то выходим из метода
		if (!e.target.classList.contains('add-to-cart')) {
			return false
		} else {
			//получаем текущее значение state для манипуляции
			let cartTemp = this.state.cart
			//проверяем, если артикула товара нет в объекте корзине - то делаем запись в формате атикул : 1, т.е. один товар,
			//а если товар уже есть - то увеличиваем количество на единицу
			cartTemp[e.target.dataset.key] ? cartTemp[e.target.dataset.key]++ : cartTemp[e.target.dataset.key] = 1
			//сохраняем стейт с изменениями
			this.setState({
				cart: cartTemp
			})

			let count = this.state.count
			count++
			this.setState({
				count: count
			})
		}
	}

	render() {
		//Делаем условный вывод компонента корзины. Внутри метода render пишем проверку count
		//Если count равен нулю - выводим текст, если нет - компонет корзины
		let showCart
		if (this.state.count !== 0) {
			showCart = <Cart cart={this.state.cart} goods={goodsArr} />;
		}
		else {
			showCart = 'Empty'
		}

		return (
			<>
				<div className="container">
					<h1>Cart</h1>
					<div className="goods-field" onClick={this.addToCart}>
						{goodsArr.map(item => (
							<Goods
								title={item.title}
								cost={item.cost}
								image={item.image}
								articul={item.articul}
								key={item.articul}
							/>))
						}
					</div>
					{showCart}
				</div>
			</>
		)
	}
}

