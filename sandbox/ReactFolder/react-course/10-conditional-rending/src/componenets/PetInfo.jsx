const PetInfo = ({ animal, age, hasPet }) => {

	return hasPet
		? (<div>{`My ${animal} is ${age} year old}`}</div>)
		: (<div>I don't have any animals!!!</div>)
}

export default PetInfo