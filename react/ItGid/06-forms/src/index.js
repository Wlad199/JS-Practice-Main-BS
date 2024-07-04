import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App'
import { Tasck } from './Tasck'

const root = ReactDOM.createRoot(document.getElementById('root'));

let nav = {
	'main': '/index',
	'about': '/about',
	'price': '/price'
}

root.render(
	<React.StrictMode>
		<Tasck />
	</React.StrictMode>
);