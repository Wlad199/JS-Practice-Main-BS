import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

let a1 = 5
const a2 = 10
root.render(
	<React.StrictMode>
		<App a1={a1} a2={a2} />
	</React.StrictMode>
);