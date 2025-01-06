type OuterComponentProps = {
	children: React.ReactNode
}


const OuterComponent = (props: OuterComponentProps) => {

	return (
		<div>
			{props.children}
		</div>
	)
}

export default OuterComponent
