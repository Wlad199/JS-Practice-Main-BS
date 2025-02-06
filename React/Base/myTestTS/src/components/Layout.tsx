import { NavLink, Outlet } from "react-router-dom"



const Layout = () => {

	return (
		<div className="constainer">
			<header>
				<nav>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='about'>About</NavLink>
					<NavLink to='posts'>Posts</NavLink>
				</nav>
			</header>

			<main><Outlet /></main>

			<footer>footer</footer>
		</div>
	)
}

export default Layout
