
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import MenuSuperior from './Navsuperior';



class MenuLateral extends Component {
    state = { 
    };   
    render() { 
        return ( 
          <div>

          <MenuSuperior></MenuSuperior>
           
<nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
        <li className="nav-item">
            <a className="nav-link" href="/">
              NAVEGACION 
            </a>
        </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/Emails">
              Emails <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/orders">
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Customers">
              Customers
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    </div>
   
         );
    }
}
 
export default MenuLateral;
