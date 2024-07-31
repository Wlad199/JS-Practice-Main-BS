import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Home from "./components/Home"
import NotFound from "./components/NotFound"


export default function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='Home' element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='contacts' element={<Contacts />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}