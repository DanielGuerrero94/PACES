var React = require('react');
var MainLayout = require('./layouts/main');

class Button extends React.Component {
  render() {
    return( 
	    <a href={this.props.href}>
        <button type="button" className="btn btn-interfaz btn-home">
        {this.props.children}
        </button>
      </a>
    );
  }
}

module.exports = Button;
