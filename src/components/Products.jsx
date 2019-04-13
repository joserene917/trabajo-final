import React, { Component } from 'react';

class products extends Component {
    state = {  }
    render() { 
        return ( 

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <br ></br>
            <div className="jumbotron">
                <h1 className="display-4">Bienvenidos a Productos</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-danger btn-lg"  role="button">Ver más Productos</a>
            </div>
           </main>
         );
    }
}
 
export default products;