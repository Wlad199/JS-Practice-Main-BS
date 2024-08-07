//import './scss/null.scss'
//import './scss/style.scss'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'


const USERS = [
	{ name: 'Alex', age: 18, id: 562 },
	{ name: 'John', age: 58, id: 552 },
	{ name: 'Bob', age: 15, id: 592 },
	{ name: 'Bob', age: 11, id: 762 },
]

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<>
		<App users={USERS} />
	</>
)