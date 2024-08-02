import { Link } from 'react-router-dom'

export default function Category(props) {

	const nav = props.nav
	const listItem = nav.map((item) => {
		return (
			<li key={item.text}>
				<Link to={item.link}>{item.text}</Link>
			</li>
		)
	})
	return (
		<>
			<h1>Category</h1>
			<Link to="/">Назад</Link>
			<ul>
				{listItem}
			</ul>
		</>
	)
}