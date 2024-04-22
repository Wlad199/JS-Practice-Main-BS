function Person(props) {

	const { firstТame, lastТame, email, img } = props

	return <div>
		<img src={img} />
		<h3>{firstТame} {lastТame}</h3>
		<a href='#'>{email}</a>
	</div>
}

export default Person