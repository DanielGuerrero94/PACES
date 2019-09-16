var React = require('react');

class Container extends React.Component {
  render() {
    return (
      <div className="container-interfaz">
	    <h3>{this.props.title}</h3>
	    {this.props.children}
      </div>
    );
  }
}

module.exports = Container;
