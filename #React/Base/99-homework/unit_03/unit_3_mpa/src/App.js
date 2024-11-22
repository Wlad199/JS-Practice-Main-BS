import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Category from './Category/Category';
import Footer from './Footer/Footer';
import CategoryDescription from './Category/CategoryDescription';
import Error from './Error/Error';

const list1 = {
  nav: [
    {"link" : "/", "text" : "Главная"},
    {"link" : "/about", "text" : "О сайте"},
    {"link" : "/cat", "text" : "Категории"},
  ]
}

const list2 = {
  nav: [
    {"link" : "/cat/notebook", "text" : "Ноутбуки"},
    {"link" : "/cat/monitor", "text" : "Мониторы"},
    {"link" : "/cat/cellphone", "text" : "Мобильные телефоны"},
  ]
}

function App() {
  return (
    <>
    <Header data = {list1}/>
    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/cat" render={() => <Category data = {list2}/>}/>
      <Route exact path="/cat/:params" component={CategoryDescription}/>
      <Route component={Error}/>
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
