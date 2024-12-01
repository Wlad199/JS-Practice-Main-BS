import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";


export default function Layout() {
	return (
		<div className="container">

			<header>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/about'>About</NavLink>
				<NavLink to='/posts'>Blog</NavLink>
			</header>

			<main>
				<Outlet />
			</main>

			<footer>Footer 2024</footer>

		</div>
	)
}