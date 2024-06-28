import './styleButton.css'
const onClickHandler = (event) => {
	console.log('button event')
}

export const Button = () => {
	return (
		<button onMouseUp={onClickHandler} type='submit' >This is button</button>
	)
}

export default Button