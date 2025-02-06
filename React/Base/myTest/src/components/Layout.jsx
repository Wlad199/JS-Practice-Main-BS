import { Outlet } from "react-router"
import { NavLink } from 'react-router-dom'

const setActive = ({ isActive }) => isActive ? 'nav-link' : ''

const Layout = () => {

	return (
		<div className="container">

			<header>
				<NavLink to='/' className={setActive}>Home</NavLink>
				<NavLink to='/about' className={setActive}>About</NavLink>
				<NavLink to='/posts' className={setActive}>Posts</NavLink>
			</header>

			<main>
				<Outlet />
			</main>

			<footer>
				footer
			</footer>

		</div>
	)
}

export default Layout