//import classNames from 'classnames'
import React from 'react'
import PostsList from './Components/posts/PostsList'
import AddPostForm from './Components/posts/AddPostForm'

export default function App() {

	return (
		<>
			<AddPostForm />
			<PostsList />
		</>
	)
}