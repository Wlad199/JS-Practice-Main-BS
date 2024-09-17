import axios from "axios";
import { CgCloseR } from "react-icons/cg";



export default function Users({ list, setList }) {

	function deleteHandler(id) {
		axios.delete(`http://localhost:3001/users/${id}`)
			.then(() => {
				const newList = list.filter(user => (
					user.id !== id
				))
				setList(newList)
			})

	}

	return (
		<div>
			<h1>Список пользователей</h1>
			<ul>
				{list.map(user => (
					<li key={user.id}>
						<span >{user.name} {user.email}</span>
						<span onClick={() => deleteHandler(user.id)}><CgCloseR /></span>
					</li>
				))}
			</ul>
		</div>
	)
}