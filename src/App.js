import React, { Component } from "react";
import "./App.css";
import "../src/dashboard.css";
import Navlaterral from "./components/Navlateral";
import {Route,Switch} from "react-router-dom"
import Products from './components/Products';
import Emails from './components/Emails';
import Customers from './components/Customers';
import Pedidos from './components/orders';


class App extends Component {
  render() {
    return (
    
<React.Fragment>
<div >
<Navlaterral></Navlaterral>



<div className="main">

 <Switch>
<Route path="/Emails" component={Emails}/>
<Route path="/orders" component={Pedidos}/>
<Route path="/Products" component={Products}/>
<Route path="/Customers" component={Customers}/>

</Switch>

 
</div>
</div>

</React.Fragment>

    );
  }
}

export default App;
