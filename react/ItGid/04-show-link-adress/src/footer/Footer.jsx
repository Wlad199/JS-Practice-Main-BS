import React from 'react'

class Footer extends React.Component {
	render() {
		return (
			<div className="footer-body">
				<ShowNumbers tel={this.props.tel} />
				<Adress adress={this.props.adress} />
			</div>
		)
	}
}


// ShowNumbers =================//

class ShowNumbers extends React.Component {
	render() {
		const tel = this.props.tel
		return (
			tel.map((el) => {
				return <p key={el}>Nomber: {el}</p>
			})
		)
	}
}

// Adress =================//

class Adress extends React.Component {
	render() {
		const adress = this.props.adress
		return (
			adress.map((el) => {
				return (
					<span key={el}>{el} </span>
				)
			})
		)
	}
}










export default Footer