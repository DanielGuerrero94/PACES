var React = require('react');
var MainLayout = require('./layouts/main');
var Container = require('./layouts/container');

class Reportes extends React.Component {
  render() {
    return (
	    <MainLayout>
	    <Container title='3. Reportes'>
	    <div className="row justify-content-center">
	      <div className="col col-3">
	    <a href="/reportes"><button type="button" className="btn btn-interfaz btn-home" id="reportes">Reporte</button></a>
	      </div>
	      <div className="col col-3">
	    <a href="/informes"><button type="button" className="btn btn-interfaz btn-home" id="informes">Informes de Áreas</button></a>
	      </div>
	      <div className="col col-3">
	    <a href="/trazadoras"><button type="button" className="btn btn-interfaz btn-home" id="trazadoras">Desemp. en Trazadoras</button></a>	
	      </div>
	    </div>
	    </Container>
	    </MainLayout>
    );
  }
}

module.exports = Reportes;
