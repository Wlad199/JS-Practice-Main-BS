import React from 'react'
import ParentToChild from './ParentToChild'
import ChildToParent from './ChildToParent'
import SiblingToSibling from './SiblingToSibling'


export default function App() {

	return (
		<>
			<ParentToChild />
			<p>--------------------------------------------</p>
			<ChildToParent />
			<p>--------------------------------------------</p>
			<SiblingToSibling />
		</>
	)
}