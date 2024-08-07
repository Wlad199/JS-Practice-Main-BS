import React from 'react'


export default class Goods extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<div className="goods-block">
					<img src={this.props.image} alt={this.props.title} />
					<p>{this.props.title}</p>
					<p>{this.props.cost}</p>
					<button className="add-to-cart" data-key={this.props.articul}>Add to cart</button>
				</div>
			</>
		)
	}
}