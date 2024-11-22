import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import courses from '../data/courses'
//import NotFound from './NotFound'
import { useEffect } from 'react'


export default function SingleCourse() {

	const params = useParams()

	const course = courses.find(course => {
		return params.slug === course.slug
	})


	//## Приверка на наличие страницы и переход на 404
	//if (!course) {
	//	return <NotFound />
	//}

	//## Проверка на наличие страницы и переадресовка конкретную страницу
	const navigate = useNavigate() // исп хук useNavigate,
	// можно использовать только в useEffect

	// переход на уровень выше, если курса нет
	useEffect(() => {
		if (!course) {
			navigate('..', { relative: 'path' })
		}
	}, [course, navigate])


	return (
		<>
			<div className='courseInfo'>
				<h3>{course?.title}</h3>
				<div>{course?.id}</div>
				<div>{course?.slug}</div>
			</div>
			<Link to='..' relative='path'>Turn Back</Link>
		</>
	)
}