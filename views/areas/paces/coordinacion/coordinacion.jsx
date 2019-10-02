var React = require('react');
var MainLayout = require('./layouts/main');
var GrayContainer = require('./layouts/gray-container');
var window = require('global');

class Contactos extends React.Component {
  render() {
    return (
      <MainLayout>
        <GrayContainer title='4. Contactos Nación'>
          <div className="text-center">
            <img id="my-image" className="rounded-circle border border-warning profile" src="public/images/agus.jpg" />
            <button className="edit">Editar</button>
            <button className="save">Guardar</button>
          </div>
        </GrayContainer>
      </MainLayout>
    );
  }
}

module.exports = Contactos;
