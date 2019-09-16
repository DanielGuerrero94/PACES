var React = require('react');
var MainLayout = require('./layouts/main');
var Container = require('./layouts/container');

class Contactos extends React.Component {
  render() {
    return (
	    <MainLayout>
	    <Container title='Crear nuevo contacto'>
            <div className='card'>
                <form>
                <input name='nombre' placeholder='nombre'></input>
                <input name='apellido' placeholder='apellido'></input>
                <input name='interno' placeholder='interno'></input>
                </form>
            </div>
	    </Container>
	    </MainLayout>
    );
  }
}

module.exports = Contactos;
