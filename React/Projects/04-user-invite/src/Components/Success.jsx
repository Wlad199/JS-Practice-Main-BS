import { IoMdCheckmark } from "react-icons/io";



export default function Success({ invites }) {
	return (
		<div className="success-block">
			<div>
				<IoMdCheckmark />
			</div>
			<h2>Успешно</h2>
			<p>Всем {invites.length} пользователям отправлено приглашение.</p>
			<button onClick={() => window.location.reload(false)} className="button button__success">Назад</button>
		</div>
	)
}