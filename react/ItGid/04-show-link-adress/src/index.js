import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root'));

let nav = {
	'main': '/index',
	'about': '/about',
	'price': '/price'
}

let tel = [
	651351, 8130891, 984321
]

let adress = [
	'Moscow', 'Lermontowa', '8/15'
]
const title = 'This is very important Title'

root.render(
	<React.StrictMode>
		<App nav={nav} tel={tel} adress={adress} title={title} />
	</React.StrictMode>
);