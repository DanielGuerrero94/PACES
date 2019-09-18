var React = require('react');
var MainLayout = require('./layouts/main');
var Container = require('./layouts/container');
var Boletin = require('./boletin');
  const spaceStyle = {
 	width: '20%',
	  paddingRight: '10px',
  };


class Boletines extends React.Component {


  render() {
    return (
	    <MainLayout>
		<div className="card text-white mb-3">
  <div className="card-header mini bg-primary"></div>
  <div className="card-body container-interfaz d-flex">
	    <div className='row align-content-center' style={{flex: 'auto'}}>
	    <div classname='col col-lg-3' style={spaceStyle}>
		<Boletin boletin='001'></Boletin>
	    </div>
<div classname='col col-lg-3' style={spaceStyle}>
		<Boletin boletin='002'>asd</Boletin>
	    </div>
<div classname='col col-lg-3' style={spaceStyle}>
		<Boletin boletin='003'></Boletin>
	    </div>
	<div classname='col col-lg-3' style={spaceStyle}>
		<Boletin boletin='004'></Boletin>
	    </div>

	    </div>

  </div>
</div>
	    </MainLayout>
    );
  }
}

module.exports = Boletines;
