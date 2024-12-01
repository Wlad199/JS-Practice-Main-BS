import { useParams } from "react-router-dom";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Notebook from './Goods/Notebook';
import Monitor from './Goods/Monitor';
import Cellphone from './Goods/Cellphone';
// import Error from '../Error/Error';


function CategoryDescription() {
  let {params} = useParams();
  return (
    <div>
      <h1>Category: {params}</h1>
      <a href="/cat">Назад</a>


      <Router>
        <li><Link to = '/cat/notebook'>Ноутбуки</Link></li>
        <li><Link to = '/cat/monitor'>Мониторы</Link></li>
        <li><Link to = '/cat/cellphone'>Телефоны</Link></li> 

        <Switch>
      <Route  exact path="/cat/notebook" component={Notebook}/>
      <Route  exact path="/cat/monitor" component={Monitor}/>
      <Route  exact path="/cat/cellphone" component={Cellphone}/>
      {/* <Route component={Error}/> */}
      </Switch>
    </Router>
    </div>
  );
}

export default CategoryDescription;
