export default function Post({ id, title, body }) {

	return (
		<li className="post">
			<h2>{id}</h2>
			<h3>{title}</h3>
			<div>{body}</div>
		</li>
	)
}