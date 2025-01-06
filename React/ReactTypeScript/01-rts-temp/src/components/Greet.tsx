

interface IGreetProps {
	name: string,
	messageCount?: number,
	isLoggedIn: boolean
}

const Greet = ({ name, messageCount, isLoggedIn }: IGreetProps) => {

	return (
		<div>
			{isLoggedIn
				? <h2>Hello {name}!!! There are {messageCount} messages</h2>
				: 'Welcom Guest'}
		</div>
	)
}

export default Greet
