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
    	    <a className="btn btn-xsm btn-programa btn-primary disabled" href="#">Áreas Integradas</a>
    	    <a className="btn btn-xsm btn-programa btn-warning disabled" href="#">Paces</a>
    	    <a className="btn btn-xsm btn-programa btn-danger disabled" href="#">Proteger</a>
    	    <a className="btn btn-xsm btn-programa btn-success disabled" href="#">Redes</a>
	</div>
	</div>
      </div>
    );
  }
}

module.exports = HeaderLayout;
