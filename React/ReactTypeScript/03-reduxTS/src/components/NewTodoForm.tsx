
interface INewTodoFormProps {
	value: string;
	updateText: (str: string) => void
	handleAction: () => void
}


const NewTodoForm: React.FC<INewTodoFormProps> = ({ value, updateText, handleAction }) => {

	return (
		<label>
			<input
				type="text"
				placeholder="new todo"
				value={value}
				onChange={(e) => updateText(e.target.value)}
			/>
			<button onClick={handleAction}>Add Todo</button>
		</label>
	)
}

export default NewTodoForm
