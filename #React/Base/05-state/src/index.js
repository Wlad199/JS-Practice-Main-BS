import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root'));

const products = [
	{ title: 'Cabbage', isFruit: false, id: 1 },
	{ title: 'Garlic', isFruit: false, id: 2 },
	{ title: 'Apple', isFruit: true, id: 3 },
]

root.render(
	<React.StrictMode>
		<App products={products} />
	</React.StrictMode>
);