var React = require('react');
var MainLayout = require('./layouts/main');
var Container = require('./layouts/container');

class Contactos extends React.Component {
  render() {
    return (
	    <MainLayout>
	    <Container title='4. Contactos Nación'>
<div className="text-center">
  <img src="public/images/agus.jpg" className="rounded-circle border border-warning profile" alt="..."/>
</div>
	    </Container>
	    </MainLayout>
    );
  }
}

module.exports = Contactos;
