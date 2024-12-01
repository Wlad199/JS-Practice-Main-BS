import users from '../data/users.js'
import Person from './Person'


export default function Persons() {


	return (
		<ul className='list'>
			{users.map(user => {
				return <Person key={user.id} person={user} />
			})}
		</ul>
	)
}