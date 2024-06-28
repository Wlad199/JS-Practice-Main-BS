import React from "react";

class Nav extends React.Component {
	render() {
		let nav = this.props.nav
		return (
			<nav>{
				<ul>{Object.keys(nav).map((item, index) => {
					return <li key={index}><a href={nav[item]}>{item}</a></li>
				})}</ul>
			}</nav>
		)
	}
}

export default Nav