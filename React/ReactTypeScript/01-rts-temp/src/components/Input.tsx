import { InputProps } from "./Input.types"

const Input = ({ value, handleChange }: InputProps) => {

	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={handleChange}
			/>
		</div>
	)
}

export default Input