import React, { Component } from 'react';
import {GetDatos, GetDatosId} from './../services/datos';
import {Link} from 'react-router-dom';
import "./../css/lista.css"
import Vistalista from './Vistalista';

class Listado extends Component {
    state = {  
        Datos: GetDatos(),
    }



    render() { 
        return ( 
            <div  className="col-4">
            <div className="list-group">
            
                <a href="#" className="list-group-item list-group-item-action ">
                    <h4>Listado de Correos : {this.state.Datos.length}</h4>
                </a>
                {this.state.Datos.map(lista=>(<a href="#" key={lista.id} className="list-group-item list-group-item-action">
                
                <div className="media">
                
                <img width="50" className="align-self-center mr-3" src={lista.foto} alt=""/>
                
                <div className="media-body">
                <Link  className="text-decoration-none"  to={`/Emails/Detail/${lista.id}`}>
                
                { lista.first_name + ' ' + lista.last_name }
                
                </Link>
              
                <small className="float-right">{lista.date}</small> <br></br>
                {lista.email}
                </div>
                </div>

                </a>))}
  
            </div></div>
         );
    }
}
 
export default Listado;