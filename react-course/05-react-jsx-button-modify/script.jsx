const root = ReactDOM.createRoot(
	document.getElementById('test')
)

const App = ({ initialButtonText, inicialClassesList }) => {
	const [buttonText, setButtonText] = React.useState(initialButtonText)
	const [classesList, setClassesList] = React.useState(inicialClassesList)

	const onButtonClick = () => {
		if (buttonText === 'Click on me!') {
			setButtonText('Again click!')
			setClassesList('green-btn')
		} else {
			setButtonText('Click on me!')
			setClassesList('')
		}
	}

	return (
		<div className="app">
			<button className={classesList} onClick={onButtonClick}>{buttonText}</button>
		</div>
	)
}

root.render(<App initialButtonText="Click on me!" inicialClassesList="" />)