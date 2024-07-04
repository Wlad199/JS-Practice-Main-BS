import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from './Home/Home';
import About from './About/About';
import Category from './Category/Category';
import Footer from './Footer/Footer';
import CategoryDescription from './Category/CategoryDescription';
import Error from './Error/Error';


function App() {
  return (
    <>
      <Router>
        <li><Link to = '/'>Главная</Link></li>
        <li><Link to = '/about'>О сайте</Link></li>
        <li><Link to = '/cat'>Категории</Link></li>
        
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/cat" component={Category}/>
      <Route  path="/cat/:params" component={CategoryDescription}/>
       <Route component={Error}/>
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
