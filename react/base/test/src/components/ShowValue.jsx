export default function ShowValue({ divValue }) {
	return (
		<>
			<br />
			<ul>{divValue.map((item, index) => {
				return <li key={index}>{item}</li>
			})}</ul>
		</>
	)
}