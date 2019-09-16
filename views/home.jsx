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
	    <a href="/calendario"><button type="button" className="btn btn-interfaz btn-home">Calendario de Eventos</button></a>
	</div>
	</div>

	<div className="row row-consultas justify-content-center">
	  <div className="col col-lg-4">
	    </div>
	  <div className="col col-lg-4">
	    <a href="/consultas"><button type="button" className="btn btn-interfaz btn-home">Buzón de Consultas</button></a>
	</div>
	  <div className="col col-lg-1">
	</div>
	  <div className="col col-lg-3">
	    <a href="/contactos/provincias"><button type="button" className="btn btn-interfaz btn-home disabled">Contacto Provincias</button></a>
	</div>
	</div>


	</MainLayout>
    );
  }
}

module.exports = Home;
