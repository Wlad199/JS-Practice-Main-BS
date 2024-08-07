
export default function Input({ inputHandler, inputValue }) {


	return (
		<>
			<input
				onChange={inputHandler}
				type="text"
				value={inputValue}
			/>
		</>
	)
}