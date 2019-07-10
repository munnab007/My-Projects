import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Productlist from './Components/Product-list';
import Details from './Components/Pagination';
import Userlist from './Components/Userlist';
import Default from './Components/Default';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Productlist}/>
       <Route path="/details" component={Details}/>
       <Route path="/Userlist" component={Userlist}/>
       <Route component={Default}/>
     </Switch>
    </React.Fragment>
  );
}
export default App;
