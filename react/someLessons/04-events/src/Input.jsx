
//const onChangeHandler = (event) => {
//	console.log('on change', event.target.value)
//}

const Input = () => {
	return (
		<input type="text" onChange={(event) => {
			console.log(event.target.value)
		}} />
	)
}


export default Input