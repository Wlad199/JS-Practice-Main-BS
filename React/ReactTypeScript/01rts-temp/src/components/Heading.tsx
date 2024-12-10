type Heading = {
	children: string
}

const Heading = (props: Heading) => {

	return (
		<div>
			{props.children}
		</div>
	)
}

export default Heading
