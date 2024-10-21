//import classNames from 'classnames'
import React from 'react'
import { useEffect } from 'react'
import { fetchPosts, allPosts } from './Components/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {

	const dispatch = useDispatch()

	const posts = useSelector(state => state.posts.posts)
	console.log(posts)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	return (
		<ul>
			{posts?.map(post => (
				<li key={post.id}>{post.title}</li>
			))}
		</ul>
	)
}