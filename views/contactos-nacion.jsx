var React = require('react');
var MainLayout = require('./layouts/main');
var Container = require('./layouts/container');
var window = require('global');

class Contactos extends React.Component {
  render() {
    return (
      <MainLayout>
        <Container title='4. Contactos Nación'>
          <div className="text-center">
            <img id="my-image" className="rounded-circle border border-warning profile" src="public/images/agus.jpg" />
            <button className="edit">Editar</button>
            <button className="save">Guardar</button>
          </div>
        </Container>
      </MainLayout>
    );
  }
}

module.exports = Contactos;
