import React, { Component } from 'react';
import Lista from './Lista';

import {Route} from "react-router-dom"
import Vistalista from './Vistalista';
class Emails extends Component {
    state = {  }
    render() { 
        return ( 
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-0">

            <div className="container ">
              <div className="row ">
                <Lista></Lista>
                <div  className="col-8 col-lg-8 px-0 ">
               <Route path="/Emails/Detail/:parametro"  component={Vistalista}/>
                </div>
             </div>
            </div>
            </main>
         );
    }
}
 
export default Emails;