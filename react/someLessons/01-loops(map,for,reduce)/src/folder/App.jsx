//import React from 'react'
import './style.css'

export const App = ()=>{
	const arr = [{hello: 'world'}, {hello: 'world2'}]
	const arrayReactElement = []

	//for
	//for(let i = 0; i < arr.length; i++){
	//	const obj = arr[i]
	//	arrayReactElement.push(
	//		<div>{obj.hello}</div>
	//	)
	//}
	
	//foreEach
	//arr.forEach((i)=>{
	//	arrayReactElement.push(
	//		<p>{i.hello}</p>
	//	)
	//})

	//map
	//const result = arr.map((i)=>{
	//	return (
	//		<div>
	//			{i.hello}
	//		</div>
	//	)
	//})

	//reduce
	const result = arr.reduce((acc, i)=>{
		acc.push(
			<div>{i.hello}</div>
		)
		return acc
	}, [])

	return (
		<div>
			{result}
		</div>
	)
}