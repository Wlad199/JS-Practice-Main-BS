import { useEffect, useState } from "react"
import Post from './Post'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export default function Posts() {
	const [posts, setPosts] = useState([])
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	//? Через промисы:
	//useEffect(() => {
	//	fetch(URL)
	//		.then(res => res.json())
	//		.then(posts => setPosts(posts))
	//		.catch((error) => setError(error.message))
	//		.finally(setIsLoading(false))
	//}, [])

	//? Через async/await
	// Асинхронная ф-я (async) всегда возвращает проимис
	// Поэтому асинхронную ф-ю нужно обернуть в ф-ю коллбэк:
	//useEffect(() => {
	//	async function fetchData() {
	//		try {
	//			const res = await fetch(URL)
	//			const post = await res.json()
	//			setPosts(post)
	//		} catch (error) {
	//			setError(error.message)
	//		}
	//		setIsLoading(false)
	//	}
	//	fetchData()
	//}, [])

	//ИЛИ

	//? Immediatelly invoke function expression IIFI (самовызывающаяся ф-я)
	useEffect(() => {
		(async function () {
			try {
				const res = await fetch(URL)
				const post = await res.json()
				setPosts(post)
			} catch (error) {
				setError(error.message)
			}
			setIsLoading(false)
		})()
	}, [])

	if (error) {
		return <h1>Error {error}</h1>
	}

	return (
		<>
			<h1>Posts</h1>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<ul>
					{posts.map(post => {
						return <Post key={post.id} {...post} />
					})}
				</ul>
			)}
		</>
	)
}