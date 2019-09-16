var React = require('react');
var MainLayout = require('./layouts/main');
var Container = require('./layouts/container');

class Contacto extends React.Component {
  render() {
    return (
	    <MainLayout>
	    <Container title='Contacto'>
	    <p>Programa: { this.props.consultor.programa }</p>
	    <p>Area: { this.props.consultor.area }</p>
	    <p>Nombre: { this.props.consultor.nombre }</p>
	    <p>Interno: { this.props.consultor.interno }</p>
	    <p>Cargo: { this.props.consultor.cargo }</p>
	    <p>Mail: { this.props.consultor.mail }</p>
	    </Container>
	    </MainLayout>
    );
  }
}

module.exports = Contacto;
