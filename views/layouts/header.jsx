var React = require('react');

class HeaderLayout extends React.Component {
  render() {
    return( 
      <div className="row">
	<div className="col-6">
	<div className="col-3">
    	    <a className="btn btn-xsm btn-interfaz" href="#">Volver</a>
	</div>
	</div>
	<div className="col-6">
	    <div className="row justify-content-end">
    	    <a className="btn btn-xsm btn-programa" href="#">Sumar</a>
    	    <a className="btn btn-xsm btn-programa disabled" href="#">Proteger</a>
    	    <a className="btn btn-xsm btn-programa disabled" href="#">Redes</a>
	</div>
	</div>
      </div>
    );
  }
}

module.exports = HeaderLayout;
