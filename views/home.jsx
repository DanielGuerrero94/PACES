var React = require('react');
var MainLayout = require('./layouts/main');
var Button = require('./button');

class Home extends React.Component {

  notificar() {
	console.log('asd')
  }

  render() {
    return( 
	<MainLayout>
	<div className="row">
	  <div className="col col-lg-3">
            <Button href='/boletines' onClick={this.notificar()}>1. Boletín</Button>
	  </div>
	  <div className="col col-lg-3">
            <Button href='/noticias'>2. Resumen de Noticias.</Button>
	  </div>
	  <div className="col col-lg-3">
            <Button href='/reportes'>3. Reportes</Button>
	  </div>
	  <div className="col col-lg-3">
            <Button href='/contactos/nacion'>4. Contactos Nación</Button>
	  </div>
	</div>

	<div className="row row-calendario justify-content-center">
	  <div className="col col-lg-4">
	    <button type="button" className="btn btn-interfaz btn-home" data-toggle="modal" data-target=".bd-example-modal-sm">Calendario de Eventos</button>
	</div>
	</div>

	<div className="row row-consultas justify-content-center">
	  <div className="col col-lg-4">
	    </div>
	  <div className="col col-lg-4">
	    <button type="button" className="btn btn-interfaz btn-home" data-toggle="modal" data-target=".bd-example-modal-sm">Buzón de Consultas</button>
	</div>
	  <div className="col col-lg-1">
	</div>
	  <div className="col col-lg-3">
	    <button type="button" className="btn btn-interfaz btn-home disabled" data-toggle="modal" data-target=".bd-example-modal-sm">Contacto Provincias</button>
	</div>
	</div>


	</MainLayout>
    );
  }
}

module.exports = Home;
