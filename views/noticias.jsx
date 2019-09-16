var React = require('react');
var MainLayout = require('./layouts/main');
var Container = require('./layouts/container');
var Noticia = require('./noticia');

class Noticias extends React.Component {
  render() {
    return (
	    <MainLayout>
	    <Container title='2. Resumen de Noticias'>
	    <div className='row justify-content-center'>
	    <div classname='col col-md-3'>
		<Noticia noticia='Noticia 001' mes='Agosto'></Noticia>
	    </div>
<div classname='col col-md-3'>
		<Noticia noticia='Noticia 002' mes='Septiembre'></Noticia>
	    </div>
<div classname='col col-md-3'>
		<Noticia noticia='Noticia 003' mes='Octubre'></Noticia>
	    </div>
<div classname='col col-md-3'>
		<Noticia noticia='Noticia 004' mes='Noviembre'></Noticia>
	    </div>

	    </div>
	    </Container>
	    </MainLayout>

    );
  }
}

module.exports = Noticias;
