var React = require('react');

class GrayContainer extends React.Component {
  render() {
    return (
      <div>
	    <h3>{this.props.title}</h3>
	    {this.props.children}
      </div>
    );
  }
}

module.exports = GrayContainer;
