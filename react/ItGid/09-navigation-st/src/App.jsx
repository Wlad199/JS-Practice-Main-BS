import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import Courses from './components/Courses'
import SingleCourse from './components/SingleCourse'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='contacts' element={<Contacts />} />
					<Route path='courses' element={<Courses />} />
					<Route path='courses/:slug' element={<SingleCourse />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

// При вложенном роутинге дочерние маршруты относительны родительского
// index для пути по-умолчанию, остальные пути относительны path='/'
