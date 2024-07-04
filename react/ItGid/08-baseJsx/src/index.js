import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
let arr = [1, 0, 1, 0]
root.render(
	<React.StrictMode>
		<App arr={arr} />
	</React.StrictMode>
);