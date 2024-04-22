import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

//import showMessage from "./test";
import { showMessage } from "./test";
import { a as b, f as t } from "./test";

const Ata = () => {
	return 'hello!!';
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<code>
			<div className='hello'>
				Lorem ipsum dolor sit.
			</div>
		</code>
		<Ata />
	</React.StrictMode>
);

