
import { Link } from 'react-router-dom'

export default function Header(props) {
	const nav = props.nav
	const listItem = nav.map(item => (
		<li key={item.link}><Link to={item.link}>{item.text}</Link></li>
	))
	return (
		<ul>
			{listItem}
		</ul>
	)
}