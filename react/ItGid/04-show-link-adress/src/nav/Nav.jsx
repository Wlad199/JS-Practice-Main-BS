import React from 'react'

class Nav extends React.Component {
	render() {
		const nav = this.props.nav
		return (
			<ul>
				{Object.keys(nav).map((elem, index) => {
					return (
						<li key={index}>
							<a href={nav[elem]}>{elem}</a>
						</li>)
				})}
			</ul>
		)
	}
}

export default Nav