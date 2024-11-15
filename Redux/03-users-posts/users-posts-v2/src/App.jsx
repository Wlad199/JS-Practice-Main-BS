//import classNames from 'classnames'
import React from 'react'
import PostsList from './components/posts/PostsList'
import AddPostForm from './components/posts/AddPostForm'

export default function App() {

	return (
		<>
			<AddPostForm />
			<PostsList />
		</>
	)
}