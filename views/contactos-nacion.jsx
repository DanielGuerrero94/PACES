var React = require('react');
var MainLayout = require('./layouts/main');
var GrayContainer = require('./layouts/gray-container');
var window = require('global');
var Logging = require('./logging-button');

  function activateFilter(e) {
  	e.preventDefault()
	  alert('Filter')
  }

const rowStyle = {
	paddingTop: '20px',
}

const areasStyle = {
	height: '250px',
	overflowY: 'scroll',
	backgroundColor: '#dcdddc',
}

class Contactos extends React.Component {

	 constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
  }

  list(area) {
    let areas = {'integradas' : ['Administracion y finanzas', 'Asesoría Técnico - Jurídica', 'Evaluación e Investigación', 'Gestión Clínica y Calidad de Atención'],
    	'paces': [],
    	'proteger': [],
    	'redes': ['Coordinación Redes','Apoyo a Provincias Redes','Monitoreo Redes','Mesa de Entradas']
    }
    let list = []

    // Outer loop to create parent
    let rows = areas[area]
    for (let i = 0; i < rows.length; i++) {
        list.push(<div><font size="5">{rows[i]}</font><hr></hr></div>)
    }
    return list
  }


  render() {
    return (
      <MainLayout>
        <GrayContainer title='4. Contactos Nación'>
          <div className="row">
          <div className="col col-lg-10">
          </div>
          <div className="col col-lg-2">
<button type="button" className="btn btn-outline-primary btn-lg" onclick="alert('click')">Buscador / Filtro</button>
	    <div className="input-group input-group-lg" style={{display: 'none'}}>
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
  </div>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>
                </div>
                </div>
          <div className="row" style={rowStyle}>
            <div className="col col-lg-1">
            </div>
            <div className="col col-sm-12 col-lg-10">
              <div className="card bg-primary-paces">
                <div className="card-content">
	    <h4><font color="white">Dirección de Articulación de Coberturas Públicas Jurisdiccionales</font></h4>
                </div>
              </div>
            </div>
            <div className="col col-lg-1">
            </div>
          </div>

          <div className="row" style={rowStyle}>
            <div className="col col-lg-2">
            </div>
            <div className="col col-sm-4 col-lg-2">
              <div className="card">
                <div className="card-header bg-primary-paces"></div>
                <div className="card-content" style={areasStyle}>
	    		{this.list('integradas')}
                </div>
              </div>
            </div>
            <div className="col col-sm-4 col-lg-2">
              <div className="card">
                <div className="card-header bg-warning"></div>
                <div className="card-content" style={areasStyle}>
	    		{this.list('paces')}
                </div>
              </div>
            </div>
            <div className="col col-sm-4 col-lg-2">
              <div className="card">
                <div className="card-header bg-danger"></div>
                <div className="card-content" style={areasStyle}>
	    		{this.list('proteger')}
                </div>
              </div>
            </div>
            <div className="col col-sm-4 col-lg-2">
              <div className="card">
                <div className="card-header bg-success"></div>
                <div className="card-content" style={areasStyle}>
	    		{this.list('redes')}
                </div>
              </div>
            </div>
            <div className="col col-lg-2">
            </div>
          </div>

          <div className="row" style={rowStyle}>
            <div className="col col-lg-1">
            </div>
            <div className="col col-sm-12 col-lg-10">
              <div className="card bg-primary-paces">
                <div className="card-content">
                  <h4><font color="white">Mesa de Entradas</font></h4>
                </div>
              </div>
            </div>
            <div className="col col-lg-1">
            </div>
          </div>

        </GrayContainer>
      </MainLayout >
    );
  }
}

module.exports = Contactos;
