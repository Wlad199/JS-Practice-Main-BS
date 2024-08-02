export default function Person(props) {

	const { firstName, lastName, email, adress, ipAddress, image } = props.person

	return (
		<li className="list__item">
			<img src={image} alt="image" />
			<div>
				<div>{firstName}</div>
				<div>{lastName}</div>
				<div>{email}</div>
				<div>{adress}</div>
				<div>{ipAddress}</div>
			</div>
		</li>
	)
}