
type StyleProps = {
	styles: React.CSSProperties
}


const Styles = ({ styles }: StyleProps) => {

	return (
		<div style={styles}>
			This is Style Component
		</div>
	)
}

export default Styles
