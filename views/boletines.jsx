var React = require('react');
var MainLayout = require('./layouts/main');
var Container = require('./layouts/container');

class Boletines extends React.Component {
  render() {
    return (
	    <MainLayout>
	    <Container title='1. Boletín'>
	    </Container>
	    </MainLayout>
    );
  }
}

module.exports = Boletines;
