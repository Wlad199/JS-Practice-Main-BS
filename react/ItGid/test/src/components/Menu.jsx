import { NavLink } from "react-router-dom";


export default function Menu() {
	return (
		<nav>
			<NavLink to='about' className={({ isActive }) => isActive ? '_activeLink' : ''}>about</NavLink>
			<NavLink to='contacts' className={({ isActive }) => isActive ? '_activeLink' : ''}>contacts</NavLink>
			<NavLink to='home' className={({ isActive }) => isActive ? '_activeLink' : ''}>home</NavLink>
		</nav>
	)
}