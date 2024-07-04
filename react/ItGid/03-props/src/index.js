import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App'


let nav = {
	'main': '/index',
	'about': '/about',
	'price': '/price',
	'price2': '/price2'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const title = 'This is title'
root.render(
	<React.StrictMode>
		<App nav={nav} />
	</React.StrictMode>
);