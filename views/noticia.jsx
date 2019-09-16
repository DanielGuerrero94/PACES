var React = require('react');

class Noticia extends React.Component {
  render() {
    return (
<div className="card">
  <div className="card-body">
    <h5 className="card-title">{this.props.noticia}</h5>
    <p className="card-text">Noticas del mes {this.props.mes}</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <img src="" className="card-img-top" alt=""/>
</div>
    );
  }
}

module.exports = Noticia;


