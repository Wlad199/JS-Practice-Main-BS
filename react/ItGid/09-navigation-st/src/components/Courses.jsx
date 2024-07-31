import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import courses from '../data/courses'
import queryString from 'query-string'

// Допустимые ключи для сортировки
const SORT_KEYS = ['title', 'slug', 'key']

// Ф-я сортировки
function sortCourses(courses, key) {
	const sortedCourses = [...courses]
	if (!key || !SORT_KEYS.includes(key)) {
		return sortedCourses
	}
	sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
	return sortedCourses
}

// * =================//

export default function Courses() {

	// Позволяет получить url путь с ключами
	const location = useLocation()

	// Преобразует параметры из url в объект
	const query = queryString.parse(location.search)

	const [sortKey, setSortKey] = useState(query.sort)

	// Сортируем массив в начальном состоянии
	const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey))

	const navigate = useNavigate()

	useEffect(() => {
		if (!SORT_KEYS.includes(sortKey)) {
			navigate('.')
			setSortKey()
		}
	}, [sortKey, navigate])

	return (
		<>
			{/* Если была сортировка сообщаем об этом */}
			<h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
			<br />
			<ul>
				{sortedCourses.map(course => {
					return (
						<li key={course.id}>
							<Link to={course.slug} >{course.title}</Link>
						</li>
					)
				})}
			</ul>
		</>
	)
}