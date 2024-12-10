type PersonListProps = {
	names: {
		firstName: string,
		lastName: string
	}[]
}

const PersonList = (props: PersonListProps) => {

	return (
		<ul>
			{props.names.map(name => (
				<li key={name.firstName}>
					<span>{name.firstName}</span>
					<span>{name.lastName}</span>
				</li>
			))}
		</ul>
	)
}

export default PersonList
