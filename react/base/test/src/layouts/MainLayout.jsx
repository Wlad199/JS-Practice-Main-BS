import { Outlet } from "react-router";
import Menu from "../components/Menu";

export default function MainLayout() {
	return (
		<>
			<Menu />
			<Outlet />
		</>
	)
}