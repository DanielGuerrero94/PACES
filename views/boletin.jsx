var React = require('react');

class Boletin extends React.Component {
  render() {
    return (
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Boletin</h5>
    <p className="card-text">{this.props.boletin}</p>
  </div>
</div>
    );
  }
}

module.exports = Boletin;


