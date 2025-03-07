//import './scss/null.scss'
//import './scss/style.scss'
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)


root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)