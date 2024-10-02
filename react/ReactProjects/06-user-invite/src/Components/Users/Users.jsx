import { IoSearchOutline } from "react-icons/io5";

import User from './User'
import Skeleton from "./Skeleton";
import { useState } from "react";


export default function Users({ users, isLoading, searchHandler, searchValue, invites, inviteHandler, sendInvitesHandler }) {

	const [inputFocus, setInputFocus] = useState(false)
	console.log(inputFocus)
	return (
		<>
			<div className="search" onClick={() => setInputFocus(!inputFocus)}>
				<IoSearchOutline />
				<input type="search" placeholder='Найти пользователя' value={searchValue} onChange={searchHandler} />
			</div>
			{
				isLoading ?
					<div className="skeleton-list">
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
					</div> :
					<ul className="user__list">
						{users.filter(user => {
							const data = (`${user.first_name} ${user.last_name} ${user.email}`).toLowerCase()
							return data.includes(searchValue.toLowerCase())
						})
							.map(user => (
								<User {...user} key={user.id} invites={invites} inviteHandler={inviteHandler} />
							))}
					</ul>
			}
			{!!invites.length && <button onClick={sendInvitesHandler} className='button button__send'>Отправить приглашение</button>}
		</>
	)
}