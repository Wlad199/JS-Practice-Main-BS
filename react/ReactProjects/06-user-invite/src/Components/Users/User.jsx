import { MdAdd } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";


export default function User({ avatar, email, first_name, id, last_name, invites, inviteHandler }) {
	return (
		<li className='user__items'>
			<img className='user-item__image' src={avatar} alt={`${first_name} ${last_name}`} />
			<div className="user-item__info">
				<h4 className="user-item__name">{first_name} {last_name}</h4>
				<div className="user-item__email">
					<MdAlternateEmail />
					<p>{email}</p>
				</div>
			</div>
			<button className="user-item__add" onClick={() => inviteHandler(id)}>
				{invites.includes(id)
					? <IoMdRemove />
					: <MdAdd />
				}
			</button>
		</li>
	)
}