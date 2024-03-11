function PetInfo(props) {
	console.log(props.age)
	return (
		<div>My {props.animal} is {props.age} years old</div>
	)
}

export default PetInfo