var React = require('react');

class HeaderLayout extends React.Component {
  render() {
    return( 
      <div className="row">
	<div className="col-6">
	<div className="col-3">
    	    <button className="btn btn-xsm btn-interfaz" id="volver">Volver</button>
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
<div className="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-sm">
    <div className="modal-content">
 <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">En desarrollo</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body building">
	    <img src="public/images/express.png" height="250" width="298"/>
      </div>
    </div>
  </div>
</div>

      </div>
    );
  }
}

module.exports = HeaderLayout;
