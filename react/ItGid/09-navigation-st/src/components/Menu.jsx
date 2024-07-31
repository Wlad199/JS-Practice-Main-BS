import { NavLink } from "react-router-dom";


export default function Menu() {
	return (
		<nav>
			<NavLink to='.'>Home</NavLink>
			<NavLink to='about'>About</NavLink>
			<NavLink to='contacts'>Contacts</NavLink>
			<NavLink to='courses'>Courses</NavLink>
		</nav>
	)
}
