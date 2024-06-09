const root = ReactDOM.createRoot(
	document.getElementById('test')
)

const App = () => {
	const [buttonText, setButtonText] = React.useState('Click on me!')

	const onButtonClick = () => {
		if (buttonText === 'Click on me!') {
			setButtonText('Again click!')
		} else {
			setButtonText('Click on me!')
		}
	}

	return (
		<div className="app">
			<button onClick={onButtonClick}>{buttonText}</button>
		</div>
	)
}

root.render(<App />)